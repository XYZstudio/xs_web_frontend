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

export default class DashboardEducationPage extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
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
          <Row>
          <h3 className="dashboardContentChineseHead">教育背景:</h3>
          <div>内容为空</div>
          </Row>
          <Row>
            <h3 className="dashboardContentChineseHead">添加教育经历:</h3>
            <Row>
              <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    学校
                  </Col>
                  <Col sm={10}>
                    <FormControl />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    地址
                  </Col>
                  <Col sm={10}>
                    <FormControl />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    开始时间
                  </Col>
                  <Col sm={10}>
                    <FormControl />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    结束时间
                  </Col>
                  <Col sm={10}>
                    <FormControl />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    学位
                  </Col>
                  <Col sm={10}>
                    <FormControl />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    专业
                  </Col>
                  <Col sm={10}>
                    <FormControl />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                  描述
                  </Col>
                  <Col sm={10}>
                    <FormControl componentClass="textarea"/>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit">
                      添加教育经历
                    </Button>
                  </Col>
                </FormGroup>
              </Form>     
            </Row>
          </Row>
        </Col>
        <Col xs={5} md={3}></Col>
      </Grid>
    );
  };
}