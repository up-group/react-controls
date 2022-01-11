import { style } from 'typestyle';
import { toRem } from '../../../Common/theming/utils';

export const getStyles = () =>
  style({
    $nest: {
      '& .up-vertical-align-title': {
        fontSize: toRem(18),
        fontWeight: 'bold',
        marginBottom: toRem(20),
        color: '#596664',
      },
      '& .up-vertical-align-content': {
        height: toRem(62),
        marginLeft: toRem(15),
      },
      '& .up-vertical-align-content-title': {
        color: '#596664',
        fontSize: toRem(18),
      },
      '& .up-vertical-align-content-subtitle': {
        color: '#979797',
        fontSize: toRem(14),
      },
    },
  });

export const verticalAlignStyle = style({
  $nest: {
    '&.up-vertical-align-circle.up-checkmark': {
      color: '#6DBD8E',
      textAlign: 'center',
      padding: toRem(1),
      $nest: {
        '&::before': {
          content: '"✔"',
        },
      },
    },
    '&.up-vertical-align-circle': {
      border: `2px solid #6DBD8E`,
      height: 25,
      width: 25,
      boxSizing: 'border-box',
      borderRadius: '50%',
    },
    '&.up-vertical-align-line': {
      height: 37,
      borderRight: `4px solid #6DBD8E`,
      margin: 'auto',
    },
    '&.up-vertical-align-inactive': {
      borderColor: '#979797',
    },
  },
});
