import React from 'react'; 
import ProfileCard from './../ProfileCard/ProfileCard'; 

const ProfileCardList = (props) => {

    return(
     props.store.suggestions.users.map((profile, inx) => {
        return <ProfileCard user={profile}  key={profile.id} match={props.store.matchDispatch} reject={props.store.reject}/>
     })
    ); 
}

export default ProfileCardList; 
