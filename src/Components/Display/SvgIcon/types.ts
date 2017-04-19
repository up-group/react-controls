export { Props } from './';

export type iconName = 'add' | 'asterisk' | 'calendar' | 'delete' | 'edit' |
    'email' | 'error-sign' | 'filter' | 'filter-list' | 'help' | 'info-sign' |
    'link' | 'mobile-phone' | 'phone' | 'search' | 'user' | 'warning-sign';


export interface SvgProps extends React.SVGProps<{}> {
    viewBox?: string;
    iconName?: iconName;
}
