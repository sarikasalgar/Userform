import './App.css'
import React, { useContext, useState,useEffect } from 'react';
import User from './User';
import { Globaldata } from './User';

function Showdata() {
    
  const { array,handleUpdate } = useContext(Globaldata);
  useEffect(()=>{
     console.log(array,"showdata array")
  })
  
  const handleDelete =()=>{
    array.splice(index, 1);
    setArray([...array]);
  }
  
  return (
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
          <td>{item.user}</td>
          <td><button onClick={() => handleUpdate(item.name)}>Update</button></td>
          <td><button onClick={() => handleDelete(index)}>Delete</button></td>
        </tr>
      ))}
    </table>
    
  </div>
  );
}

export default Showdata;
