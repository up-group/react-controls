import { style } from 'typestyle';
import { WithThemeProps } from '../../../../Common/theming/withTheme';

export const paginationStyle = style({
  margin: '0px 4px',
  listStyle: 'none',
  display: 'inline-block',
  paddingLeft: '0',
});

export const firstChild = (props: WithThemeProps) => ({
  textDecoration: 'underline',
  fontSize: '15px',
});

export const lastChild = (props: WithThemeProps) => ({
  textDecoration: 'underline',
  fontSize: '15px',
});

export const itemHover = (props: WithThemeProps) => ({
  color: props.theme.colorMap.primary,
});

export const itemActive = (props: WithThemeProps) => ({
  color: props.theme.colorMap.primary,
});

export const itemDisabled = (props: WithThemeProps) => ({
  color: '#777',
  cursor: 'not-allowed',
});

export const paginationItemStyle = (props: WithThemeProps) => {
  const itemHoverStyle = itemHover(props);
  const itemActiveStyle = itemActive(props);
  const itemDisabledStyle = itemDisabled(props);
  const firstChildStyle = firstChild(props);
  const lastChildStyle = lastChild(props);

  return style({
    display: 'inline',
    color: '#4E5B59',
    $nest: {
      '& > a': {
        minWidth: '1rem',
        textAlign: 'center',
        position: 'relative',
        float: 'left',
        padding: '6px 3px',
        marginLeft: '-1px',
        lineHeight: '1.43',
        color: '#4E5B59',
        textDecoration: 'none',
      },
      '&:first-child a': firstChildStyle,
      '&:first-child span': firstChildStyle,
      '&:last-child a': lastChildStyle,
      '&:last-child span': lastChildStyle,
      '& a:hover': itemHoverStyle,
      '& span:hover': itemHoverStyle,
      '&.active > a': itemActiveStyle,
      '&.active > span': itemActiveStyle,
      '&.active > a:hover': itemActiveStyle,
      '&.active > span:hover': itemActiveStyle,
      '&.active > a > span': itemActiveStyle,
      '&.disabled > a': itemDisabledStyle,
      '&.disabled > span': itemDisabledStyle,
      '&.disabled > a:hover': itemDisabledStyle,
      '&.disabled > span:hover': itemDisabledStyle,
      '&.disabled > a:focus': itemDisabledStyle,
      '&.disabled > span:focus': itemDisabledStyle,
      '&.disabled > a > span': itemDisabledStyle,
    },
  });
};
