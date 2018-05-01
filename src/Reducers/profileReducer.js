import * as actionTypes from './../Actions/actionTypes'
import initialState from './initialState'; 

const ProfileReducer = (state = {},action) => {

    switch(action.type){
        case actionTypes.SHOW_PROFILE: {
            state.currentProfile = initialState.users[0]; 

            return Object.assign({}, state); 
        }
        default: 
            // show default profile info 
            state.currentProfile = initialState.users[0]; 
            return Object.assign({}, state); 
    }

}
export default ProfileReducer; 