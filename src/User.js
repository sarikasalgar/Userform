
import './App.css';
import Userform from './Userform';

import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
//import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Header from './Header';
import Sidenav from './Sidenav';
import Usertable from './Usertable';
import React, { useContext, useState,useEffect } from 'react';
import { Globaldata } from './Userform';
import {Link } from 'react-router-dom';
import Button from '@mui/material/Button';
//import Mutation from './Mutation';

function User() {
    //const { array} = useContext(Globaldata);
  
  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div>
        <Sidenav />
      </div>
      <div>
      
        <Usertable/>
      </div>
    </div>
  );
}

export default User;
