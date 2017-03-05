// Modules
import React from 'react';

export default class App extends React.Component {
  render() {
    const { navbar, body } = this.props;
    return (
      <div id="appContainer" >
        <div className="navbar-container">
          { navbar }
        </div>
        <div className="body-container" style={{ marginTop: 60 }}>
          { body }
        </div>
      </div>
    );
  };
}
