import React from 'react'; 
import ProfileCard from './../ProfileCard/ProfileCard'; 

const ProfileCardList = (props) => {
    console.log(props.store)
    return(
     props.store.matches.users.map((profile, inx) => {
        return <ProfileCard user={profile}  key={profile.id} match={props.store.matchDispatch}/>
     })
    ); 
}

export default ProfileCardList; 
