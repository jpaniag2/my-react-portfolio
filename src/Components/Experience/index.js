import React from 'react';

import { InfoContainer, 
         InfoWrapper, 
         InfoRow, 
         Column1, 
         Column2, 
         TextWrapper, 
         TopLine,
         TechnologyItem,
         Subtitle,
         BtnWrap,
         ImgWrap,
         Img,
         Introduction,
         HeadingWrapper
        } from './ExperienceStyle';


const Experience = ({primary, dark, dark2,lightBg, id, imgStart, introduction, topLine, lightText, headline, darkText, description, img, alt, buttonLabel}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id='overview'>
      <InfoWrapper>
      <HeadingWrapper>
        
        <Introduction>Technologies and Methodologies</Introduction>
        <TopLine>I've worked with</TopLine>
        
      </HeadingWrapper>
        <InfoRow imgStart={imgStart}>
        
          <Column1>
            <TextWrapper>
              <TechnologyItem>
                    <Subtitle darkText={darkText}>Java, Kotlin</Subtitle>
              </TechnologyItem>
              <TechnologyItem>
                    <Subtitle darkText={darkText}>Swift</Subtitle>
              </TechnologyItem>
              <TechnologyItem>
                    <Subtitle darkText={darkText}>React.js</Subtitle>
              </TechnologyItem>
              <TechnologyItem>
                    <Subtitle darkText={darkText}>HTML, CSS, JavaScript</Subtitle>
              </TechnologyItem>
              <TechnologyItem>
                    <Subtitle darkText={darkText}>C#</Subtitle>
              </TechnologyItem>
              <TechnologyItem>
                    <Subtitle darkText={darkText}>Node.js</Subtitle>
              </TechnologyItem>
              <TechnologyItem>
                    <Subtitle darkText={darkText}>NPM, COCOAPODS</Subtitle>
              </TechnologyItem>
              <TechnologyItem>
                    <Subtitle darkText={darkText}>Bootstrap</Subtitle>
              </TechnologyItem>

            </TextWrapper>
          </Column1>
          <Column2>
          <TechnologyItem>
                    <Subtitle darkText={darkText}>Android Studio</Subtitle>
              </TechnologyItem>
              <TechnologyItem>
                    <Subtitle darkText={darkText}>Xcode</Subtitle>
              </TechnologyItem>
              <TechnologyItem>
                    <Subtitle darkText={darkText}>Visual Studio Code</Subtitle>
              </TechnologyItem>
              <TechnologyItem>
                    <Subtitle darkText={darkText}>Visual Studio (.NET, Windows Form)</Subtitle>
              </TechnologyItem>
              <TechnologyItem>
                    <Subtitle darkText={darkText}>Agile</Subtitle>
              </TechnologyItem>
              <TechnologyItem>
                    <Subtitle darkText={darkText}>SQL, SQLite, MongoDB, REST Api</Subtitle>
              </TechnologyItem>
              <TechnologyItem>
                    <Subtitle darkText={darkText}>Firebase Hosting</Subtitle>
              </TechnologyItem>
              <TechnologyItem>
                    <Subtitle darkText={darkText}>React.js</Subtitle>
              </TechnologyItem>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>

    </>
  )

};

export default Experience;