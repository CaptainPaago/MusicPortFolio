import React from 'react';
import Link from 'next/link';
import { Button, Stack, Typography } from '@mui/material';
import Popover from '@mui/material/Popover';
import { useTranslation } from 'react-i18next';

import {
  Instagram,
  LinkedIn,
  ListArrow,
  Facebook,
  Portugal,
  UK,
} from '../Icons';
import Theme from '../../app/Theme';

const FooterDesktop = () => {
  const { t, i18n } = useTranslation('footer');
  const colors = Theme.palette;

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleLanguage = () => {
    if (i18n.language === 'pt-PT') {
      i18n.changeLanguage('en-US');
    } else {
      i18n.changeLanguage('pt-PT');
    }
  };

  const Links = () => (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: -150,
        horizontal: -85,
      }}
      PaperProps={{
        sx: {
          // borderTopLeftRadius: '20px',
          // borderTopRightRadius: '20px',
          bgcolor: 'black.600',
          padding: '10px',
        },
      }}
    >
      <Stack>
        {[
          {
            icon: <Instagram color={colors.white.main} size={30} />,
            link: 'https://www.instagram.com/jordi.the.fourth',
            name: 'instagram',
          },
          {
            icon: <LinkedIn color={colors.white.main} size={30} />,
            link: 'https://www.ttwitter.com/paago_dotgram',
            name: 'linkedin',
          },
          {
            icon: <Facebook color={colors.white.main} size={30} />,
            link: 'https://www.facebook.com/paago.dotgram.5',
            name: 'facebook',
          },
        ].map(({ icon, link, name }, index) => (
          <Link href={link} key={index}>
            <a target="_blank">
              <Button>
                <Stack direction="row" spacing="10px" alignItems="flex-end">
                  {icon}
                  <Typography
                    variant="h6"
                    color="white.main"
                    className="Roboto"
                  >
                    {name}
                  </Typography>
                </Stack>
              </Button>
            </a>
          </Link>
        ))}
      </Stack>
    </Popover>
  );

  return (
    <Stack alignItems="center" direction="column" paddingY="15px" zIndex={5}>
      <Links />
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
              <Typography color="white.main">{t('contact')}</Typography>
            </Button>
          </a>
        </Link>
        <Typography color="white.main">|</Typography>
        <Button
          aria-describedby={id}
          onClick={handleClick}
          variant="text"
          endIcon={<ListArrow color={colors.white.main} size={15} />}
        >
          <Typography color="white.main">{t('links')}</Typography>
        </Button>
        <Typography color="white.main">|</Typography>
        <Button
          onClick={handleLanguage}
          endIcon={
            i18n.language === 'en-US' ? (
              <Portugal size={20} />
            ) : (
              <UK size={20} />
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

export default FooterDesktop;
