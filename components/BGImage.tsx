import Image from 'next/image';
import useAppDimensions from '../hooks/useAppDimensions';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';

import indexBGDesktop from '../public/images/main-page-background.png';
import indexBGMobile from '../public/images/main-page-background-mobile.png';

export default function BGImage() {
  const router = useRouter();
  const { isMobile } = useAppDimensions();

  console.log(router.pathname);

  const BGImage = isMobile ? indexBGMobile : indexBGDesktop;

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

  return (
    <>
      {router.pathname === '/' && <IndexGradient />}

      <Box
        zIndex={0}
        style={{
          width: '100%',
          height: '100%',
          filter: isMobile ? 'blur(0.7px)' : 'blur(1px)',
        }}
      >
        <Image
          src={BGImage.src}
          alt="main-page-background"
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </Box>
    </>
  );
}
