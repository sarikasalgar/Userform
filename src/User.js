import './App.css'
import React, { createContext, useState, lazy, useEffect,Suspense } from 'react';
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useCallback, useMemo } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import Showemployee from './Showemployee';
import Showstudent from './Showstudent';
import * as yup from "yup";
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
  
  const inputdata = {
    name:" ",
      email:" ",
      number: " "
  };
   const test=()=>{
    console.log(inputdata)
    reset(inputdata);
    
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
    edit&& (array.splice(arr, 1, data))
    setArray([...array,data])
    setShowemployee(false);
    setShowstudent(false);
    console.log(array, "onsubmit");      
    
      
  };
  const onError=()=>{

  }
  let arr=[];
  const handleUpdate = useCallback((i) => {
    arr=array.filter((element,index)=>element.name== i);
  
    inputdata.name=arr.name
    inputdata.email=arr.email
    inputdata.number=arr.number
    reset(inputdata);
    setEdit(true);
    console.log(array,"User array",arr,"filtered array")
  },[]);
  
  const contextValue = useMemo(() => ({
    array,
    handleUpdate
  }), [array, handleUpdate]);
  
  return (
    <Globaldata.Provider value={contextValue}>
    <div className="App">
    <FormProvider {...methods} > 
    <form onSubmit={handleSubmit(onSubmit, onError)}> 
      
    
      <h1>User Form</h1>
      <div>
        <label>Name</label>
        <input name="name" {...register('name')} type="text"  />
        
      </div>
      <label>{errors.name?.message}</label>
      <div>
        <label>Email</label>
        <input type="email" name="email" {...register('email')}  />
      </div>
      <label>{errors.email?.message}</label>
      <div>
        <label>Contact no</label>
        <input type="number" name="number" {...register('number')}  />
      </div>
      <label>{errors.number?.message}</label>
      <select name='user' {...register('user')} >
      <option value="select" >Select</option>

        <option name="employee"  onClick={() => setShowemployee(!showemployee)} >Employee</option>
        <option name="student"  onClick={() => setShowstudent(!showstudent)} >Student</option>
      </select>
        
      
      
      {showemployee && ( 
        <Showemployee />
      )}
      {showstudent && (
        <Showstudent />
      )
      }
     <button onClick={() => test()} > Reset</button>
      {edit ?(<button type='submit'>Update</button>):(
      <button type='submit' > Submit</button>
      )}
    </form>
    </FormProvider>
    <Suspense fallback={<h1>Loading...</h1>}>
        <Showdata />
    </Suspense>
  </div>   
  </Globaldata.Provider>
  );
}

export default User;
