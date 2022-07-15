import Image from 'next/image';
import useAppDimensions from '../hooks/useAppDimensions';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

import indexBGDesktop from '../public/images/main-page-background.png';
import indexBGMobile from '../public/images/main-page-background-mobile.png';
// import aboutDesktop from '../public/images/about-me-photo-desktop.png';
// import contactDesktop from '../public/images/contact-background-desktop.png';

export default function BGImage() {
  const router = useRouter();
  const { isMobile } = useAppDimensions();

  const landingBG = isMobile ? indexBGMobile : indexBGDesktop;

  const IndexGradient = () => {
    const height = isMobile ? '50%' : '100%';
    const width = isMobile ? '100%' : '50%';

    if (isMobile)
      return (
        <Box
          height={height}
          id="index-gradient-mobile"
          left={0}
          bottom={0}
          position="fixed"
          width={width}
          zIndex={1}
        />
      );
    return (
      <Box
        height={height}
        id="index-gradient-desktop"
        left={0}
        position="fixed"
        width={width}
        zIndex={1}
      />
    );
  };

  const BGImageContainer = () => {
    switch (router.pathname) {
      case '/':
        return (
          <Box
            zIndex={0}
            style={{
              width: '100%',
              height: '100%',
              filter: isMobile ? 'blur(0.7px)' : 'blur(1.3px)',
            }}
          >
            <Image
              src={landingBG.src}
              alt="main-page-background"
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </Box>
        );

      // case '/about':
      //   if (!isMobile)
      //     return (
      //       <Stack
      //         height="100%"
      //         id="about-me-bg"
      //         justifyContent="center"
      //         width="100%"
      //       >
      //         <Box
      //           zIndex={0}
      //           maxHeight="900px"
      //           style={{
      //             filter: 'blur(1px)',
      //             height: '100%',
      //             position: 'fixed',
      //             right: 0,
      //             width: '70%',
      //           }}
      //         >
      //           <Image
      //             src={aboutDesktop.src}
      //             alt="about-page-background"
      //             layout="fill"
      //             objectFit="contain"
      //             loading="lazy"
      //           />
      //         </Box>
      //       </Stack>
      //     );

      // case '/contact':
      //   if (!isMobile)
      //     return (
      //       <Stack
      //         height="100%"
      //         width="100%"
      //         id="about-me-bg"
      //         justifyContent="center"
      //       >
      //         <Box
      //           zIndex={0}
      //           // maxHeight="900px"
      //           style={{
      //             filter: 'blur(1.8px)',
      //             height: '100%',
      //             position: 'fixed',
      //             left: 0,
      //             width: '70%',
      //           }}
      //         >
      //           <Image
      //             src={contactDesktop.src}
      //             alt="about-page-background"
      //             layout="fill"
      //             objectFit="contain"
      //             loading="lazy"
      //           />
      //         </Box>
      //       </Stack>
      //     );
      default:
        return null;
    }
  };

  return (
    <>
      {router.pathname === '/' && <IndexGradient />}

      <BGImageContainer />
    </>
  );
}
