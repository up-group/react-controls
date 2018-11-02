import { configure, setAddon, addDecorator} from '@storybook/react'
import { withInfo } from '@storybook/addon-info';

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

function loadStories() {
  require('../stories/index.jsx');
  // You can require as many stories as you need.
}

configure(loadStories, module);