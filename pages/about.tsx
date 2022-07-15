import React from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import { Box, Stack, Typography } from '@mui/material';

import aboutMobile from '../public/images/about-me-photo-mobile.png';
import Layout from '../components/Layout';
import { body as about } from '../localization/locales/pt-PT/about.json';
// import Theme from '../app/Theme';
import useAppDimensions from '../hooks/useAppDimensions';
import aboutDesktop from '../public/images/about-me-photo-desktop.png';

const About: NextPage = () => {
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
              filter: 'blur(0.4px)',
              height: '297px',
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

          <Stack alignItems="center" id="about-me-title-mobile" width="100%">
            <Typography
              alignSelf="center"
              color="white.main"
              variant="h2"
              zIndex={2}
            >
              about me
            </Typography>
          </Stack>

          {about.map((paragraph, index) => (
            <Typography
              key={index}
              className="Roboto"
              color="white.main"
              zIndex={2}
            >
              {paragraph}
            </Typography>
          ))}
        </Stack>
      </Layout>
    );
  }

  return (
    <Layout pageTitle="About me" centered>
      <Stack
        height="100%"
        id="about-me-bg"
        justifyContent="center"
        position="fixed"
        top="1"
        width="100%"
      >
        <Box
          zIndex={0}
          maxHeight="900px"
          style={{
            filter: 'blur(1px)',
            height: '100%',
            position: 'fixed',
            right: 0,
            width: '70%',
          }}
        >
          <Image
            src={aboutDesktop.src}
            alt="about-page-background"
            layout="fill"
            objectFit="contain"
            loading="lazy"
          />
        </Box>
      </Stack>

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
          about me
        </Typography>

        {about.map((paragraph, index) => (
          <Typography
            key={index}
            className="Roboto"
            color="white.main"
            zIndex={2}
          >
            {paragraph}
          </Typography>
        ))}

        <Box
          height="100%"
          id="about-gradient-desktop"
          maxWidth="900px"
          minWidth="300px"
          position="fixed"
          width="60%"
          zIndex={1}
        />
      </Stack>
    </Layout>
  );
};

export default About;
