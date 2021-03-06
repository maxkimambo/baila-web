import React from 'react'
import ProfilePhoto from './ProfilePhoto'; 
import ProfileCardDetails from './ProfileCardDetails'; 
import {connect} from 'react-redux'; 
import {LoadProfile} from './../../Actions'; 
class ProfileCardDetailed extends React.Component {
   
    constructor(props, context){
        super();
        this.state = {
            profile: props.profile.currentProfile,
            mainPhoto: props.profile.currentProfile.mainPhoto,
            fetchProfileData: props.fetchProfileData
        }
        //TODO: remove parsing if we change ID's to Guids
        this.userId = parseInt(props.match.params.id, 10); 
        this.state.fetchProfileData(this.userId) 
    
    }

    componentWillReceiveProps(nextProps){
        // prevent app from updating state 
        // if no profile has been found.
        if (nextProps.profile.currentProfile){
            this.setState({
                profile: nextProps.profile.currentProfile,
                mainPhoto: nextProps.profile.currentProfile.mainPhoto,
                fetchProfileData: nextProps.fetchProfileData
            }); 
        }
    }
  
    render() {
        return (
            <div className="col-md-10">
                <div className="card mb-10 box-shadow">
                <div className="card-body">
                    <ProfilePhoto url={this.state.mainPhoto}/>
                    <ProfileCardDetails user={this.state.profile}/> 
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProfileData: (userId) => dispatch(LoadProfile(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCardDetailed); 