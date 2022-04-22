import React from 'react';
import { UpEntityViewProps, UpEntityViewState } from './types';
import { getStyles } from './styles';
import { withTheme } from '../../../Common/theming';
import SvgIcon from '../SvgIcon';
import { UpBox } from '../../..';
import classnames from 'classnames';

const UpEntityView = (props: UpEntityViewProps & UpEntityViewState): JSX.Element => {
  const { title, icon, informations } = props;

  return (
    <div className={classnames('up-entity-view', getStyles())}>
      <div className={classnames('up-entity-view-title')}>{title}</div>
      <UpBox flexDirection={'row'}>
        {icon && <SvgIcon iconName={icon} width={80} />}
        <div>
          {informations.map(item => (
            <div key={item.key} className={classnames('up-entity-view-content')}>
              <b>{`${item.key} : `}</b>
              {item.value}
            </div>
          ))}
        </div>
      </UpBox>
    </div>
  );
};

export { UpEntityView };
export default withTheme<UpEntityViewProps>(UpEntityView);
