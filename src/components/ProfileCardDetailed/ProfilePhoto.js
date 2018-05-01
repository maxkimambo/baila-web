import React from 'react'; 

const ProfilePhoto = (props) => {
    return (
        <img src={props.url} alt="" className="rounded-circle"/>
    )
}

export default ProfilePhoto; 