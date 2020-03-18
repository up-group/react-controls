import * as React from 'react'
import { UpThemeProvider, UpDefaultTheme, UpNotification } from "../..";

export const storybookMainBodyStyles = {
  padding : '30px'
}

export const getRootContainer = (componentName : string) => (storyFn) => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <div style={storybookMainBodyStyles}>
        <UpNotification>
          Présentation du composant <code style={{ marginLeft : "8px"}}><strong>{componentName}</strong></code>
        </UpNotification>
        { storyFn() }
      </div>
    </UpThemeProvider>
  );