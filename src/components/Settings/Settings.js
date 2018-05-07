import React from "react";
import { connect } from "react-redux";
import NumericRange from "./NumericRange";
import RadioSelect from "./RadioSelect";
import * as actions from "./../../Actions";
import Alert from "./../Alert";
import Proficiency from "./Proficiency";
import "./settings.css";

class SettingsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genderValues: props.settings.genderValues,
      ageValues: props.settings.ageValues,
      heightValues: props.settings.heightValues,
      selectedGender: props.settings.selectedGender,
      genderHandler: this.genderHandler.bind(this),
      rangeHandler: this.rangeHandler.bind(this),
      proficiencyHandler: this.proficiencyHandler.bind(this),
      update: props.update.bind(this),
      alert: props.settings.alert,
      alertMessage: props.settings.alertMessage,
      ageStart: props.settings.ageStart,
      ageEnd: props.settings.ageEnd
    };
    this.dances = ["Salsa", "Bachata", "Merengue", "Kizomba"];
    this.save = this.save.bind(this);
    props.load();
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.settings);
  }

  genderHandler(e) {
    this.setState({ ...this.state, selectedGender: e.target.value });
  }

  rangeHandler(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  proficiencyHandler(e) {
    // console.log(e.target.name)
    // console.log(e.target.value)
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  save(e) {
    this.state.update(this.state);
    //TODO find a more elegant way of handling this.
    setTimeout(() => {
      this.setState({ ...this.state, alertMessage: "" });
    }, 1500);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Preferences</div>
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
                      handleChange={this.state.rangeHandler}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="spacer">
                    <NumericRange
                      label="Height"
                      startValues={this.state.heightValues}
                      endValues={this.state.heightValues}
                      start={this.state.heightStart}
                      end={this.state.heightEnd}
                      handleChange={this.state.rangeHandler}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="spacer">
                    <RadioSelect
                      label="Gender"
                      selectItems={this.state.genderValues}
                      selectedValue={this.state.selectedGender}
                      selectHandler={this.state.genderHandler}
                    />
                  </div>

                  {this.dances.map((dance, indx) => {
                    return (
                      <Proficiency
                        className="col-md-12"
                        label={dance}
                        key={dance + indx}
                        levels={[
                          "None",
                          "Beginner",
                          "Intermediate",
                          "Advanced",
                          "Professional"
                        ]}
                        handleChange={this.state.proficiencyHandler}
                      />
                    );
                  })}

                  <Alert
                    alertType={this.state.alert}
                    message={this.state.alertMessage}
                  />
                </div>
              </form>
              <button className="btn btn-primary spacer" onClick={this.save}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    settings: state.settings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => dispatch(actions.LoadSettings()),
    update: settings => dispatch(actions.UpdateSettings(settings))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsComponent);
