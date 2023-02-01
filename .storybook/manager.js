import addons from '@storybook/addons';
import UpTheme from './theme';

addons.setConfig({
  theme: UpTheme,
  isFullscreen: false,
  showNav: true,
  showPanel: false,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  showRoots: true,
});
