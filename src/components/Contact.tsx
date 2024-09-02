import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode'; // Substitute for DEV.to icon

export default function Contact() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" padding={2}>
      {/* Left side with social media buttons */}
      <Stack spacing={2}>
        <Button
          variant="contained"
          startIcon={<GitHubIcon />}
          sx={{
            backgroundColor: '#a56eff',
            borderRadius: '16px',
            width: '200px',
            justifyContent: 'space-between',
            padding: '8px 16px',
            color: '#fff'
          }}
          href="https://github.com/your-profile"
          target="_blank"
        >
          GitHub
        </Button>

        <Button
          variant="contained"
          startIcon={<LinkedInIcon />}
          sx={{
            backgroundColor: '#4d79a8',
            borderRadius: '16px',
            width: '200px',
            justifyContent: 'space-between',
            padding: '8px 16px',
            color: '#fff'
          }}
          href="https://linkedin.com/in/your-profile"
          target="_blank"
        >
          LinkedIn
        </Button>

        <Button
          variant="contained"
          startIcon={<DeveloperModeIcon />}
          sx={{
            backgroundColor: '#333',
            borderRadius: '16px',
            width: '200px',
            justifyContent: 'space-between',
            padding: '8px 16px',
            color: '#fff'
          }}
          href="https://dev.to/your-profile"
          target="_blank"
        >
          DEV.to
        </Button>
      </Stack>

      {/* Right side with contact details */}
      <Box marginLeft={4}>
        <Typography variant="h6" component="div">
          Contact Details -
        </Typography>
        <Typography variant="body1" component="div" marginTop={2}>
          e-mail: <a href="mailto:usiriko@clemson.edu">usiriko@clemson.edu</a> /
          <a href="mailto:utkal.s15@iiits.in">utkal.s15@iiits.in</a>
        </Typography>
        <Typography variant="body1" component="div" marginTop={1}>
          phone: +1 (864) 765-134
        </Typography>
      </Box>
    </Box>
  );
};
