import React  from 'react';
import './ProfileCard.css'; 

const ProfileCard = (props) => {

   const handleClick = props.match.bind(this, props.user);
   const handleRejection = props.reject.bind(this, props.user); 

   const url = props.user.mainPhoto;
    return (
        <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <div className="card-body">
                  <img src={url} alt="" className="rounded-circle"/>
                  <p className="card-text"> {props.user.name} ({props.user.age}), {props.user.city} </p>
                  <p className="card-text bio">{props.user.bio}</p>
                  
                    <div className="btn-group">
                    <div className="no-button">
                      <button onClick={handleRejection} type="button" className="btn btn-md btn-outline-secondary">No</button>
                    </div>
                   
                    
                    <div className="like-button">
                      <button onClick={handleClick} type="button" className="btn btn-md btn-outline-primary">Like</button>
                    </div>
                    
                    </div>
                  
                </div>           
            </div>
        </div> 
    );
}

export default ProfileCard; 