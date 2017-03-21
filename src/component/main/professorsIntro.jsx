import config from 'root/config.json';
import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';
import Media from 'react-bootstrap/lib/Media';
import Button from 'react-bootstrap/lib/Button';
import NavbarComponent from 'component/main/navbar';
import BottomNavbarComponent from 'component/main/bottom_navbar';
import MainPageStyle from 'style/main.scss';
import { browserHistory } from 'react-router';
import * as request from 'superagent';
import { Icon } from 'react-fa';
import faker from 'faker';
import courseStyle from 'style/mainPageCourse.scss';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import VencePhoto from 'style/asset/givencen.png';
import NealPhoto from 'style/asset/neal.png';
import WilliamPhoto from 'style/asset/william.png';
import RayPhoto from 'style/asset/ray.png';

export default class ProfessorsIntro extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Grid>
        <Col xs={2} md={1}></Col>
        <Col xs={14} md={10}>
            <div className="professorsIntroBlock">
                <Jumbotron>
                    <Row>
                        <div className="professorsIntroHeader">Professor Vince Gennaro</div>
                        <div className="professorsIntroHeader">纪文森导师</div>
                    </Row>
                    <Row>
                        <Col xs={4} md={3}>
                            <img className="professorsIntroPhoto" src={VencePhoto}></img>
                        </Col>
                        <Col xs={12} md={9}>
                            <ListGroup componentClass="ul">
                                <li>哥伦比亚大学体育管理硕士项目主任</li>
                                <li>美国棒球协会会长(SABR)</li>
                                <li>数字背后：棒球式风格 的特约嘉宾</li>
                                <li>《钻石美元》: 棒球经济学 的作者</li>
                                <li>SiriusXM广播节目的主持人</li>
                                <li>职业运动队顾问</li>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <div className="pgraph">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            纪文森导师的篮球分析学创新学术成果已经是华尔街日报、纽约时报和美国有线新闻网的主题文章，内容包括运动员评估、新尺度的发展，和以美元来衡量球员价值。
                        </div>
                        <div className="pgraph">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            文森经常出现在美国职棒大联盟网的演播室节目上，比如实时美国职棒大联盟和俱乐部的机密，他对棒球技术具有独到的视野与见解。他还经常以体育赛事媒体特邀评论员的身份出现在YES网络、CNBC美国全国广播公司财经频道、彭博财经、纽约市全区域无线广播，以及许多其他广播电台。
                        </div>
                        <div className="pgraph">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            他有丰富的企业经营管理经验，他曾经管理价值十亿美元的瓶装可乐部门和世界领先的零食品牌Doritos立体脆，并拥有一家连锁体育用品加盟商电。27岁时他就成功融资买下了女子职业篮球联赛的专营权，并担任了董事长和总经理，这就是现在的女子篮球联盟(WNBA)的前身。
                        </div>
                    </Row>
                </Jumbotron>

                <Jumbotron>
                    <Row>
                        <div className="professorsIntroHeader">Professor Neal Pilson</div>
                        <div className="professorsIntroHeader">皮尔森导师</div>
                    </Row>
                    <Row>
                        <Col xs={4} md={3}>
                            <img className="professorsIntroPhoto" src={NealPhoto}></img>
                        </Col>
                        <Col xs={12} md={9}>
                            <ListGroup componentClass="ul">
                                <li>哥伦比亚大学体育管理硕士项目教授</li>
                                <li>Pilson Communitaion 公司（PCI）主席</li>
                                <li>国际奥委会授予奥林匹克勋章获得者</li>
                                <li>前CBS体育频道主席</li>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <div className="pgraph">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            皮尔森导师的公司PCI创立于1995年，为美国本土及各国际公司和组织提供体育电视、体育媒体及体育营销等领域的咨询和谈判服务。主要客户包括NASCAR，国际奥委会，世界杯和NFL（超级碗）等。
                        </div>
                        <div className="pgraph">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            在两度担任CBS主席期间，皮尔森掌管所有主流体育赛事的电视转播权谈判，包括NFL（超级碗）、NCAA篮球赛、大学足球和篮球体育，且主导并购了冬奥会的美国国内电视转播权。在任期间，CBS的制作团队因对the Final Four，NFL Football，Major League Baseball 等著名赛事的杰出报道多次获得艾美奖。
                        </div>
                        <div className="pgraph">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            在加入CBS之前，皮尔森是一名纽约执业律师，并曾任Metromedia和WillamMorris公司高层。1960年，皮尔森在汉密尔顿学院获得历史学学位，并在1963年获得耶鲁法学院学位。
                        </div>
                    </Row>
                </Jumbotron>

                <Jumbotron>
                    <Row>
                        <div className="professorsIntroHeader">Professor William D. Squires</div>
                        <div className="professorsIntroHeader">斯科尔斯导师</div>
                    </Row>
                    <Row>
                        <Col xs={4} md={3}>
                            <img className="professorsIntroPhoto" src={WilliamPhoto}></img>
                        </Col>
                        <Col xs={12} md={9}>
                            <ListGroup componentClass="ul">
                                <li>哥伦比亚大学体育管理硕士项目教授</li>
                                <li>美国场馆协会主席（1991年至2010年）</li>
                                <li>The Right Stuff 咨询公司创始人</li>
                                <li>Super Bowl超级碗场馆运营负责人</li>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <div className="pgraph">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            斯科尔斯导师在体育和娱乐设施管理领域从业26年，在众多大型体育场馆全方位运营和管理领域有丰富的经验。他是每年全球超级碗场馆的运营负责人，另外还负责运营管理过扬基体育场、巨人体育场、克里夫兰体育场等。1999年，斯科尔斯导师见证了克利夫兰体育馆的开业，并作为第一任总经理管理福罗里达州体育中心。
                        </div>
                        <div className="pgraph">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            目前他拥有自己的咨询公司，主要客户之一是以17亿美元投资建成的大都会人寿体育场，美国许多著名的体育设施产品和服务的供应商都是他的客户。斯科尔斯现任场馆经理人联盟主席，很多NFL、MLB、 MLS、 CFL、赛道、国际设施、学院和大学的设施经理人都是此联盟的成员。
                        </div>
                    </Row>
                </Jumbotron>

                <Jumbotron>
                    <Row>
                        <div className="professorsIntroHeader">Professor Ray Katz</div>
                        <div className="professorsIntroHeader">卡茨导师</div>
                    </Row>
                    <Row>
                        <Col xs={4} md={3}>
                            <img className="professorsIntroPhoto" src={RayPhoto}></img>
                        </Col>
                        <Col xs={12} md={9}>
                            <ListGroup componentClass="ul">
                                <li>哥伦比亚大学体育管理硕士项目教授</li>
                                <li>ROI Sports Group源体育合伙人</li>
                                <li>沃顿体育产业项目咨询顾问</li>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <div className="pgraph">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            卡茨在体育行业中有近20年的工作经验，曾经就职于社团（美国橄榄球联盟）、代理商（杨格&鲁比坎）、网络公司（足球网络），以及团队/竞技场（麦迪逊广场花园）。他的专业领域主要包括跨体育行业营销、体育媒体、体育赞助商、新兴技术等。
                        </div>
                        <div className="pgraph">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            ROI Sports Group作为源通信——领先的广告和交易市场营销公司的子公司，自1983年起已为包括赛百味，索尼，惠普，美国铁路公司，JH科恩和2014超级碗主办委员会在内的各大企业提供专业体育业市场营销咨询服务。
                        </div>
                        <div className="pgraph">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            卡茨毕业于美国宾夕法尼亚大学沃顿商学院，拥有工商管理学硕士学位，曾是商业体育学校和沃顿体育产业项目的专业咨询顾问。
                        </div>
                    </Row>
                </Jumbotron>
            </div>
        </Col>
        <Col xs={2} md={1}></Col>
      </Grid>
    );
  }
}