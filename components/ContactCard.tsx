import React from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { send } from 'emailjs-com';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

import Theme from '../app/Theme';
import useAppDimensions from '../hooks/useAppDimensions';
import { Email, Phone } from './Icons';

interface Props {
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ContactCard({
  setMessage,
  setErrorMessage,
  setOpen,
}: Props) {
  const { isMobile } = useAppDimensions();
  const { t, i18n } = useTranslation('contact');

  const validationSchema = yup.object({
    reply_to: yup
      .string()
      .email(t('error-email'))
      .required(t('error-required-email')),
    message: yup.string().required(t('error-required-message')),
    from_name: yup.string().required(t('error-required-name')),
  });

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
            cardinaljaydi@gmail.com
          </Typography>
        </Stack>

        <Stack direction="row" spacing={isMobile ? '10px' : '15px'}>
          <Phone color={colors.white.main} size={isMobile ? 25 : 35} />
          <Typography color="white.main" variant={isMobile ? 'h5' : 'h4'}>
            0913-903-8815
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
          {t('form-title')}
        </Typography>

        <Formik
          initialValues={{
            from_name: '',
            to_name: 'Inês Cruz',
            message: '',
            reply_to: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            try {
              await send(
                process.env.SERVICE_ID ?? '',
                process.env.TEMPLATE_ID ?? '',
                values,
                process.env.USER_ID ?? ''
              ).then((response) => {
                actions.setSubmitting(false);
                console.log('SUCCESS!', response.status, response.text);
                setErrorMessage(false);
                setMessage('message sent successfully');
                setOpen(true);
                actions.resetForm();
              });
            } catch (e) {
              //   handleError(e, values.email);
              console.log('Error!', e);
              actions.setSubmitting(false);
              setErrorMessage(true);
              setMessage('something went wrong...');
              setOpen(true);
            }
          }}
        >
          {(props) => {
            const { errors, setFieldTouched } = props;

            i18n.on('languageChanged', () => {
              Object.keys(errors).forEach((fieldName) => {
                setFieldTouched(fieldName);
              });
            });

            return (
              <Stack
                direction="column"
                spacing={isMobile ? '10px' : '20px'}
                zIndex={5}
              >
                <Stack width="100%">
                  <TextField
                    placeholder={t('form-name')}
                    variant="outlined"
                    InputProps={inputProps}
                    type="text"
                    name="from_name"
                    value={props.values.from_name}
                    onChange={props.handleChange}
                    fullWidth
                    required
                    onBlur={() => {
                      props.setFieldTouched('from_name');
                    }}
                  />
                  <ErrorMessage name="from_name">
                    {(msg) => (
                      <Typography color="error.main" variant="subtitle2">
                        {msg}
                      </Typography>
                    )}
                  </ErrorMessage>
                </Stack>

                <Stack width="100%">
                  <TextField
                    variant="outlined"
                    InputProps={inputProps}
                    type="text"
                    name="reply_to"
                    placeholder={t('form-email')}
                    value={props.values.reply_to}
                    onChange={props.handleChange}
                    fullWidth
                    required
                    onBlur={() => {
                      props.setFieldTouched('reply_to');
                    }}
                  />
                  <ErrorMessage
                    name="reply_to"
                    render={(msg) => (
                      <Typography color="error.main" variant="subtitle2">
                        {msg}
                      </Typography>
                    )}
                  />
                </Stack>

                <Stack width="100%">
                  <TextField
                    placeholder={t('form-message')}
                    variant="outlined"
                    multiline
                    rows={4}
                    InputProps={inputProps}
                    type="text"
                    name="message"
                    value={props.values.message}
                    onChange={props.handleChange}
                    fullWidth
                    required
                    onBlur={() => {
                      props.setFieldTouched('message');
                    }}
                  />
                  <ErrorMessage name="message">
                    {(msg) => (
                      <Typography color="error.main" variant="subtitle2">
                        {msg}
                      </Typography>
                    )}
                  </ErrorMessage>
                </Stack>

                <Button
                  color="primary"
                  variant="contained"
                  sx={{
                    width: isMobile ? '100%' : '100%',
                    alignSelf: 'center',
                  }}
                  onClick={() => {
                    props.setSubmitting(true);
                    props.submitForm();
                  }}
                  disabled={!props.isValid || props.isSubmitting}
                >
                  <Typography
                    variant={isMobile ? 'h6' : 'h5'}
                    className="Roboto"
                    marginY={isMobile ? 0 : '5px'}
                  >
                    {t('form-button')}
                  </Typography>
                </Button>
              </Stack>
            );
          }}
        </Formik>
      </Stack>
    </Stack>
  );
}
