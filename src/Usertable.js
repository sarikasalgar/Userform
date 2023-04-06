import './App.css'
import React, { useContext, useState,useEffect } from 'react';
import Userform from './Userform';
import { Globaldata } from './Userform';  
import {array} from './Userform';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Link,useParams} from 'react-router-dom';


function Usertable() {
  
  

  
 let { array,handleUpdate,handleDelete} = useContext(Globaldata) || {}; 

  // useEffect(()=>{
  //    console.log(array,"showdata array")
  // })
  
  
  
  return (
    <div className='tablediv'>
      
      
      <Link to="/Userform"><Button variant="contained" color="success"  >Add User</Button></Link>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact no.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {array?.map((item, index) => (
              <TableRow key={index}>
                
                <TableCell align="right"><input type="checkbox" onChange={() => handleUpdate(item.name,array)}/></TableCell>
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.email}</TableCell>
                <TableCell align="right">{item.number}</TableCell>
                <TableCell align="right">{item.user}</TableCell>
                <TableCell align="right"><Button onClick={() => handleDelete(index,array)}><DeleteForeverIcon /></Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    {/* <Table>s
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
          
          <td><input type="checkbox" onChange={() => handleUpdate(item.name,array)}/></td>
          <td><Button variant="contained" color="warning" onClick={() => handleDelete(index,array)}>Delete</Button></td>
        </tr>
      ))}
    </Table>
     */}
  </div>
  );
}

export default Usertable;
