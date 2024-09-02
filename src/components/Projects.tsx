import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Grid2,
} from '@mui/material';

interface ProjectProps {
  name: string;
  tech_stack: string;
  description: string[];
  src_code: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ name, tech_stack, description, src_code }) => {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#e0e0e0', borderRadius: '16px' }}>
      <Box sx={{ backgroundColor: '#000', color: '#fff', padding: 1, borderRadius: '16px 16px 0 0' }}>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="subtitle2" component="div">
          Tech stack: {tech_stack}
        </Typography>
      </Box>
      <CardContent>
        {description.map((desc, index) => (
          <Typography key={index} variant="body2" color="textSecondary">
            {desc}
          </Typography>
        ))}
      </CardContent>
      {
        src_code?.length &&
        (<CardActions>
          <Button
            size="small"
            href={src_code}
            target="_blank"
            variant="contained"
            sx={{ backgroundColor: '#a56eff', color: '#fff' }}
          >
            Link to Git Repo
          </Button>
        </CardActions>)
      }

    </Card>
  );
};


interface props {
  projects: {
    topic: string;
    list: ProjectProps[];
  }[]
}

const Projects: React.FC<props> = ({ projects }) => {

  const projectData: ProjectProps[] = projects.reduce((accumulator: ProjectProps[], currentProjectGroup) => {
    for (const project of currentProjectGroup.list) {
      accumulator.push(project)
    }
    return accumulator;
  }, [])
  return (
    <Box sx={{ padding: 4 }}>
      <Grid2 container spacing={4}>
        {projectData.map((project, index) => (
          <Grid2 key={index}>
            <ProjectCard
              name={project.name}
              tech_stack={project.tech_stack}
              description={project.description}
              src_code={project.src_code}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Projects;