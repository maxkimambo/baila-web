import React from 'react'; 
import ProfileCardList from './../ProfileCardList/ProfileCardList'; 

class ProfileComponent extends React.Component {
    state = [{
        name: 'Gloria',
        age: 32, 
        city: 'Berlin', 
        bio: 'I love dancing Salsa, bachata and kizomba... Come on write me up'
    }, 
    {
        name: 'Gloria',
        age: 32, 
        city: 'Berlin', 
        bio: 'I love dancing Salsa, bachata and kizomba... Come on write me up'
    }
    
    ]
    fetchProfiles = ()=> {
        // get the data off the server 
        const data = {}; 
        this.setState(data); 

    }

    handleMatch(e){
        e.preventDefault(); 
        console.log('Matched ....'); 
    }
    // this.setState(); 
    render(){
       return <ProfileCardList data={this.state} match={this.handleMatch} />
    }
}

export default ProfileComponent; 