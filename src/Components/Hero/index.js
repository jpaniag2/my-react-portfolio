import React from 'react';
import styled from 'styled-components'
import Video from '../../videos/hero_video.mp4'
import { Container } from 'react-bootstrap';

import { InfoContainer, 
         InfoWrapper, 
         InfoRow, 
         Column1, 
         Column2, 
         TextWrapper, 
         TopLine,
         Heading,
         Subtitle,
         ImgWrap,
         Img,
         Introduction
        } from './HeroStyle';


const HeroBg = styled.div`

        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        
        overflow: hidden;
    
    `;

    const VideoBg = styled.video`
    width: 100%;
    height: 90%;
    -o-object-fit: none;
    object-fit: cover;
    background-color: transparent;
    ${'' /* background: #232a34; */}

    @media screen and (max-width: 1024px){
        margin-top: 10%;
        height: 69%;
        object-fit: contain;
    }
    @media screen and (max-width:450px){
        margin-top: 40%;
        height: 100%;
        object-fit: contain;
    }
    
`;

const Hero = ({lightBg, id, imgStart, introduction, topLine, lightText, headline, darkText, description, img, alt}) => {
  return (
    <>

      <Container fluid>
      <HeroBg>
{/* 
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <Introduction>{introduction}</Introduction>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <br></br>
              <br></br>
              <Subtitle darkText={darkText}>{description}</Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer> */}
          <TextWrapper>
              <Introduction>{introduction}</Introduction>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <br></br>
              <br></br>
              <Subtitle darkText={darkText}>{description}</Subtitle>
            </TextWrapper>
        <VideoBg autoPlay muted loop src={Video} type='WorkStation/mp4' />
      </HeroBg>
      </Container>
  
  



    </>
  )

};

export default Hero;