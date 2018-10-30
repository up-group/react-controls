import * as React from 'react'
import { UpThemeProvider, UpDefaultTheme, UpNotification } from "../..";
import { storybookMainBodyStyles } from "../../../stories/styles";

export const getRootContainer = (componentName : string) => (storyFn) => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <div style={storybookMainBodyStyles}>
        <UpNotification>
          Présentation du composant <code>{componentName}</code>
        </UpNotification>
        { storyFn() }
      </div>
    </UpThemeProvider>
  );