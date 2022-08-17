import React, { Component } from "react";

class Primary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      job: "",
      email: "",
      phone: 0,
    };
  }
  onChange = (e) => {
    if (e.target.id === "name") {
      this.setState({
        name: e.target.value,
      });
    }
    if (e.target.id === "jobTitle") {
      this.setState({
        job: e.target.value,
      });
    }
    if (e.target.id === "email") {
      this.setState({
        email: e.target.value,
      });
    }
    if (e.target.id === "phoneNo") {
      this.setState({
        phone: e.target.value,
      });
    }
  };
  render() {
    const { name, job, email, phone } = this.state;
    return (
      <div className="primary">
        <section title="Personal Information">
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="jobTitle">job</label>
            <input
              type="text"
              id="jobTitle"
              value={job}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="phoneNO">phone</label>
            <input
              type="number"
              id="phoneNo"
              value={phone}
              onChange={this.onChange}
            />
          </div>
        </section>
      </div>
    );
  }
}

class ShowPrimary extends Component {
  render() {
    const { name, job, email, phone } = this.props;
    return (
      <div className="showPrimary">
        <h2>{name}</h2>
        <h3>{job}</h3>
        <h4>{email}</h4>
        <h4>{phone}</h4>
      </div>
    );
  }
}
export default Primary;
