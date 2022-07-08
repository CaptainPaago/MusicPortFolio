import React from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import { Box, Stack, Typography } from '@mui/material';

import Layout from '../components/Layout';
import Theme from '../app/Theme';
import useAppDimensions from '../hooks/useAppDimensions';
import aboutMobile from '../public/images/contact-background-mobile.png';

const Contact: NextPage = () => {
  const { isMobile } = useAppDimensions();
  // const colors = Theme.palette;

  if (isMobile) {
    return (
      <Layout pageTitle="About me" centered>
        <Stack
          flex={1}
          id="about-container"
          justifyContent="flex-start"
          height="100%"
          direction="column"
          spacing="10px"
          width="100%"
          display="block"
        >
          <Box
            zIndex={0}
            style={{
              filter: 'blur(0.7px)',
              height: '345px',
              width: '100vw',
            }}
            marginX="-15px"
          >
            <Image
              src={aboutMobile.src}
              alt="about-page-background"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </Box>

          <Stack alignItems="center" id="contact-me-title-mobile" width="100%">
            <Typography
              alignSelf="center"
              color="white.main"
              variant="h2"
              zIndex={2}
            >
              contact me
            </Typography>
          </Stack>
        </Stack>
      </Layout>
    );
  }

  return (
    <Layout pageTitle="About me" centered>
      <Stack alignItems="flex-end" height="100%" width="100%">
        <Stack
          flex={1}
          id="about-container"
          justifyContent="center"
          height="100%"
          direction="column"
          maxWidth="500px"
          spacing="20px"
          width="100%"
        >
          <Typography
            alignSelf="center"
            color="white.main"
            variant="h2"
            zIndex={2}
          >
            contact me
          </Typography>

          <Box
            height="100%"
            id="contact-gradient-desktop"
            maxWidth="900px"
            minWidth="300px"
            position="fixed"
            width="60%"
            zIndex={1}
          />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Contact;
