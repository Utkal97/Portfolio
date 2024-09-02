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

interface ProjectCardProps {
  title: string;
  techStack: string;
  descriptions: string[];
  repoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, techStack, descriptions, repoLink }) => {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#e0e0e0', borderRadius: '16px' }}>
      <Box sx={{ backgroundColor: '#000', color: '#fff', padding: 1, borderRadius: '16px 16px 0 0' }}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle2" component="div">
          Tech stack: {techStack}
        </Typography>
      </Box>
      <CardContent>
        {descriptions.map((desc, index) => (
          <Typography key={index} variant="body2" color="textSecondary">
            {desc}
          </Typography>
        ))}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href={repoLink}
          target="_blank"
          variant="contained"
          sx={{ backgroundColor: '#a56eff', color: '#fff' }}
        >
          Link to Git Repo
        </Button>
      </CardActions>
    </Card>
  );
};


const projectData = [
  {
    title: 'Project Name 1',
    techStack: 'JavaScript, React',
    descriptions: ['Description 1', 'Description 2'],
    repoLink: 'https://github.com/your-repo-1',
  },
  {
    title: 'Project Name 2',
    techStack: 'TypeScript, Node.js',
    descriptions: ['Description 1', 'Description 2'],
    repoLink: 'https://github.com/your-repo-2',
  },
];

export default function Projects() {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid2 container spacing={4}>
        {projectData.map((project, index) => (
          <Grid2 key={index}>
            <ProjectCard
              title={project.title}
              techStack={project.techStack}
              descriptions={project.descriptions}
              repoLink={project.repoLink}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
