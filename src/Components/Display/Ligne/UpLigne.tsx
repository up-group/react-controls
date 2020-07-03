import * as React from 'react';
import { getStyles } from './styles';
import * as classnames from 'classnames' ;
import withTheme from '../../../Common/theming/withTheme';
import { WithThemeProps } from '../../../Common/theming';

export interface UpLigneProps {
    color?: string;
    textAlign?: string;
    className?: string;
    dataFor?:string; // for tooltip
  }

  const UpLigne: React.StatelessComponent<UpLigneProps & WithThemeProps> = (props) => {
    const {dataFor, className, children, theme, ...others} = props ;
    var tooltipProps = {} ;
    if (dataFor) {
        tooltipProps = {
            "data-tip": "tooltip",
            "data-for": dataFor
        }
    }
    
    return (<span className={classnames(className, getStyles(props))} {...tooltipProps} {...others}>
        {children}
        </span>)
  };

export default withTheme<UpLigneProps>(UpLigne)