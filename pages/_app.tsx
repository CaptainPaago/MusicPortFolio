import * as React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { Stack } from '@mui/material';
import { useRouter } from 'next/router';

import '../localization/i18n';
import BGImage from '../components/BGImage';
import FooterDesktop from '../components/footer/FooterDesktop';
import FooterMobile from '../components/footer/FooterMobile';
import NavbarDesktop from '../components/navbar/NavbarDesktop';
import NavbarMobile from '../components/navbar/NavbarMobile';
import Theme from '../app/Theme';
import useAppDimensions from '../hooks/useAppDimensions';

function MyApp({ Component, pageProps }: AppProps) {
  const { isMobile } = useAppDimensions();
  const router = useRouter();

  const [mounted, setMounted] = React.useState(false);
  const [bgColor, setBgColor] = React.useState('');

  React.useEffect(() => setMounted(true), []);

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

  //fix for "Unhandled Runtime Error Error: Hydration failed"
  if (!mounted) return null;

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
          {isMobile ? <FooterMobile /> : <FooterDesktop />}
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
