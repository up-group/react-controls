import React from 'react';
import classnames from 'classnames';
import SvgIcon from '../SvgIcon/index';
import { BulleStyle, IconStyle, ValueStyle, MessageStyle, ChildrenStyle } from './styles';
import UpBox from '../../Containers/Box';
import withTheme from '../../../Common/theming/withTheme';
import defaultTheme from '../../../Common/theming';
import { UpBulleProps } from './types';

const UpBulle: React.FunctionComponent<UpBulleProps> = props => {
  const { className, backgroundImage, icon, value, message, children } = props;

  return (
    <div className={classnames(BulleStyle(props), className, 'up-bulle')} style={{ backgroundImage: backgroundImage }}>
      <UpBox flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'}>
        {icon && <SvgIcon className={IconStyle} iconName={icon} color={'white'} />}
        {value && <div className={ValueStyle}>{value}</div>}
        {message && <div className={MessageStyle}>{message}</div>}
        {children && <div className={ChildrenStyle}>{children}</div>}
      </UpBox>
    </div>
  );
};

UpBulle.defaultProps = {
  theme: defaultTheme,
};

export { UpBulle };
export default withTheme<UpBulleProps>(UpBulle);
