// Modules
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div id="appContainer" >
        { this.props.children }
      </div>
    );
  };
}
