import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion'
import AndroidIcon from '../../images/android_icon.PNG'
import SwiftIcon from '../../images/swift_icon.png'

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




const Experience = ({ lightBg, imgStart, darkText }) => {

      const animationControlIcon1 = useAnimation();
      const animationControlIcon2 = useAnimation();

      const {inView, ref} = useInView();

      if (inView) {
            animationControlIcon1.start({
                  opacity: 1, x: '0vw', y: 300, transition: { duration: 1, delay: 1 }
            });
            
            animationControlIcon2.start({
                  opacity: 1, x: '5vw', y: 0, transition: { duration: 2, delay: 2 } 
            })
      }

      return (
            <>
                  

                  <Container fluid style={{ color: '#fff', backgroundColor: '#212429' }} ref={ref}>
                        <Row>
                              <Introduction>Languages & Tools</Introduction>
                              <TopLine>currently working and previously worked with</TopLine>
                              <Col sm>
                                    <Subtitle darkText={darkText}>Java, Kotlin</Subtitle>
                                    <Subtitle darkText={darkText}>Swift</Subtitle>
                                    <Subtitle darkText={darkText}>React.js</Subtitle>
                                    <Subtitle darkText={darkText}>HTML, CSS, JavaScript</Subtitle>
                                    <Subtitle darkText={darkText}>C#</Subtitle>
                                    <Subtitle darkText={darkText}>Node.js</Subtitle>
                                    <Subtitle darkText={darkText}>NPM, COCOAPODS</Subtitle>
                                    <Subtitle darkText={darkText}>Bootstrap</Subtitle>
                                    <Subtitle darkText={darkText}>Android Studio</Subtitle>
                                    <Subtitle darkText={darkText}>Xcode</Subtitle>
                                    <Subtitle darkText={darkText}>Visual Studio Code</Subtitle>
                                    <Subtitle darkText={darkText}>Visual Studio (.NET, Windows Form)</Subtitle>
                                    <Subtitle darkText={darkText}>Agile</Subtitle>
                                    <Subtitle darkText={darkText}>SQL, SQLite, MongoDB, REST Api</Subtitle>
                                    <Subtitle darkText={darkText}>Firebase Hosting</Subtitle>
                                    <Subtitle darkText={darkText}>React.js</Subtitle>
                              </Col>

                              <Col sm>
                                    <Image
                                          src={AndroidIcon}
                                          alt='first'
                                          whileTap={{ scale: 0.9 }}
                                          // drag={true}
                                          // dragConstraints={{ left: 0, right: 800, bottom: 300, top: 300 }}
                                          initial={{ opacity: 0, x: '10vw', y: 300 }}
                                          animate={ animationControlIcon1 }
                                    // style={{position: 'fixed', zIndex: '-1'}}
                                    />

                                    <Image
                                          src={SwiftIcon}
                                          alt='first'
                                          whileTap={{ scale: 0.9 }}
                                          // drag={true}
                                          // dragConstraints={{ left: 700, right: 700, bottom: 50, top: -50 }}
                                          initial={{ opacity: 0, x: '10vw', y: -50 }}
                                          animate={ animationControlIcon2 }
                                    // style={{position: 'fixed', zIndex: '-1'}}
                                    />
                              </Col>
                        </Row>
                  </Container>


            </>
      )

};

export default Experience;