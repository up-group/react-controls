import * as React from "react";
import UpDefaultTheme from "./defaultTheme";

/**
 * `createContext` contient 2 propriétés :
 * `Provider` et `Consumer`. Nous les rendons accessibles
 * via la constante `ThemeContext` et on initialise une
 * propriété par défaut "theme".
 * On exporte ce contexte afin qu'il soit exploitable par
 * d'autres composants par la suite via le `Consumer`
 */
const ThemeContext = React.createContext(UpDefaultTheme);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;