import React from 'react';
import type { NextPage } from 'next';
import { Box, Stack, Typography } from '@mui/material';

import Layout from '../components/Layout';
import Theme from '../app/Theme';
import useAppDimensions from '../hooks/useAppDimensions';

const About: NextPage = () => {
  const { isMobile } = useAppDimensions();
  const colors = Theme.palette;

  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nunc egestas nisi, euismod aliquam nisl nunc eget consectetur sagittis. Donec euismod, nisl eget consectetur sagittis, nisl nunc egestas nisi, euismod aliquam nisl nunc eget consectetur sagittis. Donec euismod, nisl eget consectetur sagittis, nisl nunc egestas nisi,';

  return (
    <Layout pageTitle="About me" centered>
      <Stack
        flex={1}
        id="about-container"
        justifyContent="center"
        height="100%"
        direction="column"
        maxWidth="450px"
        spacing="20px"
        width="100%"
      >
        <Typography
          alignSelf="center"
          color="white.main"
          variant="h2"
          zIndex={2}
        >
          about me
        </Typography>

        <Typography className="Roboto" color="white.main" zIndex={2}>
          {lorem}
        </Typography>

        <Box
          id="about-gradient-desktop"
          height="100%"
          maxWidth="900px"
          width="60%"
          position="fixed"
          zIndex={1}
        />
      </Stack>
    </Layout>
  );
};

export default About;
