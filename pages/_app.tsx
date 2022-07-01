import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { Stack } from '@mui/material';

import BGImage from '../components/BGImage';
import Footer from '../components/Footer';
import NavbarDesktop from '../components/navbar/NavbarDesktop';
import NavbarMobile from '../components/navbar/NavbarMobile';
import Theme from '../app/Theme';
import useAppDimensions from '../hooks/useAppDimensions';

function MyApp({ Component, pageProps }: AppProps) {
  const { isMobile } = useAppDimensions();

  return (
    <ThemeProvider theme={Theme}>
      <Stack
        sx={{
          alignItems: 'center',
          height: '100%',
          justifyContent: 'center',
          position: 'fixed',
          width: '100%',
          zIndex: '2',
        }}
      >
        {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
        <Component {...pageProps} />
        <Footer />
      </Stack>

      <BGImage />
    </ThemeProvider>
  );
}

export default MyApp;
