
import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
function Showstudent() {
  const { register } = useFormContext();
  return (
    <div className="Showstudent">
        <div>
            <label>College Name</label>
            <input type="text" name="collageName" {...register("collageName")}/>
            
          </div>
          <div>
            <label>School name</label>
            <input type="text" name="schoolName" {...register("schoolName")} />
         </div>
          <div>
            <label>Hobbies</label>
            <input type="text" name="hobbies" {...register("hobbies")} />
            
          </div>
    </div>
  );
}

export default Showstudent;
