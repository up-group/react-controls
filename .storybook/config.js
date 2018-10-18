import { configure, setAddon, addDecorator } from '@storybook/react'
import infoAddon, {setDefaults} from '@storybook/addon-info'
import { baseFonts } from '@storybook/components';

import { withKnobs } from '@storybook/addon-knobs/react';
addDecorator(withKnobs)

// addon-info
setDefaults({
  inline: false,
  maxPropsIntoLine: 1,
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100,
  styles: {
    button: {
      base: {
        fontFamily: 'sans-serif',
        fontSize: '12px',
        display: 'block',
        position: 'fixed',
        border: 'none',
        background: '#28c',
        color: '#fff',
        padding: '5px 15px',
        cursor: 'pointer',
      },
      topRight: {
        top: 0,
        right: 0,
        borderRadius: '0 0 0 5px',
      },
    },
    info: {
      position: 'fixed',
      background: '#FEFEFE',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      padding: '0 40px',
      overflow: 'auto',
      zIndex: 99999,
      boxSizing:'border-box',
      width: '98%',
    },
    children: {
      position: 'relative',
      zIndex: 0,
    },
    infoBody: {
      ...baseFonts,
      fontWeight: 300,
      lineHeight: 1.45,
      fontSize: '15px',
      border: '1px solid #eee',
      padding: '20px 40px 40px',
      borderRadius: '2px',
      backgroundColor: '#fff',
      marginTop: '20px',
      marginBottom: '20px',
    },
    infoContent: {
      marginBottom: 0,
    },
    infoStory: {},
    jsxInfoContent: {
      borderTop: '1px solid #eee',
      margin: '20px 0 0 0',
    },
    header: {
      h1: {
        margin: 0,
        padding: 0,
        fontSize: '35px',
      },
      h2: {
        margin: '0 0 10px 0',
        padding: 0,
        fontWeight: 400,
        fontSize: '22px',
      },
      body: {
        borderBottom: '1px solid #eee',
        paddingTop: 10,
        marginBottom: 10,
      },
    },
    source: {
      h1: {
        margin: '20px 0 0 0',
        padding: '0 0 5px 0',
        fontSize: '25px',
        borderBottom: '1px solid #EEE',
      },
    },
    propTableHead: {
      margin: '20px 0 0 0',
    },
  },
});

setAddon(infoAddon);

function loadStories() {
  require('../stories/index.jsx');
  // You can require as many stories as you need.
}

configure(loadStories, module);