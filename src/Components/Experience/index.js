import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import AndroidIcon from '../../images/android_icon.PNG'
import SwiftIcon from '../../images/swift_icon.png'
import ReactIcon from '../../images/react_icon.png'

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

      const animationControlIcon1 = useAnimation();
      const animationControlIcon2 = useAnimation();
      const animationControlIcon3 = useAnimation();

      const x = useMotionValue(0)
      const scale = useTransform(x, [-150, 150], [1.5, 0.5])
      const rotate = useTransform(x, [-150, 150], [-90, 90])

      const { inView, ref } = useInView();

      if (inView) {
            animationControlIcon1.start({
                  rotate: 360, opacity: 1, x: 200, y: 300, transition: { type: "spring", damping: 10,
                  mass: 0.75, stiffness: 100, duration: 1, delay: 1 }
            });

            animationControlIcon2.start({
                  opacity: 1, x: 0, y: 0, transition: { duration: 2, delay: 2 }
            })

            animationControlIcon3.start({
                  rotate: 360, transition: { duration: 4, ease: "linear", repeat: Infinity }
            })
      }

      return (
            <>


                  <Container fluid style={{ color: '#fff', backgroundColor: '#212429' }} ref={ref}>
                        <Row >
                              <Introduction>Languages & Tools</Introduction>
                              <TopLine>currently working and previously worked with</TopLine>
                              <Col lg>
                                    <Subtitle darkText={darkText}>Java, Kotlin</Subtitle>
                                    <Subtitle darkText={darkText}>Swift</Subtitle>
                                    <Subtitle darkText={darkText}>React.js</Subtitle>
                                    <Subtitle darkText={darkText}>HTML, CSS, JavaScript</Subtitle>
                                    <Subtitle darkText={darkText}>C#</Subtitle>
                                    <Subtitle darkText={darkText}>Ruby</Subtitle>
                                    <Subtitle darkText={darkText}>React</Subtitle>
                                    <Subtitle darkText={darkText}>SQL, SQLite, MongoDB, REST Api</Subtitle>
                                    <Subtitle darkText={darkText}>---------------</Subtitle>

                                    <Subtitle darkText={darkText}>Visual Studio Code</Subtitle>
                                    <Subtitle darkText={darkText}>Xcode</Subtitle>
                                    <Subtitle darkText={darkText}>Android Studio</Subtitle>
                                    <Subtitle darkText={darkText}>Visual Studio (.NET, Windows Form)</Subtitle>
                                    <Subtitle darkText={darkText}>AWS Cloud9</Subtitle>
                                    <Subtitle darkText={darkText}>---------------</Subtitle>

                                    <Subtitle darkText={darkText}>Node.js</Subtitle>
                                    <Subtitle darkText={darkText}>NPM, COCOAPODS</Subtitle>
                                    <Subtitle darkText={darkText}>Bootstrap</Subtitle>
                                    <Subtitle darkText={darkText}>Agile</Subtitle>
                                    <Subtitle darkText={darkText}>Firebase Hosting</Subtitle>
                                    
                              </Col>

                              <Col lg>
                                    <div>
                                    <Image
                                          src={AndroidIcon}
                                          alt='androidIcon'
                                          whileTap={{ scale: 0.8 }}
                                           drag={true}
                                           dragConstraints={{ left: 0, right: 300, bottom: 300, top: 300 }}
                                          initial={{ opacity: 0, x: 10, y: 300 }}
                                          animate={animationControlIcon1}
                                          whileHover={{cursor: "grabbing"}}
                                    />

                                    <Image
                                          src={SwiftIcon}
                                          alt='swiftIcon'
                                          whileHover={{cursor: "grabbing"}}
                                          //whileTap={{ scale: 0.9 }}
                                          //drag={true}
                                          //dragConstraints={{ left: 0, right: 300, bottom: 0, top: 0 }}
                                          initial={{ opacity: 0, x: 10, y: 0 }}
                                          //animate={{opacity: 1, x: 0, y: 0, transition: { duration: 2, delay: 2 }}}
                                          animate={animationControlIcon2}
                                          style={{
                                                x: x,
                                                scale: scale,
                                                rotate: rotate,
                                                cursor: "grab",
                                          }}
                                          drag={true}
                                          dragConstraints={{ left: 0, right: 150, bottom: 0, top: 0 }}
                                          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                                          whileTap={{ cursor: "grabbing" }}
                                    // style={{position: 'fixed', zIndex: '-1'}}
                                    />
                                    <Image
                                          src={ReactIcon}
                                          alt='reactIcon'
                                          whileTap={{ scale: 0.8 }}
                                          drag={true}
                                          dragConstraints={{ left: 400, right: 400, bottom: 10, top: -10 }}
                                          initial={{ opacity: 1, x: 400, y: 0 }}
                                          animate={animationControlIcon3}
                                          whileHover={{cursor: "grabbing"}}
                                    />
                                    </div>

                              </Col>
                        </Row>
                  </Container>


            </>
      )

};

export default Experience;