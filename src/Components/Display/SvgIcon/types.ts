export { Props } from './';

import {IconName} from '../../../Common/theming/types'

export interface SvgProps extends React.SVGProps<{}> {
    viewBox?: string;
    iconName?: IconName;
}
