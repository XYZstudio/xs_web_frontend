// Modules
import React from 'react';
import NavbarComponent from 'component/main/navbar.jsx';
import 'style/dashboard.scss';

export default class Dashboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <NavbarComponent />
        <div id="dashboardSidebarContainer">
          { this.props.side }
        </div>
        <div id="dashboardContentContainer">
          { this.props.body }
        </div>
      </div>
    );
  };
}