import React from 'react';
import { storiesOf } from '@storybook/react';
import Welcome from './Welcome';
import { configure } from '@storybook/react';

import './default.css';

storiesOf("INTRO|Up", module).add("default", () => {
  return <Welcome />;
});

const req = require.context('../src/Components', true, /\.stories\.(js|ts)x$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);