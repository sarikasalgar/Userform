
import React from "react";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { useForm, FormProvider, useFormContext } from "react-hook-form";

function Showemployee() {
  const { register } = useFormContext();
  return (
    <div className="Showemployee">
      
        <div>
            <InputLabel size='normal'>Current office name</InputLabel>
            <Input type="name" name="officename" {...register("officename")} />
            
        </div>
        <div>
            <InputLabel size='normal'>Previous experience</InputLabel>
            <Input type="number" name="experience" {...register("experience")}/>
            
          </div>
    </div>
      
  );
}

export default Showemployee;
