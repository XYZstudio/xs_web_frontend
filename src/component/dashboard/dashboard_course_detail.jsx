import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LoginStore from 'store/login';


export default class DashboardCourseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      courseName: props.params.courseName
    };
  }

  componentWillMount() {
    const user = LoginStore.getState();
    if (user && user.email) {
      this.setState({ user: user });
    } else {
      this.setState({ user: null });
    }
  }

  componentDidMount() {
    console.log(this.state.courseName);
  }

  render() {
    return (
      <div className="container">

      </div>
    );
  };
}
