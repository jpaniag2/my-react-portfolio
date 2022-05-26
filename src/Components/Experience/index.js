import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



import {
      InfoContainer,
      InfoWrapper,
      InfoRow,
      Column1,
      Column2,
      TextWrapper,
      TopLine,
      TechnologyItem,
      Subtitle,
      Introduction,
      HeadingWrapper,
      Image
} from './ExperienceStyle';




const Experience = ({ lightBg, imgStart, darkText, props }) => {

      return (
            <>


                  <Container fluid style={{ color: '#fff', backgroundColor: '#212429', paddingTop: '5%' }}  id='experience'>
                        <Container>
                        <br></br>
                        <Introduction>Languages & Tools</Introduction>
                        <TopLine>currently working and previously worked with</TopLine>
                        <br></br>
                        <Row >
                              <Col >
                                    <Subtitle darkText={darkText}>Java, Kotlin</Subtitle>
                                    <Subtitle darkText={darkText}>Swift</Subtitle>
                                    <Subtitle darkText={darkText}>React.js</Subtitle>
                                    <Subtitle darkText={darkText}>HTML, CSS, JavaScript</Subtitle>
                                    <Subtitle darkText={darkText}>C#</Subtitle>
                                    <Subtitle darkText={darkText}>Ruby</Subtitle>
                                    <Subtitle darkText={darkText}>React</Subtitle>
                                    <Subtitle darkText={darkText}>Relational Databases</Subtitle>
                                    <Subtitle darkText={darkText}>Non-Relational Databases</Subtitle>

                              </Col>
                              <Col>
                                    <Subtitle darkText={darkText}>Visual Studio Code</Subtitle>
                                    <Subtitle darkText={darkText}>Xcode</Subtitle>
                                    <Subtitle darkText={darkText}>Android Studio</Subtitle>
                                    <Subtitle darkText={darkText}>Visual Studio (.NET, Windows Form)</Subtitle>
                                    <Subtitle darkText={darkText}>AWS Cloud9</Subtitle>

                              </Col>
                              <Col>
                              <Subtitle darkText={darkText}>Node.js</Subtitle>
                                    <Subtitle darkText={darkText}>NPM, COCOAPODS</Subtitle>
                                    <Subtitle darkText={darkText}>Bootstrap</Subtitle>
                                    <Subtitle darkText={darkText}>Agile</Subtitle>
                                    <Subtitle darkText={darkText}>Firebase Hosting</Subtitle>
                              </Col>

                              
                        </Row>
                        </Container>
                        
                  </Container>


            </>
      )

};

export default Experience;