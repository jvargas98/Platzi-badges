import React, { Component, Fragment } from "react";

import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import api from "../api";
import PageLoading from "../components/PageLoading";

class BadgeNew extends Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };
  /* constructor(props) {
    super(props);
    this.state = {};
  } */

  handleChange = e => {
    /*  const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value; */

    this.setState({
      /*   form: nextForm */
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true) {
      return <PageLoading />;
    }

    return (
      <Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1>New Attendant</h1>

              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                email={this.state.form.email || "EMAIL"}
                jobTitle={this.state.form.jobTitle || "JOBTITLE"}
                twitter={this.state.form.twitter || "TWITTER"}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BadgeNew;
