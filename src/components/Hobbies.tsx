import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const DescriptionBox = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" padding={4} height="100vh">
      {/* Left Arrow */}
      <IconButton sx={{ color: 'lightgrey' }}>
        <ArrowBackIosIcon fontSize="large" />
      </IconButton>

      {/* Description Box */}
      <Box
        width="600px"
        bgcolor="#E0E0E0"
        padding={3}
        borderRadius="8px"
        boxShadow={3}
      >
        <Typography variant="h6" component="div" fontWeight="bold">
          Skydiving - USPA A License
        </Typography>
        <Typography variant="body1" component="div" marginTop={2}>
          Trying to get my A - License in Accelerated Free Fall Skydiving.
          I have done my First Solo Jump on Aug 24, 2024 from 3500ft above from an N2281G.
        </Typography>
      </Box>

      {/* Right Arrow */}
      <IconButton sx={{ color: 'lightgrey' }}>
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default DescriptionBox;
