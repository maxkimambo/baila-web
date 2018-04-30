import * as actionType from './../Actions/actionTypes';
import initialState from './initialState'; 

const matchesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SHOW_ALL: {
         
            return Object.assign({},  action.users); 
        }
       
        default:
            return state;
    }
}
export default  matchesReducer; 