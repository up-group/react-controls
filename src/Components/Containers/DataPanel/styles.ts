import { CSSProperties } from 'typestyle/lib/types';
import { style } from 'typestyle';
import { toRem } from '../../../Common/theming/utils';
import { unescape } from 'querystring';

export const getStyles = (props, columns, panelData) => {
  const tooltipStyle: CSSProperties =
    props.displayMode === 'row'
  ? { position: 'absolute', bottom: toRem(15) }
  : {
    position: 'absolute',
    top: toRem(-5),
    right: toRem(-20),
  };

  const alternativeStyle = columns.map(element => {
    const getFormatterPropsStyle = element.getFormatterProps
    ? element.getFormatterProps(panelData ? panelData[element.field] : null)
    : {};

    return getFormatterPropsStyle && getFormatterPropsStyle.backgroundColor !== undefined;
  }).includes(true)
  
  if (alternativeStyle) 
    return style({
      border: '1px solid #DEDDDD',
      borderRadius: '4px',
      $nest: {
        '& .panel-body': {
          display: 'flex',
          flexWrap: 'wrap',
          position: 'relative',
        },
        '& .panel-col': {
          display: 'flex',
          flexDirection: props.displayMode ? props.displayMode : {},
          position: 'relative',
          alignItems: props.displayMode === 'row' ? 'center' : 'normal',
        },
        '& .panel-col-label': {
          fontSize: toRem(14),
          lineHeight: 1.15,
        },
        '& .panel-col-value': {
          color: props.theme.colorMap.grey1,
          marginLeft: props.displayMode === 'row' ? toRem(4) : '',
          fontSize: toRem(14),
          lineHeight: 1.15,
        },
        '& .panel-title': {
          marginBottom: toRem(30),
        },
        '& .panel-title-general': {
          fontSize: toRem(18),
          fontWeight: 'bold',
          color: '#4B5C59',
        },
        '& .panel-title-specific': {
          fontSize: toRem(18),
          fontWeight: 'bold',
          color: '#4B5C59',
          marginLeft: toRem(4),
        },
        '& .col-tooltip': {
          ...tooltipStyle,
        },
        '& .panel-actions': {
          position: 'absolute',
          right: 0,
          bottom: 4,
          display: 'flex',
          justifyContent: 'space-evenly',
          alignSelf: 'center',
          $nest: {
            '& .up-btn ,& .up-btn svg': {
              width: `${toRem(44)} !important`,
              height: `${toRem(44)} !important`,
            },
          },
        },
      },
    }); 
  else
    return style({
      border: '1px solid #DEDDDD',
      borderRadius: '4px',
      padding: `${toRem(25)} ${toRem(30)} ${toRem(13.5)} ${toRem(50)}`,
      $nest: {
        '& .panel-body': {
          display: 'flex',
          flexWrap: 'wrap',
          marginLeft: toRem(14),
          position: 'relative',
        },
        '& .panel-col': {
          display: 'flex',
          flexDirection: props.displayMode ? props.displayMode : {},
          marginRight: toRem(37),
          marginBottom: toRem(8),
          position: 'relative',
          alignItems: props.displayMode === 'row' ? 'center' : 'normal',
        },
        '& .panel-col-label': {
          color: props.theme.colorMap.gray6,
          fontSize: toRem(14),
          lineHeight: 1.15,
        },
        '& .panel-col-value': {
          color: props.theme.colorMap.grey1,
          marginLeft: props.displayMode === 'row' ? toRem(4) : '',
          fontSize: toRem(14),
          lineHeight: 1.15,
        },
        '& .panel-title': {
          marginBottom: toRem(30),
        },
        '& .panel-title-general': {
          fontSize: toRem(18),
          fontWeight: 'bold',
          color: '#4B5C59',
        },
        '& .panel-title-specific': {
          fontSize: toRem(18),
          fontWeight: 'bold',
          color: '#4B5C59',
          marginLeft: toRem(4),
        },
        '& .col-tooltip': {
          ...tooltipStyle,
        },
        '& .panel-actions': {
          position: 'absolute',
          right: 0,
          bottom: 4,
          display: 'flex',
          justifyContent: 'space-evenly',
          alignSelf: 'center',
          $nest: {
            '& .up-btn ,& .up-btn svg': {
              width: `${toRem(44)} !important`,
              height: `${toRem(44)} !important`,
            },
          },
        },
      },
    });
};
