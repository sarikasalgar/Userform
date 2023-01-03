import './App.css'
import React, { useContext, useState,lazy } from 'react';
import User from './User';
import { Globaldata } from './User';

function Editform() {
    
  const { arraydata } = useContext(Globaldata);

  
  const handleDelete =()=>{
    array.splice(index, 1);
    setArray([...array]);
  }
  let edit1="true"
  let arr=[];
  const [edit,setEdit]=useState(false);
  
  const handleUpdate = (i) => {
      arr=arraydata.filter((element,index)=>element.name== i);
      
      setEdit(true);
      //console.log(edit1,arr1.name,arr1[0].email,arr1.number);
      console.log(input)
    };
    
    
  return (
    <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Contact no.</th>
      </tr>

      {arraydata.map((item, index) => (
        <tr key={index}>

          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.number}</td>
          <td>{item.user}</td>
          <td><button onClick={() => handleUpdate(item.name)}>Update</button></td>
          <td><button onClick={() => handleDelete(index)}>Delete</button></td>
        </tr>
      ))}
    </table>
    {edit&& (<User edit1 arr/>)}
  </div>
  );
}

export default Editform;
