import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Navbar from 'react-bootstrap/lib/Navbar';
import Brand from 'react-bootstrap/lib/NavbarBrand';

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
    </Navbar>
    </div>
  );
}

export default DashboardHeader;
