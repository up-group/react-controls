import React from 'react';
import { storiesOf } from '@storybook/react';
import Welcome from './Welcome';
import { configure } from '@storybook/react';

import './default.css';

storiesOf("INTRO|Up", module).add("default", () => {
  return <Welcome />;
});

const req = [
  require.context('../docs', true, /Intro.story.mdx/),
  require.context('../docs', true, /GettingStarted.story.mdx/),
  require.context('../src/Components', true, /\.stories\.(js|ts|md)x$/)
]

function loadStories() {
  req.forEach((v) => v.keys().forEach((filename) => v(filename)));
}

configure(loadStories, module);