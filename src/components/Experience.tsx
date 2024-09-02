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

export default function Experience() {
  const experiences = [
    {
      role: 'Full-stack Developer Co-op',
      company: 'SS&C Technologies, Massachusetts, United States',
      duration: 'June 2024 - Dec 2024',
      technologies: 'Typescript, React, Node.js, Istio, Docker, Kubernetes, Helm',
      details: [
        'Decoupled a monolith application into micro-services. Containerized and deployed new micro-services with Docker, Kubernetes, and Helm.',
        'Automated OpenAPI Specification (OAS 3.0) generation for Resourceful REST APIs.',
        'Implemented Istio-based Service Mesh for internal communication of micro-services.',
        'Developed a new interface combining micro-frontends of React with Module Federation.',
      ],
    },
    {
      role: 'Team Lead (Software)',
      company: 'Inncircles Arena, Hyderabad, India',
      duration: 'Jan 2022 - Aug 2023',
      technologies: 'Python, Typescript, React, Node.js, MongoDB, Redis, AWS',
      details: [
        'Enhanced and sustained an internal construction management application, developed using Node.js, Express.js, React, and MongoDB.',
        'Improved system performance by redesigning data models. Run-time of APIs with new models reduced down from 400ms to 80ms.',
        'Accelerated run-time calculation of business logic with Redis (caching) to fetch results instantaneously, bringing down response time to one tenth.',
        'Communicated functional requirements and expectations taken from clients to a team of 4 software developers.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'Inncircles Arena, Hyderabad, India',
      duration: 'Jan 2021 - Dec 2021',
      technologies: 'Javascript, React, Node.js, MongoDB, Data structures & Algorithms',
      details: [
        'Developed an auto-scheduling algorithm that works on 1.3M data points at the run-time. It can estimate completion time of a construction project (spanning 2-5 years) in advance.',
        'Implemented product’s core functionality of automating work-orders, material procurement, and data analysis involving more than 1 million data-points.',
        'Devised a file management service with AWS S3 to store visual work logs, replacing local file storage on server.',
      ],
    },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Timeline position="alternate">
        {experiences.map((experience, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6" component="h3">
                  {experience.role}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {experience.company}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {experience.duration}
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                  {experience.technologies}
                </Typography>
                <ul>
                  {experience.details.map((detail, i) => (
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
