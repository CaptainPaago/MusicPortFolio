import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';

import Footer from '../components/Footer';
import NavbarDesktop from '../components/navbar/NavbarDesktop';
import NavbarMobile from '../components/navbar/NavbarMobile';
import Theme from '../app/Theme';
import useAppDimensions from '../hooks/useAppDimensions';
import bg from '../public/images/main-page-background.png';

function MyApp({ Component, pageProps }: AppProps) {
  const { isMobile } = useAppDimensions();

  return (
    <ThemeProvider theme={Theme}>
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          width: '100%',
          height: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
