import * as actionType from './../Actions/actionTypes';
import initialState from './initialState'; 

const matchesReducer = (state, action) => {
    switch (action.type) {
        case actionType.SHOW_ALL: {
         
            return Object.assign({}, {...state},  action.users); 
        }
        case actionType.MATCH: {
            console.log(` match reducer hit`);
            console.log(action.user); 
            return Object.assign({}, {...state},  initialState); 
        }
       
        default:
            if(!state){
                return Object.assign({}, initialState); 
            }
            return state;
    }
}
export default  matchesReducer; 