import React from 'react'; 

const SettingsComponent = (props)=>{
    return(
        <div className="row">
          <div className="col-md-6">
          <div className="card">
            <div className="card-header">
                Preferences
            </div>
                <div className="card-body">
                    <h5 className="card-title">Your matching criteria</h5>
                    
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button className="btn btn-primary">Update</button> 
                </div>
            </div>
          </div>
        </div> 
    );
} 

export default SettingsComponent; 