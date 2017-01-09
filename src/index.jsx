// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import App from './components/App.jsx';
import Login from './components/login/login_main.jsx';
import MainPage from './components/main/main_page.jsx';

// Router
ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ MainPage } />
      <Route path='/login' component={ Login } />
    </Route>
  </Router>,
document.getElementById('app'));
