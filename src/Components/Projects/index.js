import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from '../ProjectCard';
import { WagApp, GymMembership, CampusEats, CindysCatering } from '../ProjectCard/Data';
import { Introduction, TopLine } from './ProjectsStyle';
import styled from 'styled-components'

const TabStyles = styled.div`
  .nav-link{
    transition: all 0.5s ease-out;
      margin: 1rem 0;
      background-color: #fff;
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: 400;
      color: #000;
      &:hover{
        opacity: .8;
        background-color: #fff !important;
        color: #000;
        transition: all 0.3s ease-out;
      }
  }
`

const Projects = () => {

  const javaProjects = [WagApp, GymMembership]
  const csharpProjects = [CampusEats, CindysCatering]
  const databaseProjects = [CampusEats, WagApp]
  const webProjects = []
  const swiftProjects = []
  const kotlinProjects = []
  const rubyProjects = []

  return (
    <Container fluid style={{ backgroundColor: '#212429' }}>
      <Container fluid="xxl">

        <Introduction>Projects</Introduction>
        <TopLine>by language</TopLine>

        <TabStyles>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav fill variant="pills" className="flex-column">
                  <Nav.Item >
                    <Nav.Link eventKey="first" style={{ cursor: 'pointer' }}>Java</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" style={{ cursor: 'pointer' }}>C#</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" style={{ cursor: 'pointer' }}>SQL</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row xs={1} md={2} className="g-4">
                      {javaProjects.map((project) => (
                        <Col>
                          <ProjectCard {...project} />
                        </Col>
                      ))}
                    </Row>
                    <br></br>
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <Row xs={1} md={2} className="g-4">
                      {csharpProjects.map((project) => (
                        <Col>
                          <ProjectCard {...project} />
                        </Col>
                      ))}
                    </Row>
                    <br></br>
                  </Tab.Pane>

                  <Tab.Pane eventKey="third">
                    <Row xs={1} md={2} className="g-4">
                      {databaseProjects.map((project) => (
                        <Col>
                          <ProjectCard {...project} />
                        </Col>
                      ))}
                    </Row>
                    <br></br>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </TabStyles>
      </Container>

    </Container>

  )

};

export default Projects;