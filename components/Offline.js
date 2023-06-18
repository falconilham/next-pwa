import React from "react";

class OfflineCheck extends React.Component {
  state = {
    isOnline: true,
  };

  componentDidMount() {
    window.addEventListener("offline", this.handleOffline);
    window.addEventListener("online", this.handleOnline);
  }

  componentWillUnmount() {
    window.removeEventListener("offline", this.handleOffline);
    window.removeEventListener("online", this.handleOnline);
  }

  handleOffline = () => {
    this.setState({ isOnline: false });
  };

  handleOnline = () => {
    this.setState({ isOnline: true });
  };

  render() {
    const { isOnline } = this.state;
    return (
      <div>
        {isOnline ? (
          <p>You are currently online.</p>
        ) : (
          <p>You are currently offline.</p>
        )}
      </div>
    );
  }
}

export default OfflineCheck;
