import * as classnames from 'classnames';
import * as React from 'react';
import { style } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';

import { IconName } from '../../../Common/theming/icons';
import { MentorName } from '../../../Common/theming/mentors';
import UpBox from '../../Containers/Box';
import UpSvgIcon from '../SvgIcon';
import UpButton from '../../Inputs/Button/UpButton';
import { Action } from '../../Inputs/Button/types'

export type GetterStyle = (props: UpInformationProps) => NestedCSSProperties

export interface UpInformationCustomStyles {
  informationWrapper? : GetterStyle;
  title? : GetterStyle;
  contentWrapper? : GetterStyle;
  content? : GetterStyle;
  button?:GetterStyle;
}

const titleStyle : NestedCSSProperties  = {
  color: '#6A6A6A',
  fontFamily: 'Roboto, sans-serif, Verdana',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '21px',
  verticalAlign: 'middle',
}

const boxWrapperStyle : NestedCSSProperties = {
  $nest : {
    '&.up-information' : {
      width: '100%',
      height:'auto',
      paddingLeft: 0,
      backgroundColor: 'white',
      border: '1px solid #D7D7D7',
      borderRadius: '6px',
      paddingRight: '19px',
    },
    '& .up-icon-wrapper' : {
      verticalAlign: 'middle',
      position: 'relative',
      left: '-22px'
    }
  }
}

const contentWrapperStyle : NestedCSSProperties = {
  $nest : {
    '&.up-information-content-wrapper' : {
      width: '100%',
      padding : '0px 10px 10px 54px'
    }
  }
}

const contentStyle = {
  margin: 0,
  color: '#9B9B9B',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '16px',
  marginTop : '12px'
}

const buttonStyle : NestedCSSProperties = {
  $nest : {
    '&.up-information-button-wrapper' : {
      marginTop : '12px',
      padding: '0px 10px 0px 0px'
    },
    '& button' : {
      width: '210px',
      fontFamily: 'Roboto, sans-serif',
      fontSize: '14px',
      fontWeight: 'bold',
      lineHeight: '16px'
    }
  }
}

interface UpInformationProps {
  iconName?: IconName | MentorName;
  iconSize?: number;
  iconColor?: string;
  title?: string;
  content?: string;
  action?: Action;
  customStyles? : UpInformationCustomStyles
}

function getCustomStyle(key : keyof UpInformationCustomStyles, props : UpInformationProps) : NestedCSSProperties {
    if(props.customStyles && props.customStyles[key]) {
        return props.customStyles[key](props) ;
    }
    return {}
}

const UpInformation : React.FunctionComponent<UpInformationProps> = (props) => {
  
   const  {
    iconName,
    iconSize,
    iconColor,
    title,
    content,
    action,
    children
  } = props ; 

  const contentClassStyle = classnames('up-box-content', style({...contentStyle, ...getCustomStyle('content', props)})) ;

  return (
    <UpBox className={classnames('up-information', style({...boxWrapperStyle, ...getCustomStyle('informationWrapper', props)}))}>
      {title && iconName && (
        <div
          style={{
            marginBottom: 5
          }}>
          <UpSvgIcon
            iconName={iconName}
            width={iconSize}
            height={iconSize}
            color={iconColor}
            style={{
              verticalAlign: 'middle',
              marginRight: 15
            }}
          />
          <span className={classnames('up-information-title', style({...titleStyle, ...getCustomStyle('title', props)}))}>{title}</span>
        </div>
      )}
      <UpBox
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'flex-start'}
        className={classnames('up-information-content-wrapper', style({...contentWrapperStyle, ...getCustomStyle('contentWrapper', props)}))}>
        {content && (
            <UpBox
              flexDirection={'column'}
              justifyContent={'flex-start'}
              alignItems={'flex-start'}>
                <p className={contentClassStyle}>{content}</p>
                {children && (
                <p className={contentClassStyle}>{children}</p>
                )}
            </UpBox>
        )}
        {action &&
            <UpBox className={classnames('up-information-button-wrapper', style({...buttonStyle, ...getCustomStyle('button', props)}))}>
                <UpButton
                    fontSize={'small'}
                    tooltip={action.tooltip}
                    iconName={action.iconName}
                    intent={action.intent}
                    actionType={action.actionType}
                    onClick={action.onClick}
                    width={'full'}>
                    <span>{action.libelle}</span>
                </UpButton>
            </UpBox>
        }
      </UpBox>
    </UpBox>
  );
};

export default UpInformation;