import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import {ThemeInterface} from "./types";

// Création d'un nouveau module 'styled-components' caster comme utilisant notre interface de theme 
// afin que tsc l'applique à props.theme lors de l'utilisation des fonctionnalités du module 
const { default: styled, css, injectGlobal, keyframes, ThemeProvider} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };