import React from 'react'; 
import ProfileCardList from './../ProfileCardList/ProfileCardList'; 
import { connect } from 'react-redux';
// import * as actions from '../../Actions'
class ProfileComponent extends React.Component {
  
    constructor(props, context){
        super()
        this.state= {}
        this.state.users = []
        this.state.users = props.matches.users;   
    }   

    handleMatch(e){
        e.preventDefault(); 
        console.log('Matched ....'); 
    }
    
    match(user){
        console.log(`matched user:  ${user}`); 
    }
    render(){
       return <ProfileCardList data={this.state.users} match={this.props.handleMatch} />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        matches: state.matches 
    }
}



export default connect(mapStateToProps)(ProfileComponent); 