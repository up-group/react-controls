import * as React from 'react';
import UpDataPanelItem from './UpDataPanelItem';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import { UpDataPanelProps } from './types';

const UpDataPanel: React.FunctionComponent<UpDataPanelProps & WithThemeProps> = props => {
    const { data, ...rest } = props;

    return (
        <>
            {data && data.map((panelElement, index) => (
                <React.Fragment key={index}>
                    <UpDataPanelItem panelData={panelElement} {...rest} />
                </React.Fragment>
            ))}
        </>
    )
};

UpDataPanel.defaultProps = {
    displayMode: 'row',
    showOnlyNotEmptyValue: false
};

export { UpDataPanel };
export default withTheme<UpDataPanelProps>(UpDataPanel);
