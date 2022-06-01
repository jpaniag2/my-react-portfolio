import React from 'react';
import { Container } from 'react-bootstrap';
import Experience from '../Experience';
import ExperienceIcons from '../ExperienceIcons';
import Footer from '../Footer';
import Freelance from '../Freelance';
import { freelanceObjOne } from '../Freelance/Data';
import Hero from '../Hero';
import { homeObjOne } from '../Hero/Data';
import NavBar from '../NavBar';
import Projects from '../Projects';


const HomeContents = () => {
  return (
    
    <Container fluid style={{backgroundColor: '#1D1D1D', marginTop:'3%'}}>
    <NavBar />
    <Hero {...homeObjOne}/>
    <ExperienceIcons />
    <Freelance/>
    <Experience /> 
    <Projects />
    <Footer />
    </Container>

    
  )

};

export default HomeContents;