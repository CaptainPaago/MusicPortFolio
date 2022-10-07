import React from 'react';
import type { NextPage } from 'next';
import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import Layout from '../components/Layout';
// import Theme from '../app/Theme';
// import useAppDimensions from '../hooks/useAppDimensions';

const MyWork: NextPage = () => {
  // const { isMobile } = useAppDimensions();
  // const colors = Theme.palette;

  const { t } = useTranslation('work');

  const work: string[] = t('body', { returnObjects: true });

  return (
    <Layout pageTitle={t('page-title')} centered>
      <Stack
        flex={1}
        id="about-container"
        justifyContent="flex-start"
        height="100%"
        direction="column"
        spacing="10px"
        width="100%"
        // display="block"
      >
        <Typography
          alignSelf="center"
          color="white.main"
          variant="h2"
          zIndex={2}
        >
          {t('title')}
        </Typography>

        {work.map((paragraph, index) => (
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
};

export default MyWork;
