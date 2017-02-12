// Modules
import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

export default class DashboardExperiencePage extends React.Component {
  constructor() {
    super();

    this.state = {

    };

  }

  render() {
    return (
      <div>
        <div>
          <h3 className="dashboardContentChineseHead">工作经验:</h3>
          <div>内容为空</div>
        </div>
        <div>
          <h3 className="dashboardContentChineseHead">添加工作经验:</h3>
          <div>
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
                  职能描述
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
          </div>
        </div>
      </div>
    );
  };
}