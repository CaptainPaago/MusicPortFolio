import React from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import {
  Alert,
  Box,
  IconButton,
  Snackbar,
  SnackbarOrigin,
  Stack,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import ContactCard from '../components/ContactCard';
import contactDesktop from '../public/images/contact-background-desktop.png';
import Layout from '../components/Layout';
import useAppDimensions from '../hooks/useAppDimensions';
import aboutMobile from '../public/images/contact-background-mobile.png';
import { Close } from '../components/Icons';

const Contact: NextPage = () => {
  const { isMobile } = useAppDimensions();
  const { t } = useTranslation('contact');

  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const alertAnchor: SnackbarOrigin = {
    vertical: isMobile ? 'bottom' : 'top',
    horizontal: 'center',
  };

  if (isMobile) {
    return (
      <Layout pageTitle={t('page-title')} centered>
        <Snackbar
          anchorOrigin={alertAnchor}
          autoHideDuration={3000}
          open={open}
          onClose={handleClose}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <Close size={20} color="white" />
            </IconButton>
          }
        >
          <Alert
            onClose={handleClose}
            severity={errorMessage ? 'error' : 'success'}
            sx={{ width: '100%' }}
          >
            {message}
          </Alert>
        </Snackbar>

        <Stack
          flex={1}
          id="about-container"
          justifyContent="flex-start"
          height="100%"
          direction="column"
          spacing="10px"
          width="100%"
        >
          <Box
            zIndex={0}
            style={{
              filter: 'blur(0.7px)',
              height: '345px',
              width: '100vw',
            }}
            marginX="-15px"
            position="relative"
            top={0}
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
              {t('title')}
            </Typography>
          </Stack>

          <ContactCard
            setMessage={setMessage}
            setOpen={setOpen}
            setErrorMessage={setErrorMessage}
          />
        </Stack>
      </Layout>
    );
  }

  return (
    <Layout pageTitle={t('page-title')} centered>
      <Snackbar
        anchorOrigin={alertAnchor}
        autoHideDuration={3000}
        open={open}
        onClose={handleClose}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <Close size={20} color="white" />
          </IconButton>
        }
      >
        <Alert
          onClose={handleClose}
          severity={errorMessage ? 'error' : 'success'}
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>

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
            {t('title')}
          </Typography>
          <ContactCard
            setMessage={setMessage}
            setOpen={setOpen}
            setErrorMessage={setErrorMessage}
          />
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
