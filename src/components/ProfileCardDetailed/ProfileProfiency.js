import React from 'react'; 
import './ProfileProficiency.css'

const ProfileProficiency = (props) => {

    const progress = {
        width: props.progress  
    }
    
    const danceLabel = props.danceLabel;

    return (
        <span> {danceLabel}  
            <div className="progress dance-bar">
                <div className="progress-bar" style={progress} 
                        role="progressbar"  
                        aria-valuenow="25" 
                        aria-valuemin="0"
                        aria-valuemax="100"> {props.level} </div>
            </div>
        </span>
    )
}

export default ProfileProficiency; 