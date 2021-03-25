import * as React from 'react';
import { UpEntityViewProps, UpEntityViewState } from './types';
import { getStyles } from './styles';
import { withTheme, WithThemeProps } from '../../../Common/theming';
import SvgIcon from '../SvgIcon';
import { UpBox } from '../../..';
import * as classNames from 'classnames';

const UpEntityView = (props: UpEntityViewProps & WithThemeProps & UpEntityViewState) => {

    const {
        title,
        icon,
        informations
    } = props;

    return (
        <div className={classNames('up-entity-view', getStyles())}>
            <div className={classNames('up-entity-view-title')}>
                {title}
            </div>
            <UpBox flexDirection={'row'}>
                {icon &&
                    <SvgIcon
                        iconName={icon}
                        width={80}
                    />
                }
                <div>
                    {informations.map((item) => (
                        <div key={item.key} className={classNames('up-entity-view-content')}>
                            <b>{`${item.key} : `}</b>{item.value}
                        </div>
                    )
                    )}
                </div>
            </UpBox>
        </div>
    );
}

export { UpEntityView };
export default withTheme<UpEntityViewProps>(UpEntityView);
