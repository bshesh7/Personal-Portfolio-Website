import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";

import java from "../assets/img/java.jpeg";
import aws from "../assets/img/aws.png";
import python from "../assets/img/python.png";
import angular from "../assets/img/angular.png";

import sping from "../assets/img/spring.png";
import mysql from "../assets/img/mysql.png";
import mongo from "../assets/img/mongodb.png";
import jenkins from "../assets/img/jenkins.png";
import hibernate from "../assets/img/hibernate.png";
import junit5 from "../assets/img/junit5.png";
import docker from "../assets/img/docker.png";
import numpy from "../assets/img/numpy.png";
import html5 from "../assets/img/html5.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/javascript.png";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

        
         /*         
  <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
  <div className="item">
      <img src={meter1} alt="Image" />
      <h5>Web Development</h5>
  </div>
  <div className="item">
      <img src={meter2} alt="Image" />
      <h5>Brand Identity</h5>
  </div>
  <div className="item">
      <img src={meter3} alt="Image" />
      <h5>Logo Design</h5>
  </div>
  <div className="item">
      <img src={meter1} alt="Image" />
      <h5>Web Development</h5>
  </div>
</Carousel>
*/
  return (
  


    
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>These are the technical skills I am familiar with. These include programming languages I have worked with in my projects, frameworks or tech-stacks.</p>
                       
                        <Container fluid="md">
                          <Row>
                            <Col>
                              <div className="item">    
                                <img src={java} alt="Image" />                           
                                <h5>Java</h5>
                              </div>
                            </Col>
                            <Col>
                              <div className="item">    
                                <img src={aws} alt="Image" />                           
                                <h5>AWS</h5>
                              </div>
                            </Col>
                            <Col>
                              <div className="item">    
                                <img src={python} alt="Image" />                           
                                <h5>Python</h5>
                              </div>
                            </Col>
                            <Col>
                              <div className="item">    
                                <img src={angular} alt="Image" />                           
                                <h5>AngularJS</h5>
                              </div>
                            </Col>

                            <Col>
                              <div className="item">    
                                <img src={jenkins} alt="Image" />                           
                                <h5>Jenkins</h5>
                              </div>
                            </Col>
                          
                           
                         </Row>            

                         <Row id="row">
                         <Col>
                              <div className="item">    
                                <img src={numpy} alt="Image" />                           
                                <h5>Numpy</h5>
                              </div>
                            </Col>
                            <Col>
                              <div className="item">    
                                <img src={sping} alt="Image" />                           
                                <h5>Spring Framework</h5>
                              </div>
                            </Col>
                            <Col>
                              <div className="item">    
                                <img src={mysql} alt="Image" />                           
                                <h5>MySql</h5>
                              </div>
                            </Col>
                            <Col>
                              <div className="item">    
                                <img src={mongo} alt="Image" />                           
                                <h5>MongoDB</h5>
                              </div>
                            </Col>
                            <Col>
                              <div className="item">    
                                <img src={hibernate} alt="Image" />                           
                                <h5>Hibernate</h5>
                              </div>
                            </Col>

                            
                         </Row>       

                          <Row id="row">

                          <Col>
                              <div className="item">    
                                <img src={junit5} alt="Image" />                           
                                <h5>junit5</h5>
                              </div>
                            </Col>

                            <Col>
                              <div className="item">    
                                <img src={docker} alt="Image" />                           
                                <h5>docker</h5>
                              </div>
                            </Col>
                            <Col>
                              <div className="item">    
                                <img src={html5} alt="Image" />                           
                                <h5>Spring Framework</h5>
                              </div>
                            </Col>
                            <Col>
                              <div className="item">    
                                <img src={css} alt="Image" />                           
                                <h5>Spring Framework</h5>
                              </div>
                            </Col>
                            <Col>
                              <div className="item">    
                                <img src={javascript} alt="Image" />                           
                                <h5>Spring Framework</h5>
                              </div>
                            </Col>
                            
                        </Row>    
                          
                        </Container>

                  
                    

                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
    
  )
}
