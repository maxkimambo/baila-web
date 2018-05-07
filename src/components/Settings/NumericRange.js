import React from 'react'; 


const NumericRange = ({
    label, 
    startValues = [], 
    endValues = [], 
    start = 0, 
    end = 0, 
    handleChange
    }) => {
    
           
    return (
        <div className="range-selector">
            <div className="form-row">
                <div className="col-md-2">
                    <label htmlFor="start" className="col-form-label">{label}</label>
                </div>
               
                <div className="col-md-3">
                    <select id={label.toLowerCase() + "Start"} name={label.toLowerCase() + "Start"} value={start} onChange={handleChange} className="form-control"> 
                            {startValues.map(v => {           
                                return <option key={v} value={v}> {v} </option> 
                            })}
                    </select> 
                </div>
                <div className="col-md-1">
                    - 
                </div>
                <div className="col-md-3">
                    <select name={label.toLowerCase()+ "End"} id={label.toLowerCase() + "End"} value={end} onChange={handleChange} className="form-control"> 
                            {endValues.map(v => {
                               
                                return <option key={v} value={v}> {v} </option> 
                            })}
                    </select> 
                </div>
            </div>
        </div>
    )
}

export default NumericRange; 