import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
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
      <Stack flex={1} justifyContent="center" direction="column" width="100%">
        <Stack direction="column" maxWidth="450px" spacing="20px" zIndex={2}>
          <Typography alignSelf="center" color="white.main" variant="h2">
            about me
          </Typography>

          <Typography className="Roboto" color="white.main">
            {lorem}
          </Typography>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default About;
