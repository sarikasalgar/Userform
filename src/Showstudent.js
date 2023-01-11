
import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { TextField } from "@mui/material";
function Showstudent() {
  const { register } = useFormContext();
  return (
    <div className="Showstudent">
        <div>
            {/* <InputLabel size='normal'>College Name</InputLabel> */}
            <TextField type="text" name="collageName" {...register("collageName")} label="College Name"/>
            
          </div>
          {/* <InputLabel size='normal' error>{errors.collageName?.message}</InputLabel> */}
          <div>
            {/* <InputLabel size='normal'>School name</InputLabel> */}
            <TextField type="text" name="schoolName" {...register("schoolName")} label="School name"/>
         </div>
         {/* <InputLabel size='normal' error>{errors.schoolName?.message}</InputLabel> */}
          <div>
            {/* <InputLabel size='normal'>Hobbies</InputLabel> */}
            <TextField type="text" name="hobbies" {...register("hobbies")} label="Hobbies"/>
            
          </div>
          {/* <InputLabel size='normal' error>{errors.hobbies?.message}</InputLabel> */}
    </div>
  );
}

export default Showstudent;
