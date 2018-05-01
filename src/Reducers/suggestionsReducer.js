import * as actionType from './../Actions/actionTypes';
import initialState from './initialState'; 

const suggestionsReducer = (state, action) => {
    switch (action.type) {
        case actionType.SHOW_ALL: {
         
            return Object.assign({}, {...state},  action.users); 
        }
        case actionType.MATCH: {
        
            state.currentUser.matches.push(action.user); 
           
            return Object.assign({}, state); 
        }
        case actionType.REJECT: {
            state.currentUser.rejections.push(action.user); 
            
            state.users = state.users.filter((user) => {
                return user.id !== action.user.id
            })
            console.log(state); 
            return Object.assign({}, state); 
        }
       
        default:
            if(!state){
                const users = initialState.users.filter(user => {
                    let shouldRemove = true; 
                    initialState.currentUser.rejections.map(r => {
                        if(r.id === user.id){
                            shouldRemove = false; 
                        }
                    })
                    return shouldRemove;
                }); 
                initialState.users = users; 
                return Object.assign({}, initialState); 
            }
            return state;
    }
}
export default  suggestionsReducer; 