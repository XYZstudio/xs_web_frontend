// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import App from 'component/App.jsx';
import Login from 'component/login/login_main.jsx';
import MainPage from 'component/main/main_page.jsx';
import Course from 'component/course/Course.jsx';
import FindMyPassword from 'component/password/find_password.jsx';

// Router
ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ MainPage } />
      <Route path='/course' component={ Course } />
      <Route path='/login' component={ Login } />
      <Route path='/reset_password' component={ FindMyPassword } />
    </Route>
  </Router>,
document.getElementById('app'));
