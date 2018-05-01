import React from 'react'; 
import ProfileCardList from './../ProfileCardList/ProfileCardList'; 
import { connect } from 'react-redux';
import * as actions from '../../Actions'
class ProfileComponent extends React.Component {
  
    constructor(props, context){
        super()
        this.props = props;  
    }   

    render(){
       
       return <ProfileCardList store={this.props} />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        suggestions: state.suggestions 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        matchDispatch: (user) => dispatch(actions.Match(user)), 
        reject: (user) => dispatch(actions.Reject(user))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent); 