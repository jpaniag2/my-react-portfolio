import React from 'react'
import { Card , Button} from 'react-bootstrap'


const ProjectCard = ({ primary, dark,
    dark2, lightBg, id, imgStart,
    introduction, projectName, topLine, lightText,
    headline, darkText, description,
    img, alt, buttonLabel, repositoryUrl, projectName2, img2,
    description2, buttonLabel2, repositoryUrl2
  }) => {
  return (
    <Card 
    bg="transparent"
    key="dark"
    text="light"
    >
    <Card.Img variant="top" src={img} style={{objectFit: 'cover'}}/>
    <Card.Body >
      <Card.Title style={{fontSize: '1.5rem', fontWeight: '700', textTransform: 'uppercase'}}>{projectName}</Card.Title>
      <Card.Text style={{fontSize: '1.1rem', fontWeight: '700'}}>{description}</Card.Text>
    </Card.Body>
    <Button variant="secondary" size="lg" href={repositoryUrl}>
    {buttonLabel}
    </Button>
  </Card>
  )
}

export default ProjectCard