import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './App.css';
function Usertype() {
  const schema = yup.object().shape({
    name:yup.string().min(2).required(),
  number:yup.number().required(),
  email: yup.string().email().required(),
  employee:yup.string(),
  student:yup.string(),
  officename:yup.string().when("employee", {
    is: employee==="employee",
    then: yup.string().required() }),
  experience:yup.number().when("employee", {
    is: employee==="employee",
    then: yup.number().required() }),
  collageName:yup.string().when("student", {
    is: student==="student",
    then: yup.string().required() }),
  schoolName:yup.string().when("student", {
    is: student==="student",
    then: yup.string().required() }),
  hobbies:yup.string().when("student", {
    is: student==="student",
    then: yup.string().required() })
  
  });

  const [showemployee, setShowemployee] = useState(false);
  const [showstudent, setShowstudent] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editstud, setEditstud] = useState(false);


  const [val, setVal] = useState([]); //val for dropdown
  const [editform, setEditform] = useState([]);
  const [array, setArray] = useState([]); //Main Array of object


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultvalues:editform
  });


  const onSubmit = (data) => {
    data.value=val;
    setArray([...array, data]);
    console.log(array,"main aarray")
    setShowemployee(false);
    setShowstudent(false);
  };

  const handleDelete = (index) => {
    array.splice(index, 1);
    setArray([...array]);
  };

  const handleUpdate = (i) => {
    setEdit(true);
    
 let arr= array.map((element, index) =>element.name === i);
    setEditform(arr);
    console.log(arr)
    console.log(editform);
  };
  const onError = (error) => {
    console.log(error,"error msg");
  };

  const onEdit = (data) => {
    array.splice(editform, 1, data);
    setEditform([])
    console.log(data);
    console.log(editform);
    //setArray([...array]);
  };

  // componentDidMount(){
       
  // }

  return (
    <div>
       <form>
         
      <select value={val} onChange={(e) => setVal(e.target.value)}>
      <option value="select">Select</option>

        <option value="employee" name="employee" {...register('employee')} onClick={() => setShowemployee(!showemployee)} {...register('employee')} >Employee</option>
        <option value="student" name="student" {...register('employee')} onClick={() => setShowstudent(!showstudent)} {...register('student')}>Student</option>
      </select>
      </form>
      <h1>{val}</h1>
      {showemployee && (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
        <h1>Employee form</h1>
        
             <div>
            <label>Name</label>
            <input name="name" type="text" {...register('name')} />
            <label>{errors.name?.message}</label>
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" {...register('email')} />
            <label>{errors.email?.message}</label>
          </div>
          <div>
            <label>Contact no.</label>
            <input name="number" type="text" {...register('number')} />
            <label>{errors.number?.message}</label>
          </div>
          <div>
            <label>Current office name</label>
            <input type="name" name="officename" {...register('officename')} />
            <label>{errors.officename?.message}</label>
          </div>
          <div>
            <label>Previous experience</label>
            <input
              type="number"
              name="experience"
              {...register('experience')}
            />
            <label>{errors.experience?.message}</label>
          </div>

          <button type="submit">submit</button>
        </form>
      )}
      {edit && (
        <form onSubmit={handleSubmit(onEdit)}>
          <h1>Employee Update Form</h1>
          <div>
            <label>Name</label>
            <input
              defaultValue={editform.name}
              name="name"
              type="text"
              {...register('name')}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              defaultValue={editform.email}
              type="email"
              name="email"
              {...register('email')}
            />
          </div>
          <div>
            <label>Contact no.</label>
            <input
                defaultValue={editform.number}
              name="number"
              type="text"
              {...register('number')}
            />
          </div>
          <div>
            <label>Current office name</label>
            <input
              
              type="name"
              name="officename"
              {...register('officename')}
            />
          </div>
          <div>
            <label>Previous experience</label>
            <input
              
              type="number"
              name="experience"
              {...register('experience')}
            />
          </div>

          <button type="submit">Update</button>
        </form>
      )}
      {editstud && (
        <form onSubmit={handleSubmit(onEdit, onError)}>
          <h1>Student Update Form</h1>
          <div>
            <label>Name</label>
            <input name="name" {...register('name')} type="text" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" {...register('email')} />
          </div>
          <div>
            <label>Contact no.</label>
            <input name="number" {...register('number')} />
          </div>
          <div>
            <label>College Name</label>
            <input type="number" name="collageName" {...register('collageName')} />
          </div>
          <div>
            <label>School name</label>
            <input type="number" name="schoolName" {...register('schoolName')} />
          </div>
          <div>
            <label>Hobbies</label>
            <input type="number" name="hobbies" {...register('hobbies')} />
          </div>
          <button type="submit">submit</button>
        </form>
      )}

      {showstudent && (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <h1>Student Form</h1>
          
          <div>
            <label>Name</label>
            <input name="name" {...register('name')} type="text" />
            <label>{errors.name?.message}</label>
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" {...register('email')} />
            <label>{errors.email?.message}</label>
          </div>
          <div>
            <label>Contact no.</label>
            <input name="number" {...register('number')} />
            <label>{errors.number?.message}</label>
          </div>
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
          <button type="submit">submit</button>
        </form>
      )}

      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact no.</th>
          </tr>

          {array.map((item, index) => (
            <tr key={index}>

              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.number}</td>
              <td>{item.value}</td>
              <td><button onClick={() => handleUpdate(item.name)}>Update</button></td>
              <td><button onClick={() => handleDelete(index)}>Delete</button></td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
export default Usertype;
