import * as React from 'react';
import * as classnames from 'classnames';
import { UpBadgeProps } from './types';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import defaultTheme from '../../../Common/theming';
import { getStyle } from './style';

const UpBadge: React.FunctionComponent<UpBadgeProps & WithThemeProps> = props => {

    const {
        text = '',
        color = '#FFF',
        background = "black",
        rounded = false,
        theme = defaultTheme,
        intent,
        className,
        onClick,
        onMouseEnter,
        onMouseLeave,
        children } = props;

    return (
        <div onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={classnames(getStyle(props), 'up-badge', className)}>
            {text}
            {children}
        </div>
    );
}

export { UpBadge };
export default withTheme<UpBadgeProps>(UpBadge);
