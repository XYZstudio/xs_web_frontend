// Modules
import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

export default class DashboardSummaryPage extends React.Component {
  constructor() {
    super();

    this.state = {

    };

  }

  render() {
    return (
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              个人网站
            </Col>
            <Col sm={10}>
              <FormControl placeholder="www.YourWebsite.com" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              推特
            </Col>
            <Col sm={10}>
              <FormControl placeholder="twitter.com/YourTwitterName" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              脸书
            </Col>
            <Col sm={10}>
              <FormControl placeholder="facebook.com/YourFaceBookName" />
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
    );
  };
}