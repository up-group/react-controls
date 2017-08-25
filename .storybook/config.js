import { configure, setAddon } from '@storybook/react';
import infoAddon, {setDefaults} from '@storybook/addon-info';

// addon-info
setDefaults({
  inline: false,
  maxPropsIntoLine: 1,
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100,
});

setAddon(infoAddon);

function loadStories() {
  require('../stories/index.jsx');
  // You can require as many stories as you need.
}

configure(loadStories, module);