import * as React from 'react';
import { ThemeInterface } from 'theming/types';
import { ThemeContext } from '../theming/ThemeContext';

export const useTheme = (): ThemeInterface => {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContext');
  }
  return context;
};
