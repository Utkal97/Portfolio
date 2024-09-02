import * as React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';

interface props {
  experience: {
    role: string;
    organization: string;
    location: string;
    duration: string;
    technologies: string;
    description: string[];
  }[]
}

const Experience: React.FC<props> = ({ experience }) => {

  return (
    <Box sx={{ padding: 3 }}>
      <Timeline position="alternate">
        {experience.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index < experience.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6" component="h3">
                  {item.role}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {item.organization}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.duration}
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                  {item.technologies}
                </Typography>
                <ul>
                  {item.description.map((detail, i) => (
                    <Typography variant="body2" component="li" key={i}>
                      {detail}
                    </Typography>
                  ))}
                </ul>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}

export default Experience;
