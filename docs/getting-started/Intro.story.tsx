import * as React from 'react';
import { Meta } from '@storybook/addon-docs/blocks';
import Welcome from './Welcome';

export default {
  title: 'Docs/Intro',
};

export const Intro = () => (
  <Welcome>
    <div>
      <a href="https://npm.im/react-controls">
        <img src="https://img.shields.io/npm/v/react-controls.svg" />
      </a>
      &nbsp;&nbsp;
      <a href="https://npm.im/react-controls">
        <img src="https://badgen.net/npm/dw/react-controls" />
      </a>
      &nbsp;&nbsp;
      <a href="https://github.com/jask-oss/react-controls/blob/master/LICENSE">
        <img src="https://badgen.now.sh/badge/license/apache2" />
      </a>
      &nbsp;&nbsp;
      <a href="https://bundlephobia.com/result?p=react-controls">
        <img src="https://badgen.net/bundlephobia/minzip/react-controls" />
      </a>
      <a href="https://github.com/jask-oss/react-controls">
        <img alt="GitHub stars" src="https://img.shields.io/github/stars/jask-oss/react-controls?style=social" />
      </a>
      <p>
        react-controls is a modular UI component library that leverages React natively for rendering one of the best set
        of rich components. The library provides an easy way to get started creating complex SPA without sacrificing
        customization ability.
      </p>
    </div>
  </Welcome>
);
