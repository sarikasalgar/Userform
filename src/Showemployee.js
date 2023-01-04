
import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

function Showemployee() {
  const { register } = useFormContext();
  return (
    <div className="Showemployee">
      
        <div>
            <label>Current office name</label>
            <input type="name" name="officename" {...register("officename")} />
            
        </div>
        <div>
            <label>Previous experience</label>
            <input type="number" name="experience" {...register("experience")}/>
            
          </div>
    </div>
      
  );
}

export default Showemployee;
