import { IconMap } from './iconMap'
import { Dictionary } from '../utils/types';
import { NestedCSSProperties } from 'typestyle/lib/types';

export interface ThemeInterface {
    colorMap: ThemeColorMap;
    borderRadius?: string;
    inputBorderLess?:boolean;
    minButtonSize?: number;
    notificationIconSize?: string | number;
    gridGutter?: number;
    intentTypeIcons?: IconMap;
    typography?: Typography;
    styles?: Dictionary<string, NestedCSSProperties>;
}

export interface Typography {
    baseFontSize: string;
    headerFontFamily: string;
    bodyFontFamily: string;
    bodyLineHeight:string | number;
    bodySpacing:string | number;
}

export interface ThemeColorMap {

    white: string,
    dark1: string,
    dark2: string,
    dark3: string,

    darkGray1: string,
    darkGray2: string,
    darkGray3: string,
    darkGray4: string,
    darkGray5: string,

    gray1: string,
    gray2: string,
    gray3: string,
    gray4: string,
    gray5: string,
    gray6: string,

    lightGray1: string,
    lightGray2: string,
    lightGray3: string,
    lightGray4: string,
    lightGray5: string,

    light1: string,
    light2: string,
    light3: string,

    primary: string,
    primaryBorder : string,
    primaryHoverBorder : string,
    primaryDark: string,
    primaryLight: string,
    primaryFg: string,
    primaryHover:string,
    primaryHoverFg: string,
    primaryActive:string,
    primaryHoverActive:string,
    
    secondary: string,
    secondaryBorder : string,
    secondaryHoverBorder : string,
    secondaryDark: string,
    secondaryLight: string,
    secondaryFg: string,
    secondaryHover:string,
    secondaryHoverFg: string,
    secondaryActive:string,
    secondaryHoverActive:string,

    default: string,
    defaultBorder : string,
    defaultHoverBorder : string,
    defaultDark: string,
    defaultLight: string,
    defaultFg: string,
    defaultHover:string,
    defaultHoverFg: string,
    defaultActive:string,
    defaultHoverActive:string,

    success: string,
    successBorder : string,
    successHoverBorder : string,
    successDark: string,
    successLight: string,
    successFg: string,
    successHover:string,
    successHoverFg: string,
    successActive:string,
    successHoverActive:string,

    warning: string,
    warningBorder : string,
    warningHoverBorder : string,
    warningDark: string,
    warningLight: string,
    warningFg: string,
    warningHover:string,
    warningHoverFg: string,
    warningActive:string,
    warningHoverActive:string,

    danger: string,
    dangerBorder : string,
    dangerHoverBorder : string,
    dangerDark: string,
    dangerLight: string,
    dangerFg: string,
    dangerHover:string,
    dangerHoverFg: string,
    dangerActive:string,
    dangerHoverActive:string,
    
    error: string,
    errorBorder : string,
    errorHoverBorder : string,
    errorDark: string,
    errorLight: string,
    errorFg: string,
    errorHover:string,
    errorHoverFg: string,
    errorActive:string,
    errorHoverActive:string,

    info: string,
    infoBorder : string,
    infoHoverBorder : string,
    infoDark: string,
    infoLight: string,
    infoFg: string,
    infoHover:string,
    infoHoverFg: string,
    infoActive:string,
    infoHoverActive:string,

    disabledBg: string,
    disabledFg: string,

    white1: string,
    white2: string,
    white3: string,
    offwhite: string,
    black1: string,
    black2: string,
    black3: string,

    // Core colors
    blue1: string,
    blue2: string,
    blue3: string,
    blue4: string,
    blue5: string,

    green1: string,
    green2: string,
    green3: string,
    green4: string,
    green5: string,

    orange1: string,
    orange2: string,
    orange3: string,
    orange4: string,
    orange5: string,

    red1: string,
    red2: string,
    red3: string,
    red4: string,
    red5: string,

    grey1: string,
    lightGrey1: string,

    // Extended colors
    vermilion1: string,
    vermilion2: string,
    vermilion3: string,
    vermilion4: string,
    vermilion5: string,

    rose1: string,
    rose2: string,
    rose3: string,
    rose4: string,
    rose5: string,

    violet1: string,
    violet2: string,
    violet3: string,
    violet4: string,
    violet5: string,

    indigo1: string,
    indigo2: string,
    indigo3: string,
    indigo4: string,
    indigo5: string,

    cobalt1: string,
    cobalt2: string,
    cobalt3: string,
    cobalt4: string,
    cobalt5: string,

    turquoise1: string,
    turquoise2: string,
    turquoise3: string,
    turquoise4: string,
    turquoise5: string,

    forest1: string,
    forest2: string,
    forest3: string,
    forest4: string,
    forest5: string,

    lime1: string,
    lime2: string,
    lime3: string,
    lime4: string,
    lime5: string,

    gold1: string,
    gold2: string,
    gold3: string,
    gold4: string,
    gold5: string,

    sepia1: string,
    sepia2: string,
    sepia3: string,
    sepia4: string,
    sepia5: string
}

export type IntentType = 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'default' | 'error' | 'light' ;

export interface WithThemeProps {
    theme?: ThemeInterface
}