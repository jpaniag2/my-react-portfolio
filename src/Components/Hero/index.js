import React from 'react';

import { InfoContainer, 
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
         Img,
         Introduction
        } from './HeroStyle';


const Hero = ({primary, dark, dark2,lightBg, id, imgStart, introduction, topLine, lightText, headline, darkText, description, img, alt, buttonLabel}) => {
  return (
    <>
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
    </InfoContainer>

    </>
  )

};

export default Hero;