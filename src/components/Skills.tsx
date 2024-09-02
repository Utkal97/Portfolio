import * as React from 'react';
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';

export default function Skills() {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Typography variant="h6" gutterBottom>
        Skills -
      </Typography>
      <Grid2 container spacing={1}>
        {['Javascript / Typescript', 'Python', 'C++', 'Node.js', 'Django', 'React', 'MongoDB', 'AWS'].map((skill) => (
          <Grid2 key={skill}>
            <Chip label={skill} sx={{ padding: '10px 15px', fontSize: '16px', backgroundColor: '#e0e0e0' }} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  )
}