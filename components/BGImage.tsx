import Image from 'next/image';
import { Box } from '@mui/system';

import { useRouter } from 'next/router';

import bg from '../public/images/main-page-background.png';

export default function BGImage() {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <>
      <Box
        position="fixed"
        left={0}
        id="index-gradient"
        width="50%"
        height="100%"
        zIndex={1}
      />
      <Box
        zIndex={0}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Image
          src={bg.src}
          alt="main-page-background"
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </Box>
    </>
  );
}
