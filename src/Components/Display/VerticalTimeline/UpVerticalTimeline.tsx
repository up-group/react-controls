import * as React from "react" ;
import { Component } from "react";

import { withTheme, WithThemeProps } from "../../../Common/theming";
import { UpBox } from "../../..";
import * as classNames from 'classnames';
import { verticalAlignStyle } from "./styles";
import { getStyles } from "./styles";

export const dotOrderStep = (active?: boolean, first?: boolean) => (
  <>
    {!first && (
      <div
        className={classNames(
          'up-vertical-align-line',
          active ? 'up-checkmark' : 'up-vertical-align-inactive',
          verticalAlignStyle
        )}
      />
    )}
    <div
      className={classNames(
        'up-vertical-align-circle',
        active ? 'up-checkmark' : 'up-vertical-align-inactive',
        verticalAlignStyle
      )}
    />
  </>
);

export interface UpVerticalTimelineProps {
  title: string;
  timeline: { status: string; date?: string; isAchieved: boolean }[];  
}

export interface UpVerticalTimelineState {}

class UpVerticalTimeline extends Component<UpVerticalTimelineProps & WithThemeProps, UpVerticalTimelineState> {
  constructor(props: UpVerticalTimelineProps) {
    super(props) ;
  }

  render() {
    return (  
      <div 
        className={classNames(
          'up-vertical-align',
          getStyles()
        )}>  
        <div className={classNames('up-vertical-align-title')}>{this.props.title}</div>
        <UpBox flexDirection={'row'}>
          <UpBox>
            {this.props.timeline.map( 
                (item, iter) =>
                item && (
                    <UpBox key={iter}>{dotOrderStep(item.isAchieved, iter == 0)}</UpBox>
                  )
              )}
          </UpBox>
          <UpBox>
            {this.props.timeline.map(
              (item, iter) => (
                <div key={iter} className={classNames('up-vertical-align-content')}>
                  <div className={classNames('up-vertical-align-content-title')}>  
                    {item.status}
                  </div>
                  <div className={classNames('up-vertical-align-content-subtitle')}>  
                    {item.date}
                  </div>
                </div>
            ))}
          </UpBox>
        </UpBox>
      </div>    
    );
  }
}
export default withTheme<UpVerticalTimelineProps>(UpVerticalTimeline) ;
