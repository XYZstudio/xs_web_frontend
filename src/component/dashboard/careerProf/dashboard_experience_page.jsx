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


export default class DashboardExperiencePage extends React.Component {
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
              <Row>
                <h3 className="dashboardContentChineseHead">工作经验:</h3>
                <div>内容为空</div>
              </Row>
              <Row>
                <h3 className="dashboardContentChineseHead">添加工作经验:</h3>
                <Row>
                  <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                      <Col componentClass={ControlLabel} sm={2}>
                        公司
                      </Col>
                      <Col sm={10}>
                        <FormControl />
                      </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                      <Col componentClass={ControlLabel} sm={2}>
                        职位名称
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

                    <FormGroup controlId="formHorizontalEmail">
                      <Col componentClass={ControlLabel} sm={2}>
                        经历描述
                      </Col>
                      <Col sm={10}>
                        <FormControl componentClass="textarea"/>
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col smOffset={2} sm={10}>
                        <Button type="submit">
                          添加工作经历
                        </Button>
                      </Col>
                    </FormGroup>
                  </Form>     
                </Row>
              </Row>
            </Row>
          </Col>
          <Col xs={5} md={3}></Col>
        </Grid>
    );
  };
}