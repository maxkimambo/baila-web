import React from "react";

const Proficiency = ({label, levels, dance, level, handleChange}) => {
  return(
    <div className="proficiency-selector">
            <div className="form-row">
            
                <label htmlFor="dance" className="col-md-3 col-form-label">{label}</label>
                <div className="col-md-5">
                    <select name={label.toLowerCase()} id={label.toLowerCase()} value={level} onChange={handleChange} className="form-control"> 
                            {levels.map(l => {
                                return <option key={l} value={l}> {l} </option> 
                            })}
                    </select> 
                </div>
                </div>
                
            </div>
       
  );
};

export default Proficiency;
