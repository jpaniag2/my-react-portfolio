import React from 'react';
import { Button } from '../ButtonStyle';


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
        } from './ProjectsStyle';


const Projects = ({primary, dark, 
    dark2,lightBg, id, imgStart, 
    introduction, projectName, topLine, lightText, 
    headline, darkText, description, 
    img, alt, buttonLabel, repositoryUrl, projectName2, img2, 
    description2, buttonLabel2, repositoryUrl2
    }) => {

  return (

    <InfoContainer lightBg={lightBg} id={id}>
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

              <BtnWrap>
              <Button><a href={repositoryUrl} target="_blank">Repository</a></Button>

              </BtnWrap>

            </TextWrapper>
          </Column1>

          <Column2>
          <TextWrapper>
              {/* <Introduction>{projectName}</Introduction> */}
              <TopLine>{projectName2}</TopLine>
              <ImgWrap>
              <Img src={img2} alt={alt} />
            </ImgWrap>
              <Subtitle darkText={darkText}>{description2}</Subtitle>

              <BtnWrap>
              <Button><a href={repositoryUrl2} target="_blank">Repository</a></Button>

              </BtnWrap>

            </TextWrapper>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>

  )

};

export default Projects;