import React from 'react'; 
import DanceProficiency from './ProfileProfiency'; 

const ProfileCardDetails= (props) => {
    return (
        <div>
            <p className="card-text"> {props.user.name} ({props.user.age}), {props.user.city} </p>
            <p className="card-text bio">{props.user.bio}</p>  
            <DanceProficiency progress="20%" danceLabel="Bachata" level="Beginner"/>  
            <DanceProficiency progress="80%" danceLabel="Salsa" level="Advanced"/>  
            <DanceProficiency progress="40%" danceLabel="Merengue" level="Intermediate"/>  
        </div>
      
    )
}

export default ProfileCardDetails; 