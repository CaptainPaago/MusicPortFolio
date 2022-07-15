import React from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import contactDesktop from '../public/images/contact-background-desktop.png';
import Layout from '../components/Layout';
import Theme from '../app/Theme';
import useAppDimensions from '../hooks/useAppDimensions';
import aboutMobile from '../public/images/contact-background-mobile.png';
import { Email, Phone } from '../components/Icons';

const Contact: NextPage = () => {
  const { isMobile } = useAppDimensions();
  const colors = Theme.palette;

  const ContactCard = () => {
    const inputProps = {
      sx: {
        // @ts-ignore: Unreachable code error
        bgcolor: colors.black[600],
        // @ts-ignore: Unreachable code error
        color: colors.white[200],
        fontFamily: 'Roboto',
      },
    };

    return (
      <Stack direction="column" spacing={isMobile ? '10px' : '20px'}>
        <Stack
          bgcolor="black.700"
          borderRadius="5px"
          direction="column"
          padding={isMobile ? '15px' : '20px'}
          spacing={isMobile ? '10px' : '20px'}
          zIndex={5}
        >
          <Stack direction="row" spacing={isMobile ? '10px' : '15px'}>
            <Email color={colors.white.main} size={isMobile ? 25 : 35} />
            <Typography color="white.main" variant={isMobile ? 'h5' : 'h4'}>
              violino.ines95@gmail.com
            </Typography>
          </Stack>

          <Stack direction="row" spacing={isMobile ? '10px' : '15px'}>
            <Phone color={colors.white.main} size={isMobile ? 25 : 35} />
            <Typography color="white.main" variant={isMobile ? 'h5' : 'h4'}>
              +46 71 234 56 84
            </Typography>
          </Stack>
        </Stack>

        <Stack
          bgcolor="black.700"
          borderRadius="5px"
          direction="column"
          padding={isMobile ? '15px' : '20px'}
          spacing={isMobile ? '10px' : '20px'}
          zIndex={5}
        >
          <Typography color="white.200" variant={isMobile ? 'h5' : 'h4'}>
            contact form
          </Typography>

          <TextField
            placeholder="subject"
            variant="outlined"
            InputProps={inputProps}
          />

          <Stack direction="row" spacing={isMobile ? '10px' : '15px'}>
            <TextField
              placeholder="name"
              variant="outlined"
              InputProps={inputProps}
              sx={{
                width: '100%',
              }}
            />
            <TextField
              placeholder="email"
              variant="outlined"
              InputProps={inputProps}
              sx={{
                width: '100%',
              }}
            />
          </Stack>

          <TextField
            placeholder="message"
            variant="outlined"
            multiline
            rows={4}
            InputProps={inputProps}
          />

          <Button variant="contained" color="primary">
            <Typography
              variant={isMobile ? 'h5' : 'h4'}
              color="black.700"
              className="Roboto"
              // fontWeight="bold"
            >
              send email
            </Typography>
          </Button>
        </Stack>
      </Stack>
    );
  };

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

          <ContactCard />
        </Stack>
      </Layout>
    );
  }

  return (
    <Layout pageTitle="About me" centered>
      <Stack
        height="100%"
        id="contact-me-bg"
        justifyContent="center"
        position="fixed"
        top="1"
        width="100%"
      >
        <Box
          zIndex={0}
          maxHeight="900px"
          style={{
            filter: 'blur(1.8px)',
            height: '100%',
            position: 'fixed',
            left: 0,
            width: '70%',
          }}
        >
          <Image
            src={contactDesktop.src}
            alt="about-page-background"
            layout="fill"
            objectFit="contain"
            loading="lazy"
          />
        </Box>
      </Stack>

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
          <ContactCard />
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
