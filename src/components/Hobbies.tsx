import React from 'react';
import { Box, Typography } from '@mui/material';

interface props {
  hobbies: {
    title: string;
    description: string;
    image_path: string;
  }[]
}

const DescriptionBox: React.FC<props> = ({ hobbies }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" padding={4} height="100vh">
      {hobbies.map((hobby, index) => {
        return (
          <Box
            width="600px"
            bgcolor="#E0E0E0"
            padding={3}
            borderRadius="8px"
            boxShadow={3}
            key={index}
          >
            <Typography variant="h6" component="div" fontWeight="bold">
              {hobby.title}
            </Typography>
            <Typography variant="body1" component="div" marginTop={2}>
              {hobby.description}
            </Typography>
          </Box>
        )
      })}
    </Box>
  );
};

export default DescriptionBox;
