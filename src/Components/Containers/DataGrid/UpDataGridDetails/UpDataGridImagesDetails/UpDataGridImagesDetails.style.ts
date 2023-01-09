import { style } from 'typestyle';

export const getWrapperStyle = (): string => {
  return style({
    display: 'flex',
    flexFlow: 'row nowrap',
    padding: '35px',
    userSelect: 'none',
  });
};

export const getContentStyle = (): string => {
  return style({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '0 16px',
  });
};

export const getContentItemStyle = (): string => {
  return style({
    padding: '0 9px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'calc(50% - 20px)',
    margin: '10px',
    $nest: {
      img: {
        display: 'block',
        objectFit: 'cover',
        width: '100%',
        height: '100%',
      },
    },
  });
};
