import React from 'react'; 
import DanceProficiency from './ProfileProfiency'; 

const ProfileCardDetails= (props) => {
 
    return (
        <div>
            <p className="card-text"> {props.user.name} ({props.user.age}), {props.user.city} </p>
            <p className="card-text bio">{props.user.bio}</p>
             <p>Height: {props.user.height} cm</p>
             {props.user.dances.map((dance, inx) => {
                 return <DanceProficiency key={inx} progress={dance.danceProgress} danceLabel={dance.danceType} level={dance.danceLevel}/>; 
             })}
        </div>
    )
}

export default ProfileCardDetails; 

