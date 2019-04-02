import { ThemeColorMap } from './types';
import { color } from 'csx';

export const colors = {
         tangerine: "#F59100",
         pumpkine: "#ee7f01",
         greyishBrown: "#3f3b37",
         QR: "#3f3b37",
         brownGrey: "#D7D7D7",
         pinkishGrey: "#ccc8c5",
         lightGrey: "#eaeae9",
         paleGrey: "#979797",
         white: "#ffffff",
         turquoiseBlue: "#039eb2",
         oceanBlue: "#0360a8",
         paleRed: "#d9534f",
         boringGreen: "#05C591", //'#5cb85c',
         tangerine10: "#f39100",
         turquoiseDark: "#0e8c9b",
         paleYellow: "#f8f1ad",
         social: "#507cc0",
         socialDark: "#4c70a7"
       };

const colorMap: ThemeColorMap = {
  dark1: "#293953",
  dark2: "#6B4E71",
  dark3: "#829399",

  darkGray1: "#182026",
  darkGray2: "#202b33",
  darkGray3: "#293742",
  darkGray4: "#30404d",
  darkGray5: "#394b59",

  gray1: "#5c7080",
  gray2: "#738694",
  gray3: "#8a9ba8",
  gray4: "#a7b6c2",
  gray5: "#bfccd6",

  lightGray1: "#ced9e0",
  lightGray2: "#d8e1e8",
  lightGray3: "#e1e8ed",
  lightGray4: "#ebf1f5",
  lightGray5: "#f5f8fa",

  light1: "#34E4EA",
  light2: "#D6DBB2",
  light3: "#6D72C3",

  default: colors.pinkishGrey,
  defaultActive: color(colors.brownGrey)
    .darken(0.1)
    .toHexString(),
  defaultBorder: colors.brownGrey,
  defaultLight: color(colors.brownGrey)
    .lighten(0.5)
    .toHexString(),
  defaultHoverBorder: colors.pinkishGrey,
  defaultFg: colors.white,
  defaultDark: colors.brownGrey,
  defaultHoverActive: colors.brownGrey,
  defaultHover: colors.brownGrey,
  defaultHoverFg: colors.white,

  primary: colors.tangerine,
  primaryActive: color(colors.tangerine)
    .darken(0.1)
    .toHexString(),
  primaryBorder: colors.tangerine,
  primaryHoverBorder: colors.tangerine,
  primaryFg: colors.white,
  primaryDark: colors.pumpkine,
  primaryLight: color(colors.tangerine)
    .lighten(0.4)
    .toHexString(),
  primaryHover: colors.pumpkine,
  primaryHoverActive: colors.pumpkine,
  primaryHoverFg: colors.white,

  secondary: "transparent",
  secondaryActive: color(colors.tangerine)
    .darken(0.1)
    .toHexString(),
  secondaryBorder: colors.tangerine,
  secondaryHoverBorder: colors.tangerine,
  secondaryFg: colors.tangerine,
  secondaryDark: color(colors.tangerine)
    .darken(0.1)
    .toHexString(),
  secondaryLight: color(colors.tangerine)
    .lighten(0.4)
    .toHexString(),
  secondaryHover: colors.tangerine,
  secondaryHoverActive: colors.tangerine,
  secondaryHoverFg: colors.white,

  info: colors.turquoiseBlue,
  infoActive: color(colors.turquoiseBlue)
    .darken(0.1)
    .toHexString(),
  infoBorder: colors.turquoiseDark,
  infoHoverBorder: color(colors.turquoiseDark)
    .darken(0.1)
    .toHexString(),
  infoFg: colors.white,
  infoDark: color(colors.turquoiseDark)
    .darken(0.1)
    .toHexString(),
  infoLight: color(colors.turquoiseDark)
    .lighten(0.6)
    .toHexString(),
  infoHover: color(colors.turquoiseDark)
    .darken(0.1)
    .toHexString(),
  infoHoverActive: color(colors.turquoiseDark)
    .darken(0.1)
    .toHexString(),
  infoHoverFg: colors.white,

  warning: colors.tangerine10,
  warningActive: color(colors.tangerine10)
    .darken(0.1)
    .toHexString(),
  warningBorder: colors.tangerine10,
  warningHoverBorder: color(colors.tangerine10)
    .darken(0.1)
    .toHexString(),
  warningFg: colors.white,
  warningDark: color(colors.tangerine10)
    .darken(0.1)
    .toHexString(),
  warningLight: color(colors.tangerine10)
    .lighten(0.4)
    .toHexString(),
  warningHover: color(colors.tangerine10)
    .darken(0.1)
    .toHexString(),
  warningHoverActive: color(colors.tangerine10)
    .darken(0.1)
    .toHexString(),
  warningHoverFg: colors.white,

  success: colors.boringGreen,
  successActive: color(colors.boringGreen)
    .darken(0.1)
    .toHexString(),
  successBorder: colors.boringGreen,
  successHoverBorder: color(colors.boringGreen)
    .darken(0.1)
    .toHexString(),
  successFg: colors.white,
  successDark: color(colors.boringGreen)
    .darken(0.1)
    .toHexString(),
  successLight: color(colors.boringGreen)
    .lighten(0.4)
    .toHexString(),
  successHover: color(colors.boringGreen)
    .darken(0.1)
    .toHexString(),
  successHoverActive: color(colors.boringGreen)
    .darken(0.1)
    .toHexString(),
  successHoverFg: colors.white,

  danger: colors.paleRed,
  dangerActive: color(colors.paleRed)
    .darken(0.1)
    .toHexString(),
  dangerBorder: colors.paleRed,
  dangerHoverBorder: color(colors.paleRed)
    .darken(0.1)
    .toHexString(),
  dangerFg: colors.white,
  dangerDark: color(colors.paleRed)
    .darken(0.1)
    .toHexString(),
  dangerLight: color(colors.paleRed)
    .lighten(0.4)
    .toHexString(),
  dangerHover: color(colors.paleRed)
    .darken(0.1)
    .toHexString(),
  dangerHoverActive: color(colors.paleRed)
    .darken(0.1)
    .toHexString(),
  dangerHoverFg: colors.white,

  error: colors.paleRed,
  errorActive: color(colors.paleRed)
    .darken(0.1)
    .toHexString(),
  errorBorder: colors.paleRed,
  errorHoverBorder: color(colors.paleRed)
    .darken(0.1)
    .toHexString(),
  errorFg: colors.white,
  errorDark: color(colors.paleRed)
    .darken(0.1)
    .toHexString(),
  errorLight: color(colors.paleRed)
    .lighten(0.4)
    .toHexString(),
  errorHover: color(colors.paleRed)
    .darken(0.1)
    .toHexString(),
  errorHoverActive: color(colors.paleRed)
    .darken(0.1)
    .toHexString(),
  errorHoverFg: colors.white,

  white1: "#fff",
  white2: "#f3f3f3",
  white3: "#e6e8ec",
  offwhite: "#f5f5f5",

  black1: "#0a0a0a",
  black2: "#2d2d2d",
  black3: "#555555",

  disabledBg: "#EFEFEF",
  disabledFg: "#D7D7D7",

  white: "#ffffff",

  // Core colors

  blue1: "#0e5a8a",
  blue2: "#106ba3",
  blue3: "#137cbd",
  blue4: "#2b95d6",
  blue5: "#48aff0",

  green1: "#0a6640",
  green2: "#0d8050",
  green3: "#0f9960",
  green4: "#15b371",
  green5: "#3dcc91",

  orange1: "#a66321",
  orange2: "#bf7326",
  orange3: "#d9822b",
  orange4: "#f29d49",
  orange5: "#ffb366",

  red1: "#a82a2a",
  red2: "#c23030",
  red3: "#db3737",
  red4: "#f55656",
  red5: "#ff7373",

  // Extended colors

  vermilion1: "#9e2b0e",
  vermilion2: "#b83211",
  vermilion3: "#d13913",
  vermilion4: "#eb532d",
  vermilion5: "#ff6e4a",

  rose1: "#a82255",
  rose2: "#c22762",
  rose3: "#db2c6f",
  rose4: "#f5498b",
  rose5: "#ff66a1",

  violet1: "#5c255c",
  violet2: "#752f75",
  violet3: "#8f398f",
  violet4: "#a854a8",
  violet5: "#c274c2",

  indigo1: "#5642a6",
  indigo2: "#634dbf",
  indigo3: "#7157d9",
  indigo4: "#9179f2",
  indigo5: "#ad99ff",

  cobalt1: "#1f4b99",
  cobalt2: "#2458b3",
  cobalt3: "#2965cc",
  cobalt4: "#4580e6",
  cobalt5: "#669eff",

  turquoise1: "#008075",
  turquoise2: "#00998c",
  turquoise3: "#00b3a4",
  turquoise4: "#14ccbd",
  turquoise5: "#2ee6d6",

  forest1: "#1d7324",
  forest2: "#238c2c",
  forest3: "#29a634",
  forest4: "#43bf4d",
  forest5: "#62d96b",

  lime1: "#728c23",
  lime2: "#87a629",
  lime3: "#9bbf30",
  lime4: "#b6d94c",
  lime5: "#d1f26d",

  gold1: "#a67908",
  gold2: "#bf8c0a",
  gold3: "#d99e0b",
  gold4: "#f2b824",
  gold5: "#ffc940",

  sepia1: "#63411e",
  sepia2: "#7d5125",
  sepia3: "#96622d",
  sepia4: "#b07b46",
  sepia5: "#c99765"
};

export default colorMap;