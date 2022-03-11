import React from 'react';
import Experience from '../Experience';
import Freelance from '../Freelance';
import { freelanceObjOne } from '../Freelance/Data';
import Hero from '../Hero';
import { homeObjOne } from '../Hero/Data';
import Projects from '../Projects';
import { projectObjOne, projectObjTwo } from '../Projects/Data';
import SideBarNav from '../SideBarNav'
import { Container, 
         InfoWrapper, 
         InfoRow, 
         Column1, 
         Column2, 
         TextWrapper, 
         TopLine,
         Heading,
         Subtitle,
         BtnWrap,
         ImgWrap,
         Img
        } from './HomeContentsStyle';


const HomeContents = () => {
  return (
    
    <Container>
    <SideBarNav />
    <Hero {...homeObjOne}/>
    <Experience />
    <Freelance {...freelanceObjOne}/>
    <Projects {...projectObjOne} />
    <Projects {...projectObjTwo} />
    </Container>

    
  )

};

export default HomeContents;