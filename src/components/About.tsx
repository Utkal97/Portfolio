import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Skills from './Skills';

interface props {
  name: string;
  description: string;
}

const About: React.FC<props> = ({ name, description }) => {

  return (
    <>
      <Container sx={{ flexGrow: 1, marginTop: 10 }}>
        <Typography variant="body1" gutterBottom>
          Hi, I’m
        </Typography>
        <Typography variant="h2" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
        <Typography variant="body1">
          Please go through my projects and Resume
        </Typography>
      </Container>
      <Skills />
    </>
  )
}

export default About;