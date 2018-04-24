import React  from 'react';
import './ProfileCard.css'; 

const ProfileCard = (props) => {
   const url = 'https://randomuser.me/api/portraits/women/11.jpg'; 
  
    return (
        <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <div className="card-body">
                  <img src={url} alt="" className="rounded-circle"/>
                  <p className="card-text"> {props.name} ({props.age}), {props.city} </p>
                  <p className="card-text bio">{props.bio}</p>
                  <div className="align-item-right">
                    <div className="btn-group">
                      <button onClick={props.match} type="button" className="btn btn-sm btn-outline-primary">Yes</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">No</button>
                    </div>
                  </div>
                </div>           
            </div>
        </div> 
    );
}

export default ProfileCard; 