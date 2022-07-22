import React from 'react';
import { Box, Button, Drawer, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import Link from 'next/link';
import Theme from '../../app/Theme';
import useAppDimensions from '../../hooks/useAppDimensions';
import {
  Close,
  Facebook,
  Instagram,
  LinkedIn,
  MenuHamburger,
  RouteIndicator as Indicator,
} from '../Icons';

export default function Navbar() {
  const router = useRouter();
  const { paddingXMobile } = useAppDimensions();
  const { t, i18n } = useTranslation('navbar');

  const [open, setOpen] = React.useState(false);

  const colors = Theme.palette;

  const handleClose = () => setOpen(false);

  const navbarId =
    router.pathname === '/'
      ? 'navbar-mobile-gradient-closed'
      : 'navbar-mobile-gradient-solid';

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
            <Typography color="white.main" variant="h3">
              Inês Cruz
            </Typography>
          </a>
        </Link>
      </Box>
      {open ? (
        <Close size={40} color={colors.white.main} />
      ) : (
        <MenuHamburger size={40} color={colors.white.main} />
      )}
    </Stack>
  );

  return (
    <>
      <Box
        id={navbarId}
        sx={{
          border: 'none',
          paddingX: paddingXMobile,
          paddingTop: '10px',
          width: '100%',
        }}
      >
        <Header />
      </Box>

      <Drawer
        anchor="top"
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: colors.black.main,
          },
        }}
      >
        <Stack
          sx={{
            border: 'none',
            paddingX: paddingXMobile,
            paddingY: '10px',
            width: '100%',
          }}
          spacing="15px"
        >
          <Header />

          <Box width="100%" height="1px" bgcolor="white.main" />

          <Box onClick={handleClose}>
            <Stack direction="column" alignItems="flex-start" spacing="10px">
              <Stack direction="column" alignItems="flex-start">
                {[
                  { title: t('my-work'), link: '/my-work' },
                  { title: t('about'), link: '/about' },
                  { title: t('contact'), link: '/contact' },
                ].map(({ title, link }, index) => (
                  <Stack direction="column" alignItems="center" key={index}>
                    <Button>
                      <Link href={link}>
                        <a>
                          <Typography color="white.main" variant="h4">
                            {title}
                          </Typography>
                        </a>
                      </Link>
                    </Button>

                    {router.pathname === link && (
                      <Indicator color={colors.primary.main} size={60} />
                    )}
                  </Stack>
                ))}
              </Stack>

              <Box width="100%" height="1px" bgcolor="white.main" />

              <Stack className="user-link" direction="row" spacing="5px">
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
            </Stack>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
}
