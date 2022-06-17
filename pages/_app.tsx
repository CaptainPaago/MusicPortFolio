import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';

import NavbarDesktop from '../components/navbar/NavbarDesktop';
import NavbarMobile from '../components/navbar/NavbarMobile';
import Theme from '../app/Theme';
import useAppDimensions from '../hooks/useAppDimensions';

function MyApp({ Component, pageProps }: AppProps) {
  const { isMobile } = useAppDimensions();

  return (
    <ThemeProvider theme={Theme}>
      {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default MyApp;
