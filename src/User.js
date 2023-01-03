import './App.css'
import React, { createContext, useState, lazy, useEffect,Suspense } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//import Editform from './Editform';
const Editform = lazy(() => import('./Editform'));

export const Globaldata = createContext();

function User({edit1},{arr}) {
  
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
  //edit1=="true" && (inputdata.name=name1, inputdata.email=email1, inputdata.number= number1 reset(inputdata))
  const test=()=>{
    console.log(inputdata)
    reset(inputdata);
    
  }
  useEffect(()=>{
    console.log("hello",edit1,arr)
    
  if(edit1=="true"){
    inputdata.name=arr[0].name
    inputdata.email=arr[0].email
    inputdata.number= arr[0].number
    reset(inputdata)
    setEdit(true)
    console.log(edit1,"edit1")
  } 
})
  const { register, reset, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues:inputdata
  });
  
  const onSubmit = (data) => {
    edit&& (array.splice(arr, 1, data))
    setArray([...array,data])
    setShowemployee(false);
    setShowstudent(false);
    console.log(data);      
    
      
  };
  const onError = () =>{

  }
  
  const handleDelete = (index) => {
    
  };
  // const handleUpdate = (i) => {
  //   arr=array.filter((element,index)=>element.name== i);
  
  //   inputdata.name=arr[0].name
  //   inputdata.email=arr[0].email
  //   inputdata.number=arr[0].number
  //   reset(inputdata);
  //   setEdit(true);
  //   console.log(edit,"edit",inputdata.name)
  // };
  
  
  return (
    <Globaldata.Provider value={{arraydata: array }}>
    <div className="App">
      
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
        <div>
            <div>
            <label>Current office name</label>
            <input type="name" name="officename" {...register('officename')} />
            <label>{errors.officename?.message}</label>
          </div>
          <div>
            <label>Previous experience</label>
            <input type="number" name="experience" {...register('experience')}/>
            <label>{errors.experience?.message}</label>
          </div>
        </div>
      )}
      {showstudent && (
        <div>
            <div>
            <label>College Name</label>
            <input type="text" name="collageName" {...register('collageName')} />
            <label>{errors.collageName?.message}</label>
          </div>
          <div>
            <label>School name</label>
            <input type="text" name="schoolName" {...register('schoolName')} />
            <label>{errors.schoolName?.message}</label>
          </div>
          <div>
            <label>Hobbies</label>
            <input type="text" name="hobbies" {...register('hobbies')} />
            <label>{errors.hobbies?.message}</label>
          </div>
        </div>
      )
      }
     <button onClick={() => test()} > Reset</button>
      {edit ?(<button type='submit'>Update</button>):(
      <button type='submit' > Submit</button>
      )}
    </form>
    <Suspense fallback={<h1>Loading...</h1>}>
        <Editform />
        </Suspense>
  </div>   
  </Globaldata.Provider>
  );
}

export default User;
