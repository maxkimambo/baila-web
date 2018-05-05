import React from 'react'; 
import {connect} from 'react-redux';
import NumericRange from './NumericRange'; 
import RadioSelect from './RadioSelect'; 


class SettingsComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            genderValues: props.settings.genderValues, 
            ageValues: props.settings.ageValues, 
            heightValues: props.settings.heightValues,
            selectedGender: props.settings.selectedGender, 
            genderHandler: this.genderHandler.bind(this),
        }
   
    }

    genderHandler(val){
        this.setState({...this.state, selectedGender: val.target.value})
    }

    rangeHandler(val){

    }

    render(){
        return   <div className="row">
        <div className="col-md-6">
        <div className="card">
          <div className="card-header">
              Preferences
          </div>
              <div className="card-body">
                  <h5 className="card-title">Your matching criteria</h5>
                  <form>
                     <NumericRange label="Age" startValues={this.state.ageValues} endValues={this.state.ageValues}/>
                     <NumericRange label="Height" startValues={this.state.heightValues} endValues={this.state.heightValues}/> 
                     <RadioSelect label="Gender" selectItems={this.state.genderValues}  selectedValue={this.state.selectedGender} selectHandler= {this.state.genderHandler}/>
                  </form>
                  <p className="card-text alert alert-warning" role="alert">Dance style & level will be matched automatically</p>
                  <button className="btn btn-primary">Update</button> 
              </div>
          </div>
        </div>
      </div> 
    }
}

// export default SettingsComponent; 


const mapStateToProps = (state, ownProps) => {
    return {
        settings: state.settings 
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         matchDispatch: (user) => dispatch(actions.Match(user)), 
//         reject: (user) => dispatch(actions.Reject(user))
//     }
// }



export default connect(mapStateToProps)(SettingsComponent)