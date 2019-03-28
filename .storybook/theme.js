import {
    color
} from 'csx';

import {
    create
} from '@storybook/theming';

import colorMap from '../src/Common/theming/colorMap'

export default create({
    base: 'light',

    colorPrimary: colorMap.primary,
    colorSecondary: colorMap.primary,

    // UI
    appBg: 'white',
    appContentBg: colorMap.primary,
    appBorderColor: color(colorMap.primary)
        .darken(0.1)
        .toHexString(),
    appBorderRadius: 4,

    // Typography
    fontBase: '"Roboto", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: 'silver',
    barSelectedColor: colorMap.primary,
    barBg: 'white',

    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 4,

    brandTitle: 'Up - Design',
    brandUrl: 'https://up.coop',
    brandImage: 'http://backoffice.up.coop/app/uploads/2018/09/up-logo.png',
});
