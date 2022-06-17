import React from 'react';
import Link from 'next/link';
import { Typography, Stack } from '@mui/material';

import Theme from '../../app/Theme';
import useAppDimensions from '../../hooks/useAppDimensions';

export default function NavbarMenu({
  handleClose,
}: {
  handleClose?: () => void;
}) {
  const { isMobile } = useAppDimensions();
  const colors = Theme.palette;

  const MenuTitle = ({ title }: { title: string }) => (
    <Typography color="primary" variant="body1">
      {title}
    </Typography>
  );

  //   const iconSize = 30;
  const spacing = 1.5;

  return (
    <Stack
      direction="column"
      sx={{
        border: isMobile ? 'none' : `1px solid ${colors.primary.main}`,
        borderRadius: isMobile ? 0 : '4px',
      }}
      id="popover"
      padding={isMobile ? 0 : '15px'}
      spacing={2}
    >
      <Link href="/user">
        <a>
          <Stack
            direction="row"
            alignItems="center"
            spacing={spacing}
            className="link"
            onClick={handleClose}
          >
            {/* <Account size={iconSize} color={colors.primary.main} /> */}
            <MenuTitle title="account settings" />
          </Stack>
        </a>
      </Link>

      {/* conditional */}
      <Link href="/org">
        <a>
          <Stack
            direction="row"
            alignItems="center"
            spacing={spacing}
            className="link"
            onClick={handleClose}
          >
            {/* <Group size={iconSize} color={colors.primary.main} /> */}
            <MenuTitle title="group settings" />
          </Stack>
        </a>
      </Link>
      {/* conditional */}

      <Link href="/about">
        <a>
          <Stack
            direction="row"
            alignItems="center"
            spacing={spacing}
            className="link"
            onClick={handleClose}
          >
            {/* <About size={iconSize} color={colors.primary.main} /> */}
            <MenuTitle title="about" />
          </Stack>
        </a>
      </Link>

      <Link href="/cookies">
        <a>
          <Stack
            direction="row"
            alignItems="center"
            spacing={spacing}
            className="link"
            onClick={handleClose}
          >
            {/* <Cookies size={iconSize} color={colors.primary.main} /> */}
            <MenuTitle title="cookies statement" />
          </Stack>
        </a>
      </Link>

      <Link href="/privacy">
        <a>
          <Stack
            direction="row"
            alignItems="center"
            spacing={spacing}
            className="link"
            onClick={handleClose}
          >
            {/* <Terms size={iconSize} color={colors.primary.main} /> */}
            <MenuTitle title="privacy policy" />
          </Stack>
        </a>
      </Link>

      <Link href="/tos">
        <a>
          <Stack
            direction="row"
            alignItems="center"
            spacing={spacing}
            className="link"
            onClick={handleClose}
          >
            {/* <Contract size={iconSize} color={colors.primary.main} /> */}
            <MenuTitle title="terms of service" />
          </Stack>
        </a>
      </Link>

      <Link href="/user">
        <a>
          <Stack
            direction="row"
            alignItems="center"
            spacing={spacing}
            className="link"
            onClick={handleClose}
          >
            {/* <SignOut size={iconSize} color={colors.primary.main} /> */}
            <MenuTitle title="sign out" />
          </Stack>
        </a>
      </Link>
    </Stack>
  );
}
