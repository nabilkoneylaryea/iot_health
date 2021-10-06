import * as React from 'react';
import Avatar from '@mui/material/Avatar';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name, href) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      fontWeight: 'heavy',
      fontSize: 50,
      width: 100,
      height: 100,
      href: href
    },
    children: `${name.split(' ')[0][0]}`,
  };
}

const NameBasedAvatar = ({name, href}) => {
  return (
    <Avatar {...stringAvatar(name, href)}/>
  );
}

export default NameBasedAvatar;