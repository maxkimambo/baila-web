import React from 'react'; 
import ProfileCardList from './../ProfileCardList/ProfileCardList'; 
import { connect } from 'react-redux';
import * as actions from '../../Actions'
class ProfileComponent extends React.Component {
  
    constructor(props, context){
        super()
        this.state= {}
        this.state.users = []
        this.state.users = props.matches.users;
        this.props = props;  
        console.log(props);  
    }   

    handleMatch(e){
        e.preventDefault(); 
        console.log('Matched ....'); 
    }
    
    match(user){
        alert(`matched user:  ${user.id}`); 
    }
    render(){
       
       return <ProfileCardList store={this.props} />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        matches: state.matches 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        matchDispatch: (user) => dispatch(actions.Match(user))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent); 