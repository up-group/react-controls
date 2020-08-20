import addons from '@storybook/addons';
import UpTheme from './theme';

addons.setConfig({
    theme: UpTheme,
    showPanel: true,
    panelPosition: 'right',
    isFullscreen: true,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    selectedPanel: undefined,
    initialActive: 'sidebar',
    showRoots: true,
});