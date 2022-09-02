import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import Layout from '../components/Layout';
import useAppDimensions from '../hooks/useAppDimensions';

const Home: NextPage = () => {
  const { isMobile } = useAppDimensions();
  const { t } = useTranslation('landing');

  type LinkProps = {
    title: string;
    link: string;
  };

  const links: LinkProps[] = t('links', { returnObjects: true });

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
            {t('title')}
          </Typography>

          <Stack direction="row" spacing="5px">
            {links.map(({ title, link }, index) => (
              <Stack key={index} direction="row" spacing="5px">
                <Link href={`/${link}`}>
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
            {t('blurb')}
          </Typography>

          <Link href="/docs/CV_Ines_Cruz_Violin.pdf">
            <a
              target="_blank"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
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
                  {t('cvButton')}
                </Typography>
              </Button>
            </a>
          </Link>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Home;
