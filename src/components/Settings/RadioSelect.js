import React from 'react'; 


const RadioSelect = ({label, selectItems = [], selectedValue, selectHandler}) => {

    return (
        <div className="radio-select">
            <fieldset className="form-group">
           
            <div className="row">
            <div className="form-group row">
                <legend className="col-form-label col-md-4">{label}</legend>

               {selectItems.map((item, indx)=> {
                    return   <div key={item.name+indx} className="col-md-3">
                            <div className="form-check">
                                <input key={item.name+indx+'input'} 
                                    className="form-check-input" 
                                    type="radio" name={item.name+"-"+item.value} 
                                    id={item.name+"-"+item.value} 
                                    value={item.value} 
                                    checked={item.value === selectedValue? true: false}
                                    onChange={selectHandler}/>                                   
                                <label key={item.name+indx+'label'} className="form-check-label" htmlFor={item.name+"-"+item.value}>
                                {item.name}
                                </label>
                            </div>
                        </div>

               })}
            </div>
            </div>
            </fieldset>
        </div>
    )
}

export default RadioSelect; 