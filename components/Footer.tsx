import React from 'react';
import Link from 'next/link';
import { Stack, Typography } from '@mui/material';

import useAppDimensions from '../hooks/useAppDimensions';

const Footer = () => {
  const { isMobile } = useAppDimensions();

  //   const fontSize = isMobile ? 'caption' : 'body1';

  return (
    <Stack alignItems="center" direction="column" paddingY="15px" zIndex={5}>
      <Stack
        className="user-link"
        direction="row"
        justifyContent="space-between"
        spacing={1}
        height="100%"
      >
        <Link href="/my-work">
          <a>
            <Typography color="white.main">contact me</Typography>
          </a>
        </Link>
        <Typography color="white.main">|</Typography>
        <Link href="/my-work">
          <a>
            <Typography color="white.main">links</Typography>
          </a>
        </Link>
        <Typography color="white.main">|</Typography>
        <Link href="/my-work">
          <a>
            <Typography color="white.main">português</Typography>
          </a>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Footer;
