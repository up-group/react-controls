import * as React from 'react';
import classnames from 'classnames';

import UpButtonGroup from '../../ButtonGroup';
import { WithThemeProps } from '../../../../Common/theming/types';
import defaultTheme from '../../../../Common/theming';
import { getStyle } from './UpDataGridHeader.style';

export interface UpDataGridHeaderProps {
  title?: string | JSX.Element;
  buttons?: any;
  buttonExport?: any;
  isDataFetching?: boolean;
}

const UpDataGridHeader = (props: UpDataGridHeaderProps & WithThemeProps) => {
  const { title, theme, buttons, buttonExport } = props;

  const renderTitle = () =>
    title && (typeof title === 'string' ? <p className={classnames('header-title')}>{title}</p> : title);

  return (
    <div className={classnames('up-data-grid-header', getStyle({ theme }))}>
      {renderTitle()}
      {(buttons || buttonExport) && (
        <div>
          <UpButtonGroup isAddOn="right" gutter={1} align={'h'}>
            {buttons}
            {buttonExport}
          </UpButtonGroup>
        </div>
      )}
    </div>
  );
};

UpDataGridHeader.defaultProps = {
  theme: defaultTheme,
};

export default UpDataGridHeader;
