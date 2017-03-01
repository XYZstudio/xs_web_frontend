// Modules
import React from 'react';
import LoginStore from 'store/login';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

export default class DashboardContactInfoPage extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null
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
          <Col xs={1} md={1}></Col>
          <Col xs={12} md={8}>
            <Form horizontal>
              <Row>
                <Col xs={9} md={6}>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      名
                    </Col>
                    <Col sm={10}>
                      <FormControl />
                    </Col>
                  </FormGroup>
                </Col>
                <Col xs={9} md={6}>
                  <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                      姓
                    </Col>
                    <Col sm={10}>
                      <FormControl />
                    </Col>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col xs={9} md={6}>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      地址
                    </Col>
                    <Col sm={10}>
                      <FormControl />
                    </Col>
                  </FormGroup>
                </Col>
                <Col xs={9} md={6}>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      城市
                    </Col>
                    <Col sm={10}>
                      <FormControl />
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="dashboardContentOneLineControlRow">
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    邮件
                  </Col>
                  <Col sm={10}>
                    <FormControl />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    邮编
                  </Col>
                  <Col sm={10}>
                    <FormControl />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    移动电话
                  </Col>
                  <Col sm={10}>
                    <FormControl />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    固话
                  </Col>
                  <Col sm={10}>
                    <FormControl />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit">
                      保存
                    </Button>
                  </Col>
                </FormGroup>
              </Row>
            </Form>
          </Col>
          <Col xs={5} md={3}></Col>
        </Grid>
    );
  };
}