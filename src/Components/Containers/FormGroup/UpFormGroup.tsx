import * as React from 'react';
import { UpFormGroupProps } from './types';
import defaultTheme from '../../../Common/theming';
import { getStyles } from './styles';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';

const UpFormGroup: React.FunctionComponent<UpFormGroupProps & WithThemeProps> = (props) => {
    const {
        title,
        children,
        theme,
        withTitleSeparator,
        ...others } = props;

    return (
        <fieldset
            className={getStyles(props)}
            {...others}
        >
            <legend>{title}</legend>
            {children}
        </fieldset>
    );
};

UpFormGroup.defaultProps = {
    title: '',
    theme: defaultTheme,
    withTitleSeparator: false
};

export { UpFormGroup };
export default withTheme<UpFormGroupProps>(UpFormGroup);
