import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import { ThemeInterface } from "./types";

// Création d'un nouveau module 'styled-components' caster comme utilisant notre interface de theme 
// afin que tsc l'applique à props.theme lors de l'utilisation des fonctionnalités du module 
// La notation {default : styled} nomme par 'styled' la propriété 'default' extraite de 'styledComponents'
var styled = (styledComponents as ThemedStyledComponentsModule<ThemeInterface>).default;
var css = (styledComponents as ThemedStyledComponentsModule<ThemeInterface>).css;
var injectGlobal = (styledComponents as ThemedStyledComponentsModule<ThemeInterface>).injectGlobal;
var keyframes = (styledComponents as ThemedStyledComponentsModule<ThemeInterface>).keyframes;
var ThemeProvider = (styledComponents as ThemedStyledComponentsModule<ThemeInterface>).ThemeProvider;

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };

    