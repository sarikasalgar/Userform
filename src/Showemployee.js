import React from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { TextField } from "@mui/material";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
const Showemployee = () => {
  const { register, handleSubmit } = useFormContext();

  const employee = (data) => {
    console.log(data, "data of showemployee");
    //props.onSubmitemployee(data);
  };
  return (
    <div className="Showemployee">
      
      <div>
        {/* <TextField size='normal'>Current office name</InputLabel> */}
        <TextField
          type="name"
          name="officename"
          {...register("officename")}
          label="Current office name"
        />
      </div>
      {/* <InputLabel size='normal' error>{errors.officename?.message}</InputLabel> */}
      <div>
        {/* <InputLabel size='normal'>Previous experience</InputLabel> */}
        <TextField
          type="number"
          name="experience"
          {...register("experience")}
          label="Previous experience"
        />
      </div>
      {/* <InputLabel size='normal' error>{errors.experience?.message}</InputLabel> */}
      
    </div>
  );
};

export default Showemployee;
