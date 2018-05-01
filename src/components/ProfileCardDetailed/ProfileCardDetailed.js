import React from 'react'
import ProfilePhoto from './ProfilePhoto'; 
import ProfileCardDetails from './ProfileCardDetails'; 
import {connect} from 'react-redux'; 

class ProfileCardDetailed extends React.Component {
    // const url = props.user.mainPhoto;

    constructor(props, context){
        super();
        this.url = "http://"; 
        this.store = props; 
        this.profile = props.profile.currentProfile;
        console.log(this.profile) 
    }
    render() {
        return (
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                <div className="card-body">
                    <ProfilePhoto url={this.profile.mainPhoto}/>
                    <ProfileCardDetails user={this.profile}/> 
                </div> 
                </div> 
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        profile: state.profile 
    }
}

export default connect(mapStateToProps)(ProfileCardDetailed); 