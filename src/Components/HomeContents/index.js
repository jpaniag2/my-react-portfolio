import React from 'react';
import { Container } from 'react-bootstrap';
import Experience from '../Experience';
import Freelance from '../Freelance';
import { freelanceObjOne } from '../Freelance/Data';
import Hero from '../Hero';
import { homeObjOne } from '../Hero/Data';
import NavBar from '../NavBar';
import Projects from '../Projects';
import { projectObjOne, projectObjTwo } from '../Projects/Data';


const HomeContents = () => {
  return (
    
    <Container fluid style={{backgroundColor: '#1D1D1D', marginTop:'3%'}}>
    <NavBar />
    <Hero {...homeObjOne}/> 
    <Experience />
    
    <Freelance {...freelanceObjOne}/>
    <Projects {...projectObjOne} />
    <Projects {...projectObjTwo} />
    </Container>

    
  )

};

export default HomeContents;