// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import App from './components/App.jsx';
import SampleComponent from './components/sample/sample.jsx';

// Router
ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ SampleComponent } />
    </Route>
  </Router>,
document.getElementById('app'));
