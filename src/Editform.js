import './App.css'
import React, { createContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import User from './User';

function Editform() {
    
    const [showemployee, setShowemployee] = useState(false);
  const [showstudent, setShowstudent] = useState(false);
  const [val, setVal] = useState([]); //val for dropdown
  const [array,setArray]=useState([]);
  //const [editform,setEditform]=useState([]);
  let arr=[];
  const inputdata={
    name : '',
    email: '',
    contact:''
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    
    defaultValues: inputdata
  });
  
  const onSubmit = (data) => {
    setArray([...array,data])
    setShowemployee(false);
    setShowstudent(false);
    console.log(data);      
    
  };
  const onError = () =>{

  }
  
  
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
      <h1>User Form</h1>
      <div>
        <label>Name</label>
        <input name="name" {...register('name')} type="text" />
        
      </div>
      <label>{errors.name?.message}</label>
      <div>
        <label>Email</label>
        <input type="email" name="email" {...register('email')}  defaultvalue={inputdata.name}/>
      </div>
      <label>{errors.email?.message}</label>
      <div>
        <label>Contact no</label>
        <input type="number" name="number" {...register('number')} />
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
      
      <button type='submit'>Submit</button>
    </form>
    
    
    
    
  </div>   
  );
}

export default Editform;
