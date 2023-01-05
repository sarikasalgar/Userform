
import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
function Showstudent() {
  const { register } = useFormContext();
  return (
    <div className="Showstudent">
        <div>
            <InputLabel size='normal'>College Name</InputLabel>
            <Input type="text" name="collageName" {...register("collageName")}/>
            
          </div>
          <div>
            <InputLabel size='normal'>School name</InputLabel>
            <Input type="text" name="schoolName" {...register("schoolName")} />
         </div>
          <div>
            <InputLabel size='normal'>Hobbies</InputLabel>
            <Input type="text" name="hobbies" {...register("hobbies")} />
            
          </div>
    </div>
  );
}

export default Showstudent;
