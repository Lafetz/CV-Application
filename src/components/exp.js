import React, { Component } from "react";
export default class Exp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exps: [],
      exp: {
        company: "",
        position: "",

        yearsFrom: "",
        yearsTo: "",
      },
    };
  }
  onChange = (e) => {
    if (e.target.id === "company") {
      this.setState({
        exp: {
          company: e.target.value,
          position: this.state.exp.position,

          yearsFrom: this.state.exp.yearsFrom,
          yearsTo: this.state.exp.yearsTo,
        },
      });
    }
    if (e.target.id === "position") {
      this.setState({
        exp: {
          company: this.state.exp.company,
          position: e.target.value,

          yearsFrom: this.state.exp.yearsFrom,
          yearsTo: this.state.exp.yearsTo,
        },
      });
    }

    if (e.target.id === "yearsFrom") {
      this.setState({
        exp: {
          company: this.state.exp.company,
          position: this.state.exp.position,

          yearsFrom: e.target.value,
          yearsTo: this.state.exp.yearsTo,
        },
      });
    }
    if (e.target.id === "yearsTo") {
      this.setState({
        exp: {
          company: this.state.exp.company,
          position: this.state.exp.position,
          yearsFrom: this.state.exp.yearsFrom,
          yearsTo: e.target.value,
        },
      });
    }
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    const newExp = [...this.state.exps, this.state.exp];
    this.setState({
      exps: newExp,
      exp: {
        company: "",
        position: "",
        tasks: "",
        yearsFrom: "",
        yearsTo: "",
      },
    });
  };
  render() {
    const { company, position, yearsFrom, yearsTo } = this.state.exp;
    return (
      <div className="exp">
        <h1>Experience</h1>
        <ShowExp exps={this.state.exps} />
        <form onSubmit={this.onSubmitForm}>
          <div>
            <label htmlFor="company">company</label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="position">position</label>
            <input
              type="text"
              id="position"
              value={position}
              onChange={this.onChange}
            />
          </div>

          <div>
            <label htmlFor="yearsFrom">From</label>
            <input
              type="text"
              id="yearsFrom"
              value={yearsFrom}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="yearsTo">To</label>
            <input
              type="text"
              id="yearsTo"
              value={yearsTo}
              onChange={this.onChange}
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
class ShowExp extends Component {
  render() {
    const exps = this.props.exps;
    return (
      <ul>
        {exps.map((exp, i) => {
          return (
            <li key={i} className="experience">
              <h3>{exp.company}</h3>
              <h3>{exp.position}</h3>
              <h3>
                {exp.yearsFrom} to {exp.yearsTo}
              </h3>
            </li>
          );
        })}
      </ul>
    );
  }
}
