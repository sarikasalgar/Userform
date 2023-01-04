
import React from "react";

function Showemployee() {
 
  return (
    <div className="Showemployee">
        <div>
            <label>Current office name</label>
            <input type="name" name="officename" {...register('officename')} />
            <label>{errors.officename?.message}</label>
        </div>
        <div>
            <label>Previous experience</label>
            <input type="number" name="experience" {...register('experience')}/>
            <label>{errors.experience?.message}</label>
          </div>
        </div>
      
  );
}

export default Showemployee;
