import * as React from 'react';
import { getStyles } from './styles';
import * as classnames from 'classnames';
import withTheme from '../../../Common/theming/withTheme';
import { WithThemeProps } from '../../../Common/theming';
import { UpLigneProps } from './types';

const UpLigne: React.FunctionComponent<UpLigneProps & WithThemeProps> = (props) => {
    const { dataFor, className, children, theme, ...others } = props;
    let tooltipProps = {};

    if (dataFor) {
        tooltipProps = {
            "data-tip": "tooltip",
            "data-for": dataFor
        }
    }

    return (
        <span className={classnames(className, getStyles(props))} {...tooltipProps} {...others}>
            {children}
        </span>
    )
};

export { UpLigne };
export default withTheme<UpLigneProps>(UpLigne);