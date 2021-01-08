import * as React from "react" ;
import { Component } from "react";

import { withTheme, WithThemeProps } from "../../../Common/theming";
import SvgIcon from "../SvgIcon";
import { UpBox } from "../../..";
import { IllustrationName } from "../../../Common/theming/illustrations";
import { style } from "typestyle";
import * as classNames from 'classnames';


const getStyles = () => style({
  $nest : {
    '& .up-entity-view-title' : {
      fontSize: '18px', 
      fontWeight: 'bold',
      marginBottom: '15px', 
      color: '#596664'
    },
    '& .up-entity-view-content': {
      margin: '10px 0px',
      color: '#596664',
      marginLeft: '30px'
    }
  }
});

export interface UpEntityViewProps {
  title: string;
  icon?: IllustrationName;
  informations: { key: string; value: string; }[];
}

export interface UpEntityViewState {}

class UpEntityView extends Component<UpEntityViewProps & WithThemeProps, UpEntityViewState> {
  constructor(props: UpEntityViewProps) {
    super(props) ;
  }

  render() {
    return (       
      <div 
        className={classNames(
          'up-entity-view',
          getStyles()
        )}>  
        <div className={classNames('up-entity-view-title')}>{this.props.title}</div>
        <UpBox flexDirection={'row'}>
          {this.props.icon &&
            <SvgIcon iconName={this.props.icon} width={80} />
          }
          <div>
            {this.props.informations.map((item) => {
              return (<div className={classNames('up-entity-view-content')}><b>{`${item.key} : `}</b>{item.value}</div>
            )})}
          </div>
        </UpBox>
      </div>
    );
  }
}
export default withTheme<UpEntityViewProps>(UpEntityView) ;
