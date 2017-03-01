// Modules
import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Image from 'react-bootstrap/lib/Image';
import touxiang from 'style/asset/touxiang.png';
import LoginStore from 'store/login';

export default class DashboardSummaryPage extends React.Component {
  constructor() {
    super();

    this.state = {
      user : null
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

  render() {
    return (
        <Grid>
        <Col xs={3} md={2}></Col>
        <Col xs={12} md={8}>
          <Row className="textCenter dashboradContent">
            <Image className="dashboardAvatar" src= {touxiang} circle />
            <h3 className="profileSettingUserName">{ this.state.user.name }</h3>
          </Row>
          <Row>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  个人签名
                </Col>
                <Col sm={10}>
                  <FormControl placeholder="www.YourWebsite.com" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  微信
                </Col>
                <Col sm={10}>
                  <FormControl placeholder="twitter.com/YourTwitterName" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  QQ
                </Col>
                <Col sm={10}>
                  <FormControl placeholder="facebook.com/YourFaceBookName" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  微博
                </Col>
                <Col sm={10}>
                  <FormControl placeholder="YourLinkinUrl" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  领英
                </Col>
                <Col sm={10}>
                  <FormControl placeholder="YourLinkinUrl" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  人人
                </Col>
                <Col sm={10}>
                  <FormControl placeholder="YourRenrenUrl" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">
                    保存
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Row>
        </Col>
        <Col xs={3} md={2}></Col>
          
        </Grid>
    );
  };
}