import React from "react";
import Proficiency from "./../Settings/Proficiency";

const ProfileOwn = ({
  dances,
  ageValues = [90, 91, 92, 93],
  name = "Max",
  age = 39,
  city = "berlin",
  bio,
  photoUrl = "https://randomuser.me/api/portraits/men/33.jpg"
}) => {
  return (
    <div className="card mb-12 box-shadow">
      <div className="card-body">
        <img src={photoUrl} alt="" className="rounded-circle" />
        <p className="card-text bio">{bio}</p>
        <p className="card-text">
          {" "}
          {name} ({age}), {city}{" "}
        </p>
        <div className="form-row">
          <label className="col-md-3 col-form-label" htmlFor="age">
            Born
          </label>
          <div className="col-md-5">
            <select className="form-control" id="age" value={age}>
              {ageValues.map(year => {
                return <option>{year}</option>;
              })}
            </select>
          </div>
        </div>

        {dances.map((dance, indx) => {
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
              // handleChange={this.state.proficiencyHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProfileOwn;

