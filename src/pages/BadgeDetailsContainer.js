import React, { Component } from "react";

import api from "../api";
import BadgeDetails from "./BadgeDetails";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

class BadgeDetailsContainer extends Component {
  state = {
    laoding: true,
    error: null,
    data: undefined,
    modalIsOpen: false
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };

  handleDeleteBadge = async e => {
    this.setState({ laoding: true, error: null });

    try {
      await api.badges.remove(this.props.match.params.badgeId);

      this.setState({ laoding: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ laoding: false, error: error });
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ laoding: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ laoding: false, data: data });
    } catch (error) {
      this.setState({ laoding: false, error: error });
    }
  };

  render() {
    if (this.state.laoding) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
        badge={this.state.data}
      />
    );
  }
}

export default BadgeDetailsContainer;
