import {color} from 'csx';
import {create} from '@storybook/theming';
import colorMap from '../src/Common/theming/colorMap';

export default create({
    base: 'light',
    colorPrimary: colorMap.primary,
    colorSecondary: colorMap.primary,
    
    // UI
    appBg: 'white',
    appContentBg: colorMap.lightGray4,
    appBorderColor: color(colorMap.primary).darken(0.1).toHexString(),
    appBorderRadius: 4,

    // Typography
    fontBase: '"Roboto", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: colorMap.black1,
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: colorMap.black3,
    barSelectedColor: colorMap.primary,
    barBg: colorMap.white,

    // Form colors
    inputBg: colorMap.white,
    inputBorder: colorMap.lightGrey1,
    inputTextColor: colorMap.black1,
    inputBorderRadius: 4,

    brandTitle: 'Up - Design',
    brandUrl: 'https://up.coop',
    brandImage: 'http://backoffice.up.coop/app/uploads/2018/09/up-logo.png',
});
