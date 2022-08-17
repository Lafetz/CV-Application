import React, { Component } from "react";
class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educations: [],
      education: {
        place: "",
        course: "",
        date: "",
        submit: true,
      },
    };
  }
  onChange = (e) => {
    if (e.target.id === "place") {
      this.setState({
        education: {
          place: e.target.value,
          course: this.state.education.course,
          date: this.state.education.date,
          submit: true,
        },
      });
    }
    if (e.target.id === "course") {
      this.setState({
        education: {
          place: this.state.education.place,
          course: e.target.value,
          date: this.state.education.date,
          submit: true,
        },
      });
    }
    if (e.target.id === "date") {
      this.setState({
        education: {
          place: this.state.education.place,
          course: this.state.education.course,
          date: e.target.value,
          submit: true,
        },
      });
    }
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    const newEdu = [...this.state.educations, this.state.education];
    this.setState({
      educations: newEdu,
      education: {
        place: "",
        course: "",
        date: "",
        submit: true,
      },
    });
    console.log(this.state.educations);
  };

  removeEducation = (education) => {
    const allEducations = this.state.educations;
    const newEducations = allEducations.filter((x) => {
      if (x.course === education.course) return false;
      else return true;
    });
    this.setState({
      educations: newEducations,
    });
  };
  submitEducation = (education, place, course, year) => {
    const allEducations = this.state.educations;
    const editedEducations = allEducations.map((x) => {
      if (x.course === education.course) {
        x.place = place;
        x.course = course;
        x.date = year;
        x.submit = true;
        return x;
      } else return x;
    });
    this.setState({
      educations: editedEducations,
    });
  };
  editable = (education) => {
    const allEducations = this.state.educations;
    const editedEducations = allEducations.map((x) => {
      if (x.course === education.course) {
        x.submit = false;
        return x;
      } else return x;
    });
    this.setState({
      tasks: editedEducations,
    });
  };
  render() {
    const { place, course, date, submit } = this.state.education;
    return (
      <div className="educationForm">
        <h1>Education</h1>
        <div className="educationList">
          <ShowEducaton
            educations={this.state.educations}
            removeEducation={this.removeEducation}
            submitEducation={this.submitEducation}
            editable={this.editable}
          />
        </div>
        <form onSubmit={this.onSubmitForm}>
          <div>
            <label htmlFor="place">where</label>
            <input
              type="text"
              id="place"
              value={place}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="course">course</label>
            <input
              type="text"
              id="course"
              value={course}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="number"
              id="date"
              value={date}
              onChange={this.onChange}
              required
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

class ShowEducaton extends Component {
  render() {
    const { educations, removeEducation, submitEducation, editable } =
      this.props;
    return (
      <ul>
        {educations.map((education, i) => {
          if (education.submit === true) {
            return (
              <li key={i} className="education list">
                <h3>{education.place}</h3>
                <h3>{education.course}</h3>
                <h3>{education.date}</h3>
                <button
                  className="editTask"
                  onClick={() => {
                    editable(education);
                  }}
                >
                  edit
                </button>
                <button
                  className="removeTask"
                  onClick={() => {
                    removeEducation(education);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          } else {
            return (
              <li key={i} className="education list">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submitEducation(
                      education,
                      e.target[0].value,
                      e.target[1].value,
                      e.target[2].value
                    );
                  }}
                >
                  <input id="place" defaultValue={education.place} />
                  <input id="course" defaultValue={education.course} />
                  <input
                    id="date"
                    defaultValue={education.date}
                    type="number"
                  />
                  <button className="editTask">submit</button>
                </form>
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

export default Education;
