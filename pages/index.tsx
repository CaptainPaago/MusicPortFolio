import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Box, Button, Stack, Typography } from '@mui/material';

import Layout from '../components/Layout';
import Theme from '../app/Theme';
import useAppDimensions from '../hooks/useAppDimensions';

const Home: NextPage = () => {
  // const { isMobile } = useAppDimensions();
  // const colors = Theme.palette;

  return (
    <Layout pageTitle="Odin" centered>
      <Stack flex={1} justifyContent="flex-end" direction="column">
        <Stack
          direction="column"
          spacing="20px"
          width="475px"
          marginBottom="40px"
        >
          <Typography color="white.main" variant="h2">
            violin player
          </Typography>

          <Stack direction="row" spacing="5px">
            <Link href="/my-work">
              <a>
                <Typography
                  color="white.main"
                  variant="h4"
                  sx={{ textDecoration: 'underline' }}
                >
                  my work
                </Typography>
              </a>
            </Link>
            <Typography color="white.main" variant="h4">
              |
            </Typography>
            <Link href="/my-work">
              <a>
                <Typography
                  color="white.main"
                  variant="h4"
                  sx={{ textDecoration: 'underline' }}
                >
                  bio
                </Typography>
              </a>
            </Link>
            <Typography color="white.main" variant="h4">
              |
            </Typography>
            <Link href="/my-work">
              <a>
                <Typography
                  color="white.main"
                  variant="h4"
                  sx={{ textDecoration: 'underline' }}
                >
                  contact me
                </Typography>
              </a>
            </Link>
          </Stack>

          <Box bgcolor="white.main" width="100%" height="1px" />

          <Typography
            color="white.main"
            variant="body1"
            fontFamily="Roboto, sans-serif"
          >
            A amet nec sodales nibh enim. Vulputate enim magna amet sed porta
            tortor egestas neque volutpat.
          </Typography>

          <Button
            color="primary"
            variant="contained"
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '1.2rem',
            }}
          >
            view my cv
          </Button>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Home;
