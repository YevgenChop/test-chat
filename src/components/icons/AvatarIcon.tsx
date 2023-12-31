import { SVGProps } from 'react';

export const AvatarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="#c3c0bb"
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M172 120a44 44 0 1 1-44-44 44.05 44.05 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88.09 88.09 0 0 0-91.47-87.93C77.43 41.89 39.87 81.12 40 128.25a87.65 87.65 0 0 0 22.24 58.16A79.71 79.71 0 0 1 84 165.1a4 4 0 0 1 4.83.32 59.83 59.83 0 0 0 78.28 0 4 4 0 0 1 4.83-.32 79.71 79.71 0 0 1 21.79 21.31A87.62 87.62 0 0 0 216 128Z" />
  </svg>
);
