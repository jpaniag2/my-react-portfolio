import React from 'react';
import { Button } from '../ButtonStyle';
import '../Freelance/Freelance.css'

import { InfoContainer, 
         InfoWrapper, 
         InfoRow, 
         Column1, 
         Column2, 
         TextWrapper, 
         TopLine,
         TopLine2,
         Subtitle,
         BtnWrap,
         ImgWrap,
         Img
        } from './FreelanceStyle';


const Freelance = ({lightBg, imgStart, 
                    projectName, darkText, description, 
                    img, alt, projectName2, img2, 
                    description2, repositoryUrl, repositoryUrl2, buttonLabel
    }) => {
  return (

    <InfoContainer lightBg={lightBg} id='freelance'>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{projectName}</TopLine>
              <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
              <Subtitle darkText={darkText}>{description}</Subtitle>

              <BtnWrap>
              <Button><a href={repositoryUrl} target="_blank">{buttonLabel}</a></Button>

              </BtnWrap>
            </TextWrapper>
          </Column1>

          <Column2>
          <TextWrapper>
              <TopLine2>{projectName2}</TopLine2>
              <ImgWrap>
              <Img src={img2} alt={alt} />
            </ImgWrap>
              <Subtitle darkText={darkText}>{description2}</Subtitle>

              <BtnWrap>
              <Button><a href={repositoryUrl2} target="_blank">{buttonLabel}</a></Button>

              </BtnWrap>

            </TextWrapper>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )

};

export default Freelance;