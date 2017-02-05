import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  ProgressBar,
} from 'react-bootstrap';
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';

const logo = require('style/asset/logo.png');

function DashboardHeader() {
  return (
    <div id="wrapper" className="content">
      <Navbar fluid={true}  style={ {margin: 0} }>
          <Brand>
            <span>
              <span>&nbsp;DashBoard - </span>
                <a href="/" title="Sporit" rel="home">Sporit.cn</a>
                <button type="button" className="navbar-toggle" onClick={() => {toggleMenu();}} style={{position: 'absolute', right: 0, top: 0}}>
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
            </span>
          </Brand>

          <Nav className="nav navbar-top-links navbar-right">
            <NavDropdown title={<i className="fa fa-user fa-fw"></i> } id = 'navDropdown4'>
                  <MenuItem>
                    <span> <i className = "fa fa-sign-out fa-fw" /> Logout </span>
                  </MenuItem>
            </NavDropdown>
          </Nav>
    </Navbar>
    </div>
  );
}

export default DashboardHeader;
