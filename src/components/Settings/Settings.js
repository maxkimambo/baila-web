import React from 'react'; 
import {connect} from 'react-redux';
import NumericRange from './NumericRange'; 
import RadioSelect from './RadioSelect'; 
import * as actions from './../../Actions'
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
            update: props.update
        }
    }

    componentWillReceiveProps(newProps){
        this.setState(newProps);
    }

    genderHandler(e){
        this.setState({...this.state, selectedGender: e.target.value});
        this.state.update(this.state);
    }

    rangeHandler(e){
        this.setState({...this.state, [e.target.name]: e.target.value});
        this.state.update(this.state);
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
                  <p className="card-text alert alert-warning" role="alert">Dance style & level will be matched automatically</p>
                  <button className="btn btn-primary">Update</button> 
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
        update: (settings) => dispatch(actions.UpdateSettings(settings))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsComponent)