// Modules
import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

export default class DashboardEducationPage extends React.Component {
  constructor() {
    super();

    this.state = {

    };

  }

  render() {
    return (
      <div>
        <div>之前教育经历list</div>
        <div>************** 分割线 ****************</div>
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
              <FormControl componentClass="textarea"/>
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
      </div>
    );
  };
}