// Imports
import * as React from 'react'
import { UpPanelProps, UpPanelStyledProps } from './'
import { isString } from 'util';
import UpSvgIcon from '../../Display/SvgIcon';
import * as classnames from 'classnames'
import { getStyles } from './styles';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import { UpGrid, UpCol, UpRow } from '../Grid';

import defaultTheme from '../../../Common/theming';

const BasePanel: React.StatelessComponent<UpPanelStyledProps & WithThemeProps> = (props) => {
  var { children } = props;
  var iconName = props.iconName;
  if (!iconName && props.disableAutoIntentIcon === false && props.theme.intentTypeIcons && props.type) {
      iconName = props.theme.intentTypeIcons[props.type];
  }

  var message = props.message;
  if (isString(children)) {
      message = children as string ;
      children = null;
  } else {
      React.Children.map(children, (child, i) => {
          if (isString(child) && children['length'] == 1) {
              message = child as string;
              children = null;
          }
      });
  }

  const icon = <UpSvgIcon iconName={iconName}
      color={(props.theme && props.theme.colorMap) ? props.theme.colorMap[props.type] : props.theme.colorMap.defaultDark}
      width={props.iconSize}
      height={props.iconSize} />;

  return (
      <div className={classnames(props.className, "up-panel", getStyles(props))}>
          {props.title &&
              <div className="up-panel-header">{props.title}</div>
          }
          <UpGrid className="up-panel-body">
            <UpRow justify={'center'} align={'middle'}>
                {iconName &&
                    <UpCol span={2}>
                    {icon}
                    </UpCol>
                }
                <UpCol span={iconName ? 22 : 20}>
                    <div className="up-panel-message">
                        {message &&
                            <p>{message}</p>
                        }
                        {children}
                    </div>
                </UpCol>
            </UpRow>
        </UpGrid>
        {props.footer &&
            <div className="up-panel-footer">{props.footer}</div>
        }
      </div>
  );
}

// Exports
class UpPanel extends React.Component<UpPanelProps, undefined> {
  
  public static defaultProps: UpPanelProps & WithThemeProps = {
    footer: "",
    type:"default",
    disableAutoIntentIcon:true,
    theme: defaultTheme,
  };

  public render() {
    return (
      <BasePanel {...this.props}></BasePanel>
    );
  }
}

export default withTheme<UpPanelStyledProps>(UpPanel) ;
