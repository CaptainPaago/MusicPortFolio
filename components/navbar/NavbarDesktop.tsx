import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import Link from 'next/link';
// import NavbarMenu from './NavbarMenu';
import Theme from '../../app/Theme';
import useAppDimensions from '../../hooks/useAppDimensions';
import { Instagram } from '../Icons';
// import { LogoLarge } from '../Logos';
// import { Settings, MenuHamburger } from '../Icons';

export default function Navbar() {
  const { maxWidthDesktop, paddingXDesktop } = useAppDimensions();
  const router = useRouter();

  console.log(router.pathname);

  const colors = Theme.palette;

  return (
    <Box
      alignItems="center"
      bgcolor="black.main"
      className="navbar navbar-desktop"
      justifyContent="center"
      left={0}
      maxHeight="115px"
      maxWidth={maxWidthDesktop}
      paddingX={paddingXDesktop}
      paddingY="12px"
      position="absolute"
      top={0}
      width="100%"
      zIndex={100}
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        margin="auto"
      >
        <Link href="/">
          <a>
            <Typography variant="h2" color="white.main">
              Inês Cruz
            </Typography>
          </a>
        </Link>

        {router.pathname !== '/' && (
          <Stack
            className="user-link"
            direction="row"
            justifyContent="space-between"
            spacing={1}
            height="100%"
          >
            <Link href="/my-work">
              <a>
                <Typography variant="h4" color="white.main">
                  my work
                </Typography>
              </a>
            </Link>
          </Stack>
        )}

        <Stack
          className="user-link"
          direction="row"
          justifyContent="space-between"
          spacing={1}
        >
          <Link href="https://www.instagram.com/ines.cruz.8/?hl=en">
            <a target="_blank">
              <Instagram color={colors.white.main} size={35} />
            </a>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
