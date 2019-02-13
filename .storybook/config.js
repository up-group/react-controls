import { configure, setAddon, addDecorator} from '@storybook/react'
import {
  withInfo
} from '@storybook/addon-info';

import {
  withOptions
}
from '@storybook/addon-options';

import {
  themes
} from '@storybook/components';

addDecorator(
  withInfo({
    header: false, // Global configuration for the info addon across all of your stories.
    inline: false,
    maxPropsIntoLine: 1,
    maxPropObjectKeys: 10,
    maxPropArrayLength: 10,
    maxPropStringLength: 100,
  })
);
addDecorator(
  withOptions({
    name: 'Up', 
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    theme: 
      {
        ...themes.dark,
        overlayBackground: 'rgb(245, 145, 0)'
      } /*{
      mainBackground: 'linear-gradient(to bottom right, black, gray', // applied to root `background`
      mainBorder: '1px solid rgba(0,0,0,0.1)', // applied to panels `border`
      mainBorderColor: 'rgba(0,0,0,0.1)', // applied for most borders
      mainBorderRadius: 4, // applied to panels, buttons, inputs
      mainFill: 'rgba(255,255,255,0.89)', // applied to panels `background`
      barFill: 'rgba(255,255,255,1)', // applied to TabsBar `background`
      inputFill: 'rgba(0,0,0,0.05)', // applied to Input `background`,
      mainTextFace: '"-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Arial, freesans, sans-serif', // applied to root `font-family`
      mainTextColor: 'black', // applied to root & buttons & input `color`
      mainTextSize: 13, // applied to root,
      dimmedTextColor: 'rgba(0,0,0,0.4)', // applied in less important text
      highlightColor: '#9fdaff', // applied to indicate selection,
      successColor: '#0edf62', // applied to indicate positive,
      failColor: '#ff3f3f', // applied to indicate negative,
      warnColor: 'orange', // applied to indicate ow - ow,
      monoTextFace: '"-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Arial, freesans, sans-serif', // applied to pre,
      layoutMargin: 10, // applied to space panels
      overlayBackground: 'rgb(245, 145, 0)' // 'linear-gradient(to bottom right, rgba(233, 233, 233, 0.6), rgba(255, 255, 255, 0.8))', // applied to overlay `background`,
    }*/
  })
);

function loadStories() {
  require('../stories/index.jsx');
  // You can require as many stories as you need.
}

configure(loadStories, module);