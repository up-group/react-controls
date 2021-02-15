import { WithThemeProps } from '../../../Common/theming/withTheme';


export type ModeProgress = 'determinate' | 'indeterminate';

export type ModeDisplayValue = 'none' | 'percentage' | 'fraction';

export interface IProgressCircleProps extends WithThemeProps {
    completedColor?: string; // color of the progress bar
    uncompletedColor?: string; // the color of the progress uncompleted
    backgroundColor?: string;
    labelStyle?: object;
    valueLabelStyle?: object;
    uniteStyle?: object;
    max?: number;
    min?: number;
    size?: number; // The diameter of the progress in pixels.
    thickness?: number; // Stroke width in pixels.
    value?: number; // The value of progress, only works in determinate mode.
    shadow?: boolean;
    uniteLabel?: string;
    modeDisplayValue?: ModeDisplayValue;
    clockWise?: boolean;
};

export interface IProgressCircleState {
    completedDashOffset: number
};