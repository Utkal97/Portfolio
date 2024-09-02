import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Skills from './Skills';

export default function About() {
  return (
    <>
      <Container sx={{ flexGrow: 1, marginTop: 10 }}>
        <Typography variant="body1" gutterBottom>
          Hi, I’m
        </Typography>
        <Typography variant="h2" gutterBottom>
          Utkal Sirikonda
        </Typography>
        <Typography variant="body1" paragraph>
          I’m currently working as an Intern at SS&C Technologies, while pursuing a master’s degree in Computer
          Science at Clemson University with <strong>3 years</strong> of Full-stack development experience at Inncircles Arena.
          My professional experience lies in building applications in <strong>Javascript/Typescript</strong> and <strong>Python</strong>.
          I will be graduating in 2025 and I’m looking for an Internship/Co-op starting from Jan 2025, and Full time opportunities from June - Aug 2025.
        </Typography>
        <Typography variant="body1">
          Please go through my projects and Resume
        </Typography>
      </Container>
      <Skills />
    </>
  )
}