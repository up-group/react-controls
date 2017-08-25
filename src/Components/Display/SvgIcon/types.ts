export { Props } from './';

import { IconName } from './icons'

export interface SvgProps extends React.SVGProps<{}> {
    viewBox?: string;
    iconName?: IconName;
    position?: string;
    dataFor?:string; // For tooltip management
}
