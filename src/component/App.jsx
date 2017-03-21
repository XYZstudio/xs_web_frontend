// Modules
import React from 'react';

export default class App extends React.Component {
  render() {
    const { navbar, body, footer } = this.props;
    return (
      <div id="appContainer" >
        <div className="navbar-container">
          { navbar }
        </div>
        <div className="body-container" style={{ marginTop: 60 }}>
          { body }
        </div>
        <div className="footer-container">
          { footer }
        </div>
      </div>
    );
  };
}
