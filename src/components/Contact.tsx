import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode'; // Substitute for DEV.to icon

interface ProfileInfo {
  icon: string;
  user_tag: string;
  link: string;
};

interface props {
  email: {
    primary: string;
    secondary: string;
  };
  phone: string;
  github: ProfileInfo;
  linkedin: ProfileInfo;
  devto: ProfileInfo;
  instagram: ProfileInfo;
};

const Contact: React.FC<props> = ({
  email,
  phone,
  github,
  linkedin,
  devto,
  instagram
}) => {
  const primaryMailText = (email?.primary?.split(':'))[1] || 'usiriko@clemson.edu';
  const secondaryMailText = (email?.secondary?.split(':')[1]) || 'utkal.s15@iiits.in';

  return (
    <Box display="flex" justifyContent="center" alignItems="center" padding={2}>

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
          href={github.link}
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
          href={linkedin.link}
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
          href={devto.link}
          target="_blank"
        >
          DEV.to
        </Button>
      </Stack>

      <Box marginLeft={4}>
        <Typography variant="h6" component="div">
          Contact Details -
        </Typography>
        <Typography variant="body1" component="div" marginTop={2}>
          e-mail: <a href={email.primary}>{primaryMailText}</a>,
          <a href={email.secondary}>{secondaryMailText}</a>
        </Typography>
        <Typography variant="body1" component="div" marginTop={1}>
          phone: {phone}
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;