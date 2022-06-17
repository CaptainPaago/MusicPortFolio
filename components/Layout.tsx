import React from 'react';
import Head from 'next/head';
import { Stack } from '@mui/material';

import useAppDimensions from '../hooks/useAppDimensions';

interface Props {
  pageTitle?: string;
  children?: React.ReactNode;
  centered?: boolean;
}

export default function Layout({ pageTitle, children, centered }: Props) {
  const { isMobile, maxWidthDesktop, paddingXDesktop, paddingXMobile } =
    useAppDimensions();

  return (
    <Stack
      className={
        isMobile ? 'layout-container-mobile' : 'layout-container-desktop'
      }
      direction="column"
      display="flex"
      flexGrow={1}
      justifyContent={centered ? 'center' : 'flex-start'}
      maxWidth={isMobile ? '100vw' : maxWidthDesktop}
      paddingX={isMobile ? paddingXMobile : paddingXDesktop}
      width="100%"
    >
      <Head>
        {pageTitle && <title>{pageTitle}</title>}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="true"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      {children && children}
    </Stack>
  );
}
