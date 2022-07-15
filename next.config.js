/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    USER_ID: process.env.USER_ID,
  },
};
