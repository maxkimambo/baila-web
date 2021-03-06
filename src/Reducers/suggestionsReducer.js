import * as actionType from './../Actions/actionTypes';
import initialState from './initialState'; 

const suggestionsReducer = (state, action) => {
    switch (action.type) {
        case actionType.SHOW_ALL: {
         
            return Object.assign({}, {...state},  action.users); 
        }
        case actionType.MATCH: {
            let currentUser = Object.assign({}, state.currentUser);
            currentUser.matches.push(action.user);  

            return {...state, currentUser}; 
        }
        case actionType.REJECT: {
            let currentUser = Object.assign({}, state.currentUser); 
            currentUser.rejections.push(action.user); 
            let users = Object.assign([], state.users); 

            users = users.filter((user) => {
                return user.id !== action.user.id
            });
            
            return {...state, users, currentUser}; 
        }
       
        default:
            if(!state){
                const users = initialState.users.filter(user => {
                    let shouldRemove = true; 
                    initialState.currentUser.rejections.map(r => {
                        if(r.id === user.id){
                            shouldRemove = false; 
                        }
                        return r;
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