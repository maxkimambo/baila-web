import React from 'react'; 


const NumericRange = ({
    label, 
    startValues = [], 
    endValues = [], 
    start = 0, 
    end = 0, 
    handleStartChange =()=>{}, 
    handleEndChange  =()=>{}}   
    ) => {
    
    // actions bind
    const handleStart = handleStartChange.bind(this); 
    const handleEnd = handleEndChange.bind(this); 
    
    return (
        <div className="range-selector">
            <div className="form-row">
                <label htmlFor="start" className="col-sm-2 col-form-label">{label}</label>
                <div className="col-md-2">
                    <select id={label + "-start"} name={label + "-start"} value={start} onChange={handleStart} className="form-control"> 
                            {startValues.map(v => {           
                                return <option key={v} value={v}> {v} </option> 
                            })}
                    </select> 
                   
                </div>
                <div className="col-md-1">
                    - 
                </div>
                <div className="col-md-2">
                    <select name={label + "-end"} id={label + "-end"} value={end} onChange={handleEnd} className="form-control"> 
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