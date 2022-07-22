import React from 'react';
import Link from 'next/link';
import { Button, Drawer, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Instagram, LinkedIn, Facebook, Portugal, UK } from '../Icons';
import Theme from '../../app/Theme';

const FooterMobile = () => {
  const { i18n } = useTranslation();
  const colors = Theme.palette;

  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer =
    (anchor: 'bottom', open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const handleLanguage = () => {
    if (i18n.language === 'pt-PT') {
      i18n.changeLanguage('en-US');
    } else {
      i18n.changeLanguage('pt-PT');
    }
  };

  const Links = () => (
    <Stack
      sx={{
        paddingY: '20px',
        paddingX: '10px',
        width: '100%',
        bgcolor: 'black.800',
      }}
      spacing="5px"
      role="presentation"
      // onClick={toggleDrawer('bottom', false)}
      onKeyDown={toggleDrawer('bottom', false)}
    >
      {[
        {
          icon: <Instagram color={colors.white.main} size={30} />,
          link: 'https://www.instagram.com/ines.cruz.8/?hl=en',
          name: 'instagram',
        },
        {
          icon: <LinkedIn color={colors.white.main} size={30} />,
          link: 'https://www.linkedin.com/in/in%C3%AAs-cruz-03b9b1133/',
          name: 'linkedin',
        },
        {
          icon: <Facebook color={colors.white.main} size={30} />,
          link: 'https://www.facebook.com/ines.cruz.77',
          name: 'facebook',
        },
      ].map(({ icon, link, name }, index) => (
        <Link href={link} key={index}>
          <a target="_blank">
            <Button>
              <Stack direction="row" spacing="10px" alignItems="flex-end">
                {icon}
                <Typography variant="h6" color="white.main" className="Roboto">
                  {name}
                </Typography>
              </Stack>
            </Button>
          </a>
        </Link>
      ))}
    </Stack>
  );

  return (
    <Stack alignItems="center" direction="column" paddingY="15px" zIndex={5}>
      <Stack
        alignItems="center"
        className="user-link"
        direction="row"
        justifyContent="space-between"
        spacing={1}
        height="100%"
      >
        <Link href="/contact">
          <a>
            <Button>
              <Typography color="white.main">contact me</Typography>
            </Button>
          </a>
        </Link>
        <Typography color="white.main">|</Typography>
        <Button onClick={toggleDrawer('bottom', true)}>
          <Typography color="white.main">links</Typography>
        </Button>
        <Drawer
          anchor={'bottom'}
          open={state['bottom']}
          onClose={toggleDrawer('bottom', false)}
          PaperProps={{
            sx: {
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px',
              bgcolor: 'black.800',
            },
          }}
        >
          <Links />
        </Drawer>
        <Typography color="white.main">|</Typography>
        <Button
          onClick={handleLanguage}
          endIcon={
            i18n.language === 'en-US' ? (
              <Portugal size={15} />
            ) : (
              <UK size={15} />
            )
          }
        >
          <Typography color="white.main">
            {i18n.language === 'en-US' ? 'português' : 'english'}
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default FooterMobile;
