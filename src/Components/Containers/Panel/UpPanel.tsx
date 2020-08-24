import * as React from 'react';
import { UpPanelProps } from './types';
import UpSvgIcon from '../../Display/SvgIcon';
import * as classnames from 'classnames';
import { getStyles } from './styles';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import { UpGrid, UpCol, UpRow } from '../Grid';

const UpPanel: React.FunctionComponent<UpPanelProps & WithThemeProps> = props => {

    const {
        type,
        children,
        message,
        iconName,
        iconSize,
        title,
        footer,
        disableAutoIntentIcon,
        theme
    } = props;

    const getIconName = (!iconName && !disableAutoIntentIcon && theme.intentTypeIcons) ? theme.intentTypeIcons[type] : iconName;
    
    const icon = <UpSvgIcon
        iconName={getIconName}
        width={iconSize}
        height={iconSize}
        color={(theme && theme.colorMap) ? theme.colorMap[type] : theme.colorMap.defaultDark}
    />;

    return (
        <div className={classnames("up-panel", getStyles(props))}>
            {title &&
                <div className="up-panel_header">{title}</div>
            }
            <UpGrid className="up-panel_body">
                <UpRow justify={'center'} align={'middle'}>
                    {getIconName &&
                        <UpCol span={2}>
                            {icon}
                        </UpCol>
                    }
                    <UpCol span={getIconName ? 22 : 24}>
                        <div className="up-panel_message">
                            {message &&
                                <p>{message}</p>
                            }
                            {children}
                        </div>
                    </UpCol>
                </UpRow>
            </UpGrid>
            {props.footer &&
                <div className="up-panel_footer">{footer}</div>
            }
        </div>
    );
};

UpPanel.defaultProps = {
    title: null,
    footer: null,
    type: 'default',
    message: null,
    iconName: null,
    iconSize: null,
    disableAutoIntentIcon: true,
};

export { UpPanel };
export default withTheme<UpPanelProps>(UpPanel);
