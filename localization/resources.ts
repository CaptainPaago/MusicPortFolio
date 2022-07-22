import aboutEn from './locales/en-US/about.json';
import aboutPt from './locales/pt-PT/about.json';

import landingEn from './locales/en-US/landing.json';
import landingPt from './locales/pt-PT/landing.json';

import contactEn from './locales/en-US/contact.json';
import contactPt from './locales/pt-PT/contact.json';

const resources = {
  'en-US': {
    landing: landingEn,
    about: aboutEn,
    contact: contactEn,
  },
  'pt-PT': {
    landing: landingPt,
    about: aboutPt,
    contact: contactPt,
  },
};

export default resources;
