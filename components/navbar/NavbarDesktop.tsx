import React from 'react';
import { Box, IconButton, Popover, Stack, Typography } from '@mui/material';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import Link from 'next/link';
import NavbarMenu from './NavbarMenu';
import Theme from '../../app/Theme';
import useAppDimensions from '../../hooks/useAppDimensions';
// import { LogoLarge } from '../Logos';
// import { Settings, MenuHamburger } from '../Icons';

export default function Navbar() {
  const { isMobile, maxWidthDesktop, paddingXDesktop } = useAppDimensions();

  const colors = Theme.palette;

  const DesktopMenu = () => (
    <PopupState variant="popover" popupId="navbar-menu">
      {(popupState) => (
        <div>
          <IconButton {...bindTrigger(popupState)}>
            {isMobile ? (
              //   <MenuHamburger size={50} color={colors.primary.main} />
              <Typography>menu</Typography>
            ) : (
              //   <Settings size={50} color={colors.primary.main} />
              <Typography>close</Typography>
            )}
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: -45,
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <NavbarMenu />
          </Popover>
        </div>
      )}
    </PopupState>
  );

  return (
    <Box
      alignItems="center"
      bgcolor="#fff"
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
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        margin="auto"
      >
        <Link href="/">
          <a>
            {/* <LogoLarge width={138} height={86} /> */}
            <Typography variant="h2">Inês Cruz</Typography>
          </a>
        </Link>

        <Stack
          className="user-link"
          direction="row"
          alignItems="center"
          spacing={1}
        >
          {/* <Typography>Alexandre Moreira</Typography> */}
          <DesktopMenu />
        </Stack>
      </Box>
    </Box>
  );
}
