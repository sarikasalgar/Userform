
import React from "react";

function Showstudent() {
 
  return (
    <div className="Showstudent">
        <div>
            <label>College Name</label>
            <input type="text" name="collageName" {...register('collageName')} />
            <label>{errors.collageName?.message}</label>
          </div>
          <div>
            <label>School name</label>
            <input type="text" name="schoolName" {...register('schoolName')} />
            <label>{errors.schoolName?.message}</label>
          </div>
          <div>
            <label>Hobbies</label>
            <input type="text" name="hobbies" {...register('hobbies')} />
            <label>{errors.hobbies?.message}</label>
          </div>
    </div>
  );
}

export default Showstudent;
