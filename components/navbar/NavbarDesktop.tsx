import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';

// import NavbarMenu from './NavbarMenu';
import Theme from '../../app/Theme';
import useAppDimensions from '../../hooks/useAppDimensions';
import {
  Instagram,
  RouteIndicator as Indicator,
  LinkedIn,
  Facebook,
} from '../Icons';
// import { LogoLarge } from '../Logos';
// import { Settings, MenuHamburger } from '../Icons';

export default function Navbar() {
  const { maxWidthDesktop, paddingXDesktop } = useAppDimensions();
  const router = useRouter();

  const colors = Theme.palette;

  return (
    <Box
      alignItems="center"
      className="navbar navbar-desktop"
      id="navbar-desktop-gradient"
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
            spacing="10px"
            height="100%"
            marginTop="4px"
          >
            {[
              { title: 'my work', link: '/my-work' },
              { title: 'about', link: '/about' },
              { title: 'contact', link: '/contact' },
            ].map(({ title, link }, index) => (
              <Stack key={index} direction="row" spacing="10px">
                <Stack direction="column" alignItems="center">
                  <Link href={link}>
                    <a>
                      <Typography color="white.main" variant="h4">
                        {title}
                      </Typography>
                    </a>
                  </Link>

                  {router.pathname === link && (
                    <Indicator color={colors.primary.main} size={60} />
                  )}
                </Stack>

                {index !== 2 && (
                  <Typography color="white.main" variant="h4">
                    |
                  </Typography>
                )}
              </Stack>
            ))}
          </Stack>
        )}

        <Stack
          className="user-link"
          direction="row"
          justifyContent="space-between"
          spacing={1}
        >
          {[
            {
              icon: <Instagram color={colors.white.main} size={35} />,
              link: 'https://www.instagram.com/ines.cruz.8/?hl=en',
            },
            {
              icon: <LinkedIn color={colors.white.main} size={35} />,
              link: 'https://www.linkedin.com/in/in%C3%AAs-cruz-03b9b1133/',
            },
            {
              icon: <Facebook color={colors.white.main} size={35} />,
              link: 'https://www.facebook.com/ines.cruz.77',
            },
          ].map(({ icon, link }, index) => (
            <Link href={link} key={index}>
              <a target="_blank">{icon}</a>
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
