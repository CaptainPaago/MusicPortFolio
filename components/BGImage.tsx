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

  return (
    <>
      {router.pathname === '/' && (
        <Box
          position="fixed"
          left={0}
          id="index-gradient"
          width="50%"
          height="100%"
          zIndex={1}
        />
      )}

      <Box
        zIndex={0}
        style={{
          width: '100%',
          height: '100%',
          filter: 'blur(0.8px)',
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
