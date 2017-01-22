// Modules
import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Button from 'react-bootstrap/lib/Button';

const tempImg = 'https://sandbergwallpaper.com/wp-content/uploads/2014/09/515-61_image2-300x300.jpg';

export default class ThumbnailComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Grid>
        <Row>
        <Col xs={6} md={4}>
          <Thumbnail src={ tempImg } alt="242x200" style={{ margin: 40, border: 0 }}>
            <h3>Thumbnail label</h3>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            <p>
              <Button bsStyle="default">View Details</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src={ tempImg } alt="242x200" style={{ margin: 40, border: 0 }}>
            <h3>Thumbnail label</h3>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            <p>
              <Button bsStyle="default">View Details</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src={ tempImg } alt="242x200" style={{ margin: 40, border: 0 }}>
            <h3>Thumbnail label</h3>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            <p>
              <Button bsStyle="default">View Details</Button>
            </p>
          </Thumbnail>
        </Col>
        </Row>
      </Grid>
    );
  }
}