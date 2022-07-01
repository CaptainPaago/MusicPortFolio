import React from 'react';
import type { NextPage } from 'next';
import { Stack, Typography } from '@mui/material';

import Layout from '../components/Layout';
import Theme from '../app/Theme';
import useAppDimensions from '../hooks/useAppDimensions';

const Contact: NextPage = () => {
  // const { isMobile } = useAppDimensions();
  // const colors = Theme.palette;

  return (
    <Layout pageTitle="Contact me" centered>
      <Typography>my work</Typography>
    </Layout>
  );
};

export default Contact;
