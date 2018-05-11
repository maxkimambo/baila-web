import React from 'react'; 
import ProfileOwn from './ProfileOwn'
import Proficiency from './../Settings/Proficiency'
class Profile extends React.Component{

    constructor(props){
        super(props)
        this.dances = ["Salsa", "Bachata", "Kizomba"]

    }

    render(){
       return  <div className="col-md-12">
       <form >
           <div className="form-group">
            <ProfileOwn dances={this.dances}/>
           
           </div>
       </form>
       
 </div> 
    }
}

export default Profile; 