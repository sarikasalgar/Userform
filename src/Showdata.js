import './App.css'
import React, { useContext, useState,useEffect } from 'react';
import User from './User';
import { Globaldata } from './User';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';

function Showdata() {
    
  const { array,handleUpdate,handleDelete} = useContext(Globaldata);
  useEffect(()=>{
     console.log(array,"showdata array")
  })
  
  
  return (
    <div>
    <Table>
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
          <td><Button variant="contained" color="success" onClick={() => handleUpdate(item.name,array)}>Update</Button></td>
          <td><Button variant="contained" color="warning" onClick={() => handleDelete(index,array)}>Delete</Button></td>
        </tr>
      ))}
    </Table>
    
  </div>
  );
}

export default Showdata;
