import React from 'react'; 
import {connect} from 'react-redux';
import NumericRange from './NumericRange'; 
import RadioSelect from './RadioSelect'; 
import * as actions from './../../Actions'
import Alert from './../Alert'; 

import './settings.css'
class SettingsComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            genderValues: props.settings.genderValues, 
            ageValues: props.settings.ageValues, 
            heightValues: props.settings.heightValues,
            selectedGender: props.settings.selectedGender, 
            genderHandler: this.genderHandler.bind(this),
            rangeHandler: this.rangeHandler.bind(this),
            update: props.update.bind(this),
            alert: props.settings.alert, 
            alertMessage: props.settings.alertMessage,
            ageStart: props.settings.ageStart,
            ageEnd: props.settings.ageEnd 
            
        }
        
        this.save = this.save.bind(this);
        props.load(); 
    }

    componentWillReceiveProps(newProps){
         this.setState(newProps.settings);
    }

    genderHandler(e){
        this.setState({...this.state, selectedGender: e.target.value});
     
    }

    rangeHandler(e){
        this.setState({...this.state, [e.target.name]: e.target.value});
     
    }

    save(e){
        this.state.update(this.state); 
        //TODO find a more elegant way of handling this. 
        setTimeout(() => {
            this.setState({...this.state, alertMessage:''}); 
        },1500);
    }
    render(){
        return   <div className="row">
        <div className="col-md-6">
        <div className="card">
          <div className="card-header">
              Preferences
          </div>
              <div className="card-body">
                 
                  <form>
                      <div className="col-md-12">
                      <div className="spacer">
                        <NumericRange 
                                label="Age" 
                                startValues={this.state.ageValues} 
                                endValues={this.state.ageValues}
                                start={this.state.ageStart}
                                end={this.state.ageEnd} 
                                handleChange={this.state.rangeHandler}/>
                      </div>
                      
                      <div className="spacer">
                        <NumericRange 
                                label="Height" 
                                startValues={this.state.heightValues} 
                                endValues={this.state.heightValues}
                                start={this.state.heightStart}
                                end={this.state.heightEnd}
                                handleChange={this.state.rangeHandler}/> 
                      </div>
                      
                      <div className="spacer">
                      
                        <RadioSelect 
                                label="Gender" 
                                selectItems={this.state.genderValues}
                                selectedValue={this.state.selectedGender} 
                                selectHandler= {this.state.genderHandler}/>                       
                      </div>
                      </div>
   
                  </form>
                 
                 <Alert 
                    alertType={this.state.alert}
                    message={this.state.alertMessage}
                 /> 

                  <button className="btn btn-primary" onClick={this.save}>Update</button> 
              </div>
          </div>
        </div>
      </div> 
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        settings: state.settings 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => dispatch(actions.LoadSettings()),
        update: (settings) => dispatch(actions.UpdateSettings(settings))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsComponent)