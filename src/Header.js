import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import AppsIcon from '@mui/icons-material/Apps';
import { Typography } from '@material-ui/core';
import EmailIcon from '@mui/icons-material/Email';
import HelpIcon from '@mui/icons-material/Help';
import SearchIcon from '@mui/icons-material/Search';
import {Input} from '@mui/material/';
import {TextField} from "@material-ui/core";

export default function Header() {
  const displayDesktop = () => {
    return (
        <div className="header">
            <div className="header_logo">
                <Toolbar align="left">Hi From Desktop Header</Toolbar>
            </div>
            
            <div className="header_icon">
            <SearchIcon align="right"/><Input placeholder="search" align="right"></Input>
                
                <HelpIcon align="right"/>
                <EmailIcon align="right" />
                <AppsIcon align="right"/>
            </div>
         </div>
    );
  };
  
  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
      
    </header>
  );
}