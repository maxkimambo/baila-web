import * as actionTypes from './../Actions/actionTypes';
import initialState from './initialState';

const ProfileReducer = (state = {}, action) => {

    switch (action.type) {
        case actionTypes.SHOW_PROFILE:{
                

                return {...state, currentProfile:initialState.users[3]};
            }
        case actionTypes.LOAD_PROFILE:
            {


                const currentProfile = initialState.users.find((user) => {
                    return user.id === action.id;
                });
              
                return { ...state, currentProfile };
            }
        default:
            // show default profile info 
            // state.currentProfile = initialState.users[2];
            return {...state, currentProfile:initialState.users[3]}
    }

}
export default ProfileReducer;