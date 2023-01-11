import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import BusinessIcon from '@mui/icons-material/Business';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan';
import {Select,MenuItem, TextField, Input} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import Box from '@mui/material/Box';
import { JoinFull } from "@mui/icons-material";

export default function Sidenav() {
  
  
  return (
    <header className="sidenav">
        <div>
        <div>
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"><BusinessIcon/>Company</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select" >
          
        </Select>
        </FormControl>
        </Box>

        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"><FolderCopyIcon/>Project</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select" >
          
        </Select>
        </FormControl>
        </Box>

        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"><SettingsOverscanIcon/>360synk</InputLabel>
        <Select
            sx={{
                width: 200,
                height: 60,
              }}
          labelId="demo-simple-select-label"
          id="demo-simple-select" >
          
        </Select>
        </FormControl>
        </Box>
        </div>
        
          </div>

      </header>
  );
}