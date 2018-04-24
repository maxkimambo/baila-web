import React from 'react'; 
import ProfileCard from './../ProfileCard/ProfileCard'; 

const ProfileCardList = (props) => {

    return(
     props.data.map((profile, inx) => {
        
        return <ProfileCard  key={'pc-'+inx} name={profile.name} age={profile.age} city={profile.city} bio={profile.bio} match={props.match}/>
     })
    ); 
}

export default ProfileCardList; 
