import React from 'react';
import { withTheme, WithThemeProps } from '../../../Common/theming';
import { UpBox } from '../../..';
import classnames from 'classnames';
import { verticalAlignStyle } from './styles';
import { getStyles } from './styles';
import { UpVerticalTimelineProps } from './types';

export const dotOrderStep = (active?: boolean, first?: boolean) => (
  <>
    {!first && (
      <div
        className={classnames(
          'up-vertical-align-line',
          active ? 'up-checkmark' : 'up-vertical-align-inactive',
          verticalAlignStyle
        )}
      />
    )}
    <div
      className={classnames(
        'up-vertical-align-circle',
        active ? 'up-checkmark' : 'up-vertical-align-inactive',
        verticalAlignStyle
      )}
    />
  </>
);

const UpVerticalTimeline: React.FunctionComponent<UpVerticalTimelineProps> = props => {
  const { title, timeline } = props;

  return (
    <div className={classnames('up-vertical-align', getStyles())}>
      <div className={classnames('up-vertical-align-title')}>{title}</div>
      <UpBox flexDirection={'row'}>
        <UpBox>
          {timeline.map((item, iter) => item && <UpBox key={iter}>{dotOrderStep(item.isAchieved, iter == 0)}</UpBox>)}
        </UpBox>
        <UpBox>
          {timeline.map((item, iter) => (
            <div key={iter} className={classnames('up-vertical-align-content')}>
              <div className={classnames('up-vertical-align-content-title')}>{item.status}</div>
              <div className={classnames('up-vertical-align-content-subtitle')}>{item.date}</div>
            </div>
          ))}
        </UpBox>
      </UpBox>
    </div>
  );
};

export { UpVerticalTimeline };
export default withTheme<UpVerticalTimelineProps>(UpVerticalTimeline);
