import './App.css'
import React, { useContext, useState,useEffect } from 'react';
import User from './User';
import { Globaldata } from './User';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { useQuery } from '@apollo/client';
//import { GET_USER_LIST } from './Graphql/Queries';
function Showdata() {
    
  const { array,handleUpdate,handleDelete} = useContext(Globaldata);
  useEffect(()=>{
     console.log(array,"showdata array")
  })
  
  // const {data}=useQuery(GET_USER_LIST);
  // console.log(data);
  
  return (
    <div className='tablediv'>
      
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
          {array.map((item, index) => (
              <TableRow key={index}>
                
                <TableCell align="right"><input type="checkbox" onChange={() => handleUpdate(item.name,array)}/></TableCell>
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.email}</TableCell>
                <TableCell align="right">{item.number}</TableCell>
                <TableCell align="right"><Button onClick={() => handleDelete(index,array)}><DeleteForeverIcon /></Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    {/* <Table>
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

export default Showdata;
