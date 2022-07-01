import React from 'react';

export interface IconProps {
  size: number;
  color: string;
}

export function MenuHamburger({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 20H68M12 40H68M12 60H68"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Instagram({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 7.31429C25.2893 7.31429 24.4529 7.34669 21.8267 7.45779C19.1896 7.58741 17.4058 7.99631 15.8319 8.60736C14.1847 9.22924 12.6928 10.2029 11.4605 11.4605C10.1994 12.69 9.22519 14.1826 8.60736 15.8319C7.99631 17.4058 7.58741 19.1896 7.45779 21.8267C7.33897 24.4545 7.31429 25.2893 7.31429 32C7.31429 38.7107 7.34669 39.5471 7.45779 42.1733C7.58741 44.8027 7.99631 46.5942 8.60736 48.1681C9.22924 49.8153 10.2029 51.3072 11.4605 52.5395C12.69 53.8006 14.1826 54.7748 15.8319 55.3926C17.4058 55.996 19.1973 56.4126 21.8267 56.5422C24.4545 56.661 25.2893 56.6857 32 56.6857C38.7107 56.6857 39.5471 56.6533 42.1733 56.5422C44.8027 56.4126 46.5942 55.9944 48.1681 55.3926C49.8153 54.7708 51.3072 53.7971 52.5395 52.5395C53.8022 51.3114 54.7767 49.8183 55.3926 48.1681C55.996 46.5942 56.4126 44.8027 56.5422 42.1733C56.661 39.5455 56.6857 38.7107 56.6857 32C56.6857 25.2893 56.6533 24.4529 56.5422 21.8267C56.4126 19.1973 55.9944 17.3966 55.3926 15.8319C54.7708 14.1847 53.7971 12.6928 52.5395 11.4605C51.3114 10.1978 49.8183 9.22332 48.1681 8.60736C46.5942 7.99631 44.8027 7.58741 42.1733 7.45779C39.5455 7.33897 38.7107 7.31429 32 7.31429ZM32 11.7583C38.5904 11.7583 39.3773 11.7907 41.982 11.9018C44.3845 12.0144 45.693 12.4156 46.5618 12.7551C47.6358 13.1515 48.6078 13.7825 49.4072 14.6021C50.2254 15.3981 50.854 16.3679 51.2465 17.4398C51.5859 18.3085 51.9871 19.617 52.0998 22.0196C52.2109 24.6242 52.2433 25.4127 52.2433 32.0015C52.2433 38.5904 52.2109 39.3789 52.0905 41.9835C51.9609 44.3861 51.5597 45.6946 51.2218 46.5633C50.7542 47.7221 50.2327 48.5322 49.3717 49.4087C48.5696 50.2231 47.5982 50.8511 46.5263 51.248C45.6683 51.5875 44.3413 51.9887 41.9295 52.1013C39.311 52.2124 38.5394 52.2448 31.9321 52.2448C25.3248 52.2448 24.5548 52.2124 21.9331 52.0921C19.5306 51.9624 18.2051 51.5612 17.3364 51.2233C16.1637 50.7558 15.3597 50.2342 14.4987 49.3732C13.63 48.5045 13.0776 47.6774 12.6517 46.5278C12.3061 45.6699 11.911 44.3429 11.783 41.9311C11.695 39.3434 11.6533 38.541 11.6533 31.9645C11.6533 25.3911 11.695 24.5872 11.783 21.9671C11.911 19.5553 12.3061 18.2314 12.6517 17.3703C13.0776 16.1961 13.6315 15.3937 14.4987 14.525C15.3582 13.6655 16.1637 13.11 17.3364 12.6748C18.2051 12.3369 19.4982 11.9357 21.91 11.8154C24.5286 11.7212 25.3001 11.6873 31.8982 11.6873L32 11.7583ZM32 19.33C30.3356 19.3294 28.6874 19.6568 27.1495 20.2935C25.6117 20.9301 24.2144 21.8636 23.0374 23.0405C21.8605 24.2174 20.927 25.6148 20.2904 27.1526C19.6537 28.6904 19.3263 30.3387 19.3269 32.0031C19.3263 33.6675 19.6537 35.3157 20.2904 36.8536C20.927 38.3914 21.8605 39.7887 23.0374 40.9657C24.2144 42.1426 25.6117 43.076 27.1495 43.7127C28.6874 44.3494 30.3356 44.6768 32 44.6762C33.6644 44.6768 35.3127 44.3494 36.8505 43.7127C38.3883 43.076 39.7856 42.1426 40.9626 40.9657C42.1395 39.7887 43.073 38.3914 43.7096 36.8536C44.3463 35.3157 44.6737 33.6675 44.6731 32.0031C44.6737 30.3387 44.3463 28.6904 43.7096 27.1526C43.073 25.6148 42.1395 24.2174 40.9626 23.0405C39.7856 21.8636 38.3883 20.9301 36.8505 20.2935C35.3127 19.6568 33.6644 19.3294 32 19.33ZM32 40.2322C27.4511 40.2322 23.7709 36.552 23.7709 32.0031C23.7709 27.4542 27.4511 23.774 32 23.774C36.5489 23.774 40.2291 27.4542 40.2291 32.0031C40.2291 36.552 36.5489 40.2322 32 40.2322ZM48.1465 18.8239C48.1457 19.6103 47.8327 20.3643 47.2763 20.9201C46.7199 21.4759 45.9656 21.7881 45.1792 21.7881C44.7903 21.7881 44.4053 21.7115 44.046 21.5627C43.6868 21.4139 43.3603 21.1958 43.0854 20.9208C42.8104 20.6458 42.5923 20.3194 42.4435 19.9602C42.2947 19.6009 42.2181 19.2158 42.2181 18.827C42.2181 18.4381 42.2947 18.0531 42.4435 17.6938C42.5923 17.3346 42.8104 17.0081 43.0854 16.7332C43.3603 16.4582 43.6868 16.2401 44.046 16.0913C44.4053 15.9425 44.7903 15.8659 45.1792 15.8659C46.8102 15.8659 48.1465 17.1929 48.1465 18.8239Z"
        fill={color}
      />
    </svg>
  );
}

export function Close({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.2426 16L64.033 64.7904M15 64.7904L63.7904 16"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RouteIndicator({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size / 5}
      viewBox="0 0 96 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      display="block"
    >
      <path
        d="M1 3.69522C1 3.69522 79.149 -2.57407 95 9"
        stroke={color}
        strokeWidth="3"
      />
    </svg>
  );
}

export function LinkedIn({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M52.7175 7.31429H11.2825C9.09166 7.31429 7.31429 9.09166 7.31429 11.2825V52.7175C7.31429 54.9083 9.09166 56.6857 11.2825 56.6857H52.7175C54.9083 56.6857 56.6857 54.9083 56.6857 52.7175V11.2825C56.6857 9.09166 54.9083 7.31429 52.7175 7.31429ZM52.7175 52.736C25.0818 52.7298 11.264 52.7237 11.264 52.7175C11.2702 25.0818 11.2763 11.264 11.2825 11.264C38.9182 11.2702 52.736 11.2763 52.736 11.2825C52.7298 38.9182 52.7237 52.736 52.7175 52.736ZM14.6336 25.8224H21.9591V49.3849H14.6336V25.8224ZM18.2994 22.6009C20.6384 22.6009 22.5454 20.7001 22.5454 18.355C22.5454 17.7974 22.4355 17.2453 22.2222 16.7301C22.0088 16.215 21.696 15.7469 21.3018 15.3526C20.9075 14.9584 20.4394 14.6456 19.9243 14.4322C19.4091 14.2189 18.857 14.109 18.2994 14.109C17.7418 14.109 17.1897 14.2189 16.6746 14.4322C16.1594 14.6456 15.6914 14.9584 15.2971 15.3526C14.9028 15.7469 14.5901 16.215 14.3767 16.7301C14.1633 17.2453 14.0535 17.7974 14.0535 18.355C14.0473 20.7001 15.9481 22.6009 18.2994 22.6009ZM33.8699 37.7271C33.8699 34.6537 34.4562 31.6791 38.264 31.6791C42.0162 31.6791 42.0718 35.1906 42.0718 37.9246V49.3849H49.3911V36.4619C49.3911 30.1177 48.021 25.2361 40.6091 25.2361C37.0482 25.2361 34.6599 27.1925 33.6786 29.0439H33.5799V25.8224H26.5506V49.3849H33.8699V37.7271Z"
        fill={color}
      />
    </svg>
  );
}

export function Facebook({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M54.7109 7.31429H9.28914C8.1968 7.31429 7.31429 8.1968 7.31429 9.28914V54.7109C7.31429 55.8032 8.1968 56.6857 9.28914 56.6857H54.7109C55.8032 56.6857 56.6857 55.8032 56.6857 54.7109V9.28914C56.6857 8.1968 55.8032 7.31429 54.7109 7.31429ZM52.736 52.736H41.3744V37.5666H47.7927L48.7554 30.1177H41.3744V25.3595C41.3744 23.1995 41.973 21.7307 45.0649 21.7307H49.0085V15.0656C48.3234 14.973 45.9845 14.7694 43.2567 14.7694C37.5666 14.7694 33.6725 18.2439 33.6725 24.619V30.1115H27.2418V37.5605H33.6786V52.736H11.264V11.264H52.736V52.736Z"
        fill={color}
      />
    </svg>
  );
}
