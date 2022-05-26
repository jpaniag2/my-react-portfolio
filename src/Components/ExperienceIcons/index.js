import React from 'react'
import { Container } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import AndroidIcon from '../../images/android_icon.PNG'
import SwiftIcon from '../../images/swift_icon.png'
import ReactIcon from '../../images/react_icon.png'

import { Image, TopLine, Introduction } from './ExperienceIconsStyle';

const ExperienceIcons = () => {
    const animationControlIcon1 = useAnimation();
    const animationControlIcon2 = useAnimation();
    const animationControlIcon3 = useAnimation();

    const x = useMotionValue(0)
    const scale = useTransform(x, [-150, 150], [1.5, 0.5])
    const rotate = useTransform(x, [-150, 150], [-120, 60])

    const { inView, ref } = useInView();

    if (inView) {
          animationControlIcon1.start({
                rotate: 360, opacity: 1, x: 600, y: 300, transition: {
                      type: "spring", damping: 10,
                      mass: 0.75, stiffness: 100, duration: 1, delay: 1
                }
          });

          animationControlIcon2.start({
                opacity: 1, x: -50, y: 0, transition: { duration: 2, delay: 2 }
          })

          animationControlIcon3.start({
                rotate: 360, transition: { duration: 4, ease: "linear", repeat: Infinity }
          })
    }
    return (
        <Container fluid style={{ color: '#fff', backgroundColor: '#212429', paddingTop: '10%', paddingBottom: '5%'}} >
                                    <br></br>
                        {/* <Introduction>Framer Motion</Introduction> */}
                        <TopLine>drag icons</TopLine>
                        <br></br>
            <Container ref={ref}>

                    <Image
                        src={AndroidIcon}
                        alt='androidIcon'
                        whileTap={{ scale: 0.8 }}
                        drag={true}
                        dragConstraints={{ left: 300, right: 900, bottom: 300, top: 300 }}
                        initial={{ opacity: 0, x: 10, y: 300 }}
                        animate={animationControlIcon1}
                        whileHover={{ cursor: "grabbing" }}
                    />

                    <Image
                        src={SwiftIcon}
                        alt='swiftIcon'
                        whileHover={{ cursor: "grabbing" }}
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
                        whileHover={{ cursor: "grabbing" }}
                    />

            </Container>
        </Container>
    )
}

export default ExperienceIcons