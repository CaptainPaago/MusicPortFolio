import React from 'react';
import { Box, Drawer, Stack, Typography } from '@mui/material';

import Link from 'next/link';
import NavbarMenu from './NavbarMenu';
import Theme from '../../app/Theme';
import useAppDimensions from '../../hooks/useAppDimensions';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const { paddingXMobile } = useAppDimensions();

  const colors = Theme.palette;

  const handleClose = () => setOpen(false);

  const Header = () => (
    <Stack
      justifyContent="space-between"
      direction="row"
      onClick={() => setOpen(!open)}
      width="100%"
    >
      <Box
        onClick={(e) => {
          console.log(e);
          e.stopPropagation();
          handleClose();
        }}
      >
        <Link href="/">
          <a>
            {/* <LogoSmall width={50} height={50} /> */}
            <Typography>Inês Cruz</Typography>
          </a>
        </Link>
      </Box>
      {open ? (
        <Typography>close</Typography>
      ) : (
        // <Close size={40} color={colors.primary.main} />
        <Typography>menu</Typography>
        // <MenuHamburger size={40} color={colors.primary.main} />
      )}
    </Stack>
  );

  return (
    <>
      <Box
        sx={{
          border: 'none',
          paddingX: paddingXMobile,
          paddingY: '20px',
          width: '100%',
        }}
      >
        <Header />
      </Box>

      <Drawer anchor="top" open={open} onClose={handleClose}>
        <Stack
          sx={{
            border: 'none',
            paddingX: paddingXMobile,
            paddingY: '20px',
            width: '100%',
          }}
          spacing="15px"
        >
          <Header />
          <Box onClick={handleClose}>
            <NavbarMenu />
          </Box>
        </Stack>
      </Drawer>
    </>
  );
}
