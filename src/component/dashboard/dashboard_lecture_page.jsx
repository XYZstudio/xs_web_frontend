import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';
import Media from 'react-bootstrap/lib/Media';
import NavbarComponent from 'component/main/navbar';
import BottomNavbarComponent from 'component/main/bottom_navbar';
import MainPageStyle from 'style/main.scss';

const tempImg = 'https://sandbergwallpaper.com/wp-content/uploads/2014/09/515-61_image2-300x300.jpg';

export default class DashboardLecturesPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    var courses = [];
    for (var i = 0; i < 10; i++) {
      const courseCellId = 'course_cell_' + i;
      courses.push(
        <Row>
          <Well id={ courseCellId } className="dashboardCourseCellWrap">
            <Media>
              <Media.Left>
                <img width={200} height={200} src={ tempImg } alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Lecture Heading</Media.Heading>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              </Media.Body>
            </Media>
          </Well>
        </Row>
      );
    }

    return (
      <div className="dashboardContentMargin">
        { courses }
      </div>
    );
  }
}