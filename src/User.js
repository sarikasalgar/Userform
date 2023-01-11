import './App.css'
import React, { createContext, useState, lazy, useEffect,Suspense } from 'react';
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useCallback, useMemo } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import Showemployee from './Showemployee';
import Showstudent from './Showstudent';
import * as yup from "yup";
import Header from './Header';
import Sidenav from './Sidenav';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import DehazeIcon from '@mui/icons-material/Dehaze';
import {Select,MenuItem, TextField} from '@mui/material';

//import Editform from './Editform';
const Showdata = lazy(() => import('./Showdata'));

export const Globaldata = createContext();

function User() {
  const methods = useForm();
    const schema = yup.object().shape({
    name:yup.string().min(2).required(),
    number:yup.number().required(),
    email: yup.string().email().required(),
        user:yup.string(),
    officename:yup.string().when("user", {
        is: "employee",
        then: yup.string().required() }),
    experience:yup.string().when("user", {
        is: "employee",
        then: yup.string().required() }),
    collageName:yup.string().when("user", {
        is: "student",
        then: yup.string().required() }),
    schoolName:yup.string().when("user", {
        is: "student",
        then: yup.string().required() }),
    hobbies:yup.string().when("user", {
        is: "student",
        then: yup.string().required() })
    
    });

    const [showemployee, setShowemployee] = useState(false);
  const [showstudent, setShowstudent] = useState(false);
  const [edit,setEdit]=useState(false);
  const [array,setArray]=useState([]);
  const [val,setVal]=useState("Select User");
  
  const inputdata = {
    name:" ",
      email:" ",
      number: " ",
      user:" "
  };
   const resetdata=()=>{
    console.log(inputdata)
    reset(inputdata);
    setEdit(false);
  }
//   useEffect(()=>{
//     let edit1=props.values[0];
//     let arr=props.values[1]
//     console.log("hello",edit1,arr)
    
//   if(edit1=="true"){
//     inputdata.name=arr[0].name
//     inputdata.email=arr[0].email
//     inputdata.number= arr[0].number
//     reset(inputdata)
//     setEdit(true)
//     console.log(edit1,"edit1")
//   } 
// })
  const { register, reset, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues:inputdata
  });
  
  const onSubmit = (data) => {
    edit? (array.splice(arr, 1, data)):setArray([...array,data])
    
    setShowemployee(false);
    setShowstudent(false);
    console.log(arr, "onsubmit");      
    
      
  };
  const onError=()=>{

  }
  let arr=[];
  const handleUpdate = useCallback((i,array) => {
    arr=array.filter((element,index)=>element.name== i);
  
    inputdata.name=arr[0].name
    inputdata.email=arr[0].email
    inputdata.number=arr[0].number
    reset(inputdata);
    setEdit(true);
    console.log(array,"User array",arr,"filtered array")
  },[]);
  const handleDelete =useCallback((index,array)=>{
    console.log(array)
    array.splice(index, 1);
    setArray([...array]);
  },[]);
  const contextValue = useMemo(() => ({
    array,
    handleUpdate,
    handleDelete
  }), [array, handleUpdate,handleDelete]);
  const updateval=(e,val)=>{
    console.warn(e.target.value);
    setVal(e.target.value)
  }
  
  return (
    <Globaldata.Provider value={contextValue}>

    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div>
        <Sidenav />
      </div>
      <div className='table'>
        <div><DehazeIcon/></div>
        <Button variant="contained" color="success" onClick={() => resetdata()} >Add User</Button>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Showdata />
        </Suspense>
      </div>
      <div className='formdiv'>
        <DehazeIcon/>
        <FormProvider {...methods} > 
        <form onSubmit={handleSubmit(onSubmit, onError)}> 
          
        
          <h1>User Form</h1>
          <div>
            {/* <InputLabel size='normal'>Name</InputLabel> */}
            <TextField name="name" {...register('name')} type="text" label="Name" />
            
          </div>
          
          <div>
            {/* <InputLabel size='normal'>Email</InputLabel> */}
            <TextField type="email" color='primary' name="email" {...register('email')} label="Email" />
          </div>
          <InputLabel size='normal' error>{errors.email?.message}</InputLabel>
          <div>
            {/* <InputLabel size='normal'>Contact no</InputLabel> */}
            <TextField type="number" name="number" {...register('number')} label="Contact no." />
          </div>
          <InputLabel size='normal' error>{errors.number?.message}</InputLabel>
          <div>
          <InputLabel size='normal'>Select User</InputLabel>
          <Select 
          sx={{
            width: 150,
            height: 40,
          }} {...register('user')} type="text" name="user" >
            <MenuItem  value={"Employee"}  onClick={() => setShowemployee(!showemployee)} >Employee</MenuItem>
            <MenuItem value={"Student"}  onClick={() => setShowstudent(!showstudent)} >Student</MenuItem>
          </Select>
          </div>
          
          
          {showemployee && ( 
            <Showemployee />
          )}
          {showstudent && (
            <Showstudent />
          )}
          
        <Button id="button" variant="contained" onClick={() => resetdata() } > Reset</Button>
          {edit ?(<Button type='submit' variant="contained">Update</Button>):(
          <Button type='submit'variant="contained" > Submit</Button>
          )}
        </form>
        </FormProvider>
      </div>
      
  </div>   
  </Globaldata.Provider>
  );
}

export default User;
