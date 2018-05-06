import * as actionType from './../Actions/actionTypes'; 


const generateValues = (start, end, interval=1) => {
    let values = []; 
    for(let i = start; i < end; i= i+interval){
        values.push(i); 
    }
    return values; 
}


const  genderValues = [
    {name: "Male", value:"m"},
    {name: "Female", value:"f"}
]

/**
 * Gets a valid max number between two parameters
 * Used to make sure that lower range is never greater
 * than upper range
 * @param {string} val1 
 * @param {string} val2 
 */
const getMax= (val1, val2) => {
    
    const first =  parseInt(val1, 10); 
    const second = parseInt(val2, 10);
  
    if(!(isNaN(first) || isNaN(second))){
        const result = Math.max(first, second);   
        return result.toString(); 
    } else {
       
        return first.toString(); 
    }
   
}
const settingsReducer = (state ={}, action) => {
   
    switch(action.type){
        case actionType.LOAD_SETTINGS: {
            const heightValues = generateValues(130,240,5); 
            const ageValues = generateValues(18,99); 
            return Object.assign({}, state.settings, {heightValues}, {ageValues}, {genderValues})
        }
        case actionType.UPDATE_SETTINGS: {
            let settings = action.settings; 
            
            settings.alert = 'info'; 
            settings.alertMessage = 'Preferences updated'; 
            settings.ageEnd = getMax(settings.ageStart, settings.ageEnd)
            settings.heightEnd = getMax(settings.heightStart, settings.heightEnd); 
          
            return Object.assign({}, state, settings);
        }
        default: 
           
            return state; 
    }
 }

 export default settingsReducer; 