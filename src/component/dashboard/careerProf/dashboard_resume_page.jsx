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

export default class DashboardResumePage extends React.Component {
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
                <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col sm={2}>
                    已上传简历：
                    </Col>
                    <Col sm={10}>
                      <a>Resume_BinQi.pdf</a>
                    </Col>
                  </FormGroup>
                  <Row>
                    <FormGroup controlId="formHorizontalEmail">
                      <Col sm={2}>
                      更新简历
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
                  </Row>
                </Form>  
            </Row>
          </Col>
          <Col xs={5} md={3}></Col>
        </Grid>
    );
  };
}