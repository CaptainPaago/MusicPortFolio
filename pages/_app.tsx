import * as React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { Stack } from '@mui/material';
import { useRouter } from 'next/router';

import BGImage from '../components/BGImage';
import Footer from '../components/Footer';
import NavbarDesktop from '../components/navbar/NavbarDesktop';
import NavbarMobile from '../components/navbar/NavbarMobile';
import Theme from '../app/Theme';
import useAppDimensions from '../hooks/useAppDimensions';

function MyApp({ Component, pageProps }: AppProps) {
  const { isMobile } = useAppDimensions();
  const router = useRouter();

  const [bgColor, setBgColor] = React.useState('');
  const { black } = Theme.palette;

  React.useEffect(() => {
    switch (router.pathname) {
      case '/':
        setBgColor(black.main);
        break;
      default:
        // @ts-ignore: Unreachable code error
        setBgColor(black[800]);
        break;
    }
  }, [router, black]);

  return (
    <>
      <style jsx global>
        {`
          body {
            background: ${bgColor};
          }
        `}
      </style>
      <ThemeProvider theme={Theme}>
        <Stack
          sx={{
            alignItems: 'center',
            height: '100%',
            justifyContent: 'center',
            // position: 'fixed',
            width: '100%',
            zIndex: '2',
          }}
        >
          <Stack
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              position: 'sticky',
              width: '100%',
              top: 0,
              zIndex: '1000',
            }}
          >
            {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
          </Stack>
          <Component {...pageProps} />
          <Footer />
        </Stack>

        <Stack
          sx={{
            alignItems: 'center',
            height: '100%',
            position: 'absolute',
            width: '100%',
          }}
        >
          <BGImage />
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
