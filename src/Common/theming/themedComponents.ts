import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import {ThemeInterface} from "./types";

const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };