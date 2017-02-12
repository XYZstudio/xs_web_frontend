// Modules
import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

export default class DashboardResumePage extends React.Component {
  constructor() {
    super();

    this.state = {

    };

  }

  render() {
    return (
      <div>
        <div>下载已上传简历</div>
        <div>************** 分割线 ****************</div>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
            简历
            </Col>
            <Col sm={10}>
              <FormControl type="file"/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                上传简历
              </Button>
            </Col>
          </FormGroup>
        </Form>     
      </div>
    );
  };
}