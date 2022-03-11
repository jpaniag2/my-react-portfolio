import React from 'react';
import { Button } from '../ButtonStyle';

import { InfoContainer, 
         InfoWrapper, 
         InfoRow, 
         Column1, 
         Column2, 
         TextWrapper, 
         TopLine,
         TopLine2,
         Heading,
         Subtitle,
         BtnWrap,
         ImgWrap,
         Img,
         Introduction
        } from './FreelanceStyle';


const Freelance = ({primary, dark, 
    dark2,lightBg, id, imgStart, 
    introduction, projectName, topLine, lightText, 
    headline, darkText, description, 
    img, alt, buttonLabel, projectName2, img2, 
    description2, buttonLabel2
    }) => {
  return (

    <InfoContainer lightBg={lightBg} id='freelance'>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              {/* <Introduction>{projectName}</Introduction> */}
              <TopLine>{projectName}</TopLine>
              <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
              <Subtitle darkText={darkText}>{description}</Subtitle>

              {/* <BtnWrap>
                <Button to='/' 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact="true" 
                offset={-80} 
                primary={primary ? 1 : 0} 
                dark={dark ? 1: 0} 
                dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
              </BtnWrap> */}

            </TextWrapper>
          </Column1>

          <Column2>
          <TextWrapper>
              {/* <Introduction>{projectName}</Introduction> */}
              <TopLine2>{projectName2}</TopLine2>
              <ImgWrap>
              <Img src={img2} alt={alt} />
            </ImgWrap>
              <Subtitle darkText={darkText}>{description2}</Subtitle>

              {/* <BtnWrap>
                <Button to='/' 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact="true" 
                offset={-80} 
                primary={primary ? 1 : 0} 
                dark={dark ? 1: 0} 
                dark2={dark2 ? 1 : 0}>{buttonLabel2}</Button>
              </BtnWrap> */}

            </TextWrapper>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )

};

export default Freelance;