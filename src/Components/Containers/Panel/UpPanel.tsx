import * as React from 'react';
import { UpPanelProps } from './types';
import UpSvgIcon from '../../Display/SvgIcon';
import * as classnames from 'classnames';
import { getStyles } from './styles';
import withTheme from '../../../Common/theming/withTheme';
import { UpGrid, UpCol, UpRow } from '../Grid';

const UpPanel: React.FunctionComponent<UpPanelProps> = props => {

    const {
        children,
        message,
        iconName,
        iconSize,
        title,
        footer
    } = props;

    const icon = <UpSvgIcon
        iconName={iconName}
        width={iconSize}
        height={iconSize}
    />;

    return (
        <div className={classnames("up-panel", getStyles(props))}>
            {title &&
                <div className="up-panel_header">{title}</div>
            }
            <UpGrid className="up-panel_body">
                <UpRow justify={'center'} align={'middle'}>
                    {iconName &&
                        <UpCol span={2}>
                            {icon}
                        </UpCol>
                    }
                    <UpCol span={iconName ? 22 : 24}>
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
    iconSize: null
};

export { UpPanel };
export default withTheme<UpPanelProps>(UpPanel);
