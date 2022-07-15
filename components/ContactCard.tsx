import React from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { send } from 'emailjs-com';

import Theme from '../app/Theme';
import useAppDimensions from '../hooks/useAppDimensions';
import { Email, Phone } from './Icons';

export default function ContactCard() {
  const { isMobile } = useAppDimensions();

  const [toSend, setToSend] = React.useState({
    from_name: '',
    to_name: 'Inês Cruz',
    message: '',
    reply_to: '',
  });

  console.log(process.env.SERVICE_ID);
  console.log(process.env.TEMPLATE_ID);
  console.log(process.env.USER_ID);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    send(
      process.env.SERVICE_ID ?? '',
      process.env.TEMPLATE_ID ?? '',
      toSend,
      process.env.USER_ID ?? ''
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const colors = Theme.palette;

  const inputProps = {
    sx: {
      // @ts-ignore: Unreachable code error
      bgcolor: colors.black[600],
      // @ts-ignore: Unreachable code error
      color: colors.white[200],
      fontFamily: 'Roboto',
    },
  };

  const canSubmit =
    toSend.from_name !== '' && toSend.message !== '' && toSend.reply_to !== ''
      ? true
      : false;

  return (
    <Stack direction="column" spacing={isMobile ? '10px' : '20px'}>
      <Stack
        bgcolor="black.700"
        borderRadius="5px"
        direction="column"
        padding={isMobile ? '15px' : '20px'}
        spacing={isMobile ? '10px' : '20px'}
        zIndex={5}
      >
        <Stack direction="row" spacing={isMobile ? '10px' : '15px'}>
          <Email color={colors.white.main} size={isMobile ? 25 : 35} />
          <Typography color="white.main" variant={isMobile ? 'h5' : 'h4'}>
            violino.ines95@gmail.com
          </Typography>
        </Stack>

        <Stack direction="row" spacing={isMobile ? '10px' : '15px'}>
          <Phone color={colors.white.main} size={isMobile ? 25 : 35} />
          <Typography color="white.main" variant={isMobile ? 'h5' : 'h4'}>
            +46 072 831 07 29
          </Typography>
        </Stack>
      </Stack>

      <Stack
        bgcolor="black.700"
        borderRadius="5px"
        direction="column"
        padding={isMobile ? '15px' : '20px'}
        spacing={isMobile ? '10px' : '20px'}
        zIndex={5}
      >
        <Typography color="white.200" variant={isMobile ? 'h5' : 'h4'}>
          contact form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack
            direction="column"
            spacing={isMobile ? '10px' : '20px'}
            zIndex={5}
          >
            <TextField
              placeholder="your name"
              variant="outlined"
              InputProps={inputProps}
              sx={{
                width: '100%',
              }}
              type="text"
              name="from_name"
              value={toSend.from_name}
              onChange={handleChange}
              required
            />
            <TextField
              variant="outlined"
              InputProps={inputProps}
              sx={{
                width: '100%',
              }}
              type="text"
              name="reply_to"
              placeholder="your email"
              value={toSend.reply_to}
              onChange={handleChange}
              required
            />

            <TextField
              placeholder="message"
              variant="outlined"
              multiline
              rows={4}
              InputProps={inputProps}
              type="text"
              name="message"
              value={toSend.message}
              onChange={handleChange}
              fullWidth
              required
            />

            <Button
              color="primary"
              variant="contained"
              sx={{
                width: isMobile ? '100%' : '100%',
                alignSelf: 'center',
              }}
              onClick={handleSubmit}
              disabled={!canSubmit}
            >
              <Typography
                variant={isMobile ? 'h6' : 'h5'}
                className="Roboto"
                marginY={isMobile ? 0 : '5px'}
              >
                send email
              </Typography>
            </Button>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
}
