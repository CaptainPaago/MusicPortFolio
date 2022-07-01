import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Box, Button, Stack, Typography } from '@mui/material';

import Layout from '../components/Layout';
import Theme from '../app/Theme';
import useAppDimensions from '../hooks/useAppDimensions';

const Home: NextPage = () => {
  const { isMobile } = useAppDimensions();
  const colors = Theme.palette;

  return (
    <Layout pageTitle="Inês Cruz" centered>
      <Stack flex={1} justifyContent="flex-end" direction="column">
        <Stack
          direction="column"
          spacing="20px"
          width={isMobile ? '100%' : '475px'}
          marginBottom={isMobile ? 0 : '40px'}
        >
          <Typography color="white.main" variant={isMobile ? 'h3' : 'h2'}>
            violin player
          </Typography>

          <Stack direction="row" spacing="5px">
            {['my work', 'about', 'contact'].map((title, index) => (
              <Stack key={index} direction="row" spacing="5px">
                <Link href={`/${title.replace(' ', '-')}`}>
                  <a>
                    <Typography
                      color="white.main"
                      variant={isMobile ? 'h5' : 'h4'}
                      sx={{ textDecoration: 'underline' }}
                    >
                      {title}
                    </Typography>
                  </a>
                </Link>
                {index !== 2 && (
                  <Typography
                    color="white.main"
                    variant={isMobile ? 'h5' : 'h4'}
                  >
                    |
                  </Typography>
                )}
              </Stack>
            ))}
          </Stack>

          <Box bgcolor="white.main" width="100%" height="1px" />

          <Typography color="white.main" variant="body1" className="Roboto">
            A amet nec sodales nibh enim. Vulputate enim magna amet sed porta
            tortor egestas neque volutpat.
          </Typography>

          <Button
            color="primary"
            variant="contained"
            sx={{
              width: isMobile ? '60%' : '100%',
              alignSelf: 'center',
            }}
          >
            <Typography
              variant={isMobile ? 'h6' : 'h5'}
              className="Roboto"
              marginY={isMobile ? 0 : '5px'}
            >
              view my cv
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Home;
