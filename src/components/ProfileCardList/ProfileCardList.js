import React from 'react'; 
import ProfileCard from './../ProfileCard/ProfileCard'; 

const ProfileCardList = (props) => {
    
    return(
     props.data.map((profile, inx) => {
        return <ProfileCard user={profile}  key={profile.id} match={props.match}/>
     })
    ); 
}

export default ProfileCardList; 
