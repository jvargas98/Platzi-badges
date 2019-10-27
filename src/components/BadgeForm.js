import React, { Component } from "react";

class BadgeForm extends Component {
  state = {};
  /* constructor(props) {
    super(props);
    this.state = {};
  } */

  /*   handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }; */

  handleClick = e => {
    console.log("Button was clicked");
  };

  /* handleSubmit = e => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state);
  }; */

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div>
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div>
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div>
            <label>E-mail</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div>
            <label>Job title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div>
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
