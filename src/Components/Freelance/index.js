import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from '../ButtonStyle';
import '../Freelance/Freelance.css'

import {TopLine,Introduction} from './FreelanceStyle';

import ProjectCard from '../ProjectCard';
import { AztecaBakery, LaAcapulquena } from '../ProjectCard/Data';

const freelanceProjects = [AztecaBakery, LaAcapulquena]


const Freelance = () => {
  return (

    <Container fluid style={{ backgroundColor: '#212429', paddingBottom: '10%', paddingTop: '10%' }} id='freelance'>
    <Container>
    <br></br>
      <Introduction>Crunchy Visions ©</Introduction>
      <TopLine>Freelance Clients</TopLine>

      <Row xs={1} md={2} className="g-4">
        {freelanceProjects.map((project) => (
          <Col>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
      <br></br>
    </Container>
    </Container>

    // <InfoContainer lightBg={lightBg} id='freelance'>
    //   <InfoWrapper>
    //     <InfoRow imgStart={imgStart}>
    //       <Column1>
    //         <TextWrapper>
    //           <TopLine>{projectName}</TopLine>
    //           <ImgWrap>
    //           <Img src={img} alt={alt} />
    //         </ImgWrap>
    //           <Subtitle darkText={darkText}>{description}</Subtitle>

    //           <BtnWrap>
    //           <Button><a href={repositoryUrl} target="_blank">{buttonLabel}</a></Button>

    //           </BtnWrap>
    //         </TextWrapper>
    //       </Column1>

    //       <Column2>
    //       <TextWrapper>
    //           <TopLine2>{projectName2}</TopLine2>
    //           <ImgWrap>
    //           <Img src={img2} alt={alt} />
    //         </ImgWrap>
    //           <Subtitle darkText={darkText}>{description2}</Subtitle>

    //           <BtnWrap>
    //           <Button><a href={repositoryUrl2} target="_blank">{buttonLabel}</a></Button>

    //           </BtnWrap>

    //         </TextWrapper>
    //       </Column2>
    //     </InfoRow>
    //   </InfoWrapper>
    // </InfoContainer>

  )

};

export default Freelance;