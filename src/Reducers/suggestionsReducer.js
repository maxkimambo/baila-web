import * as actionType from './../Actions/actionTypes';
import initialState from './initialState'; 

const suggestionsReducer = (state, action) => {
    switch (action.type) {
        case actionType.SHOW_ALL: {
         
            return Object.assign({}, {...state},  action.users); 
        }
        case actionType.MATCH: {
            console.log(` suggestions reducer hit`);
            console.log(action.user); 
            state.currentUser.matches.push(action.user); 
           
            return Object.assign({}, state); 
        }
       
        default:
            if(!state){
                return Object.assign({}, initialState); 
            }
            return state;
    }
}
export default  suggestionsReducer; 