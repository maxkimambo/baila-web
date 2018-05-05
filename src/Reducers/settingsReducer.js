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


const settingsReducer = (state ={}, action) => {
   
    switch(action.type){
        case actionType.LOAD_SETTINGS: {
            const heightValues = generateValues(130,240,5); 
            const ageValues = generateValues(18,99); 
            return {...state, heightValues, ageValues, genderValues}
        }
        case actionType.UPDATE_SETTINGS: {
            
            return {...state, ...action.settings}
        }
        default: 
            const heightValues = generateValues(130,240,5); 
            const ageValues = generateValues(18,99); 
            return {...state, heightValues, ageValues, genderValues}
    }
 }

 export default settingsReducer; 