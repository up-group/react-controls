import { WithThemeProps } from '../../../Common/theming';

export interface UpVerticalTimelineProps extends WithThemeProps {
  /** To provide title */
  title: string;
  /** To provide the events to be represented graphically */
  timeline: {
    status: string;
    date?: string;
    isAchieved: boolean;
  }[];
}
