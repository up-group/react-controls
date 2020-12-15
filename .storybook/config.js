import { configure, addDecorator, addParameters} from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import centered from '@storybook/addon-centered/react';

import UpTheme from './theme' 

import './default.css'

// Customize the UI a bit
addParameters({
  docs: DocsPage,
  options: {
    theme: UpTheme,
    showPanel: false,
    panelPosition: 'right',
    storySort: (a, b) => {
      if (a[0].includes('intro')) 
      {
        return 1;
      }
      
      if (a[0].includes('--general')) 
      {
        return -1;
      }

      if (a[0].includes('docs-')) {
        if (a[0].includes('intro-')) {
          return -1;
        }

        return 0;
      }

      return 1;
    }
  }
});

// Custom center decorator that supports docs extensions
addDecorator((...args) => {
  const params = (new URL(document.location)).searchParams;
  const isInDockView = params.get('viewMode') === 'docs';

  if (isInDockView) {
    return args[0]();
  }

  return args[0](); // return centered(...args);
});

const loadStories = () => {

  const requireContexts = [
    // Ensure we load Welcome First
    require.context('../docs', true, /\.story\.tsx$/),
    require.context('../docs', true, /GettingStarted.story.mdx/),
    require.context('../docs', true, /Developing.story.mdx/),
    require.context('../docs', true, /Why.story.mdx/),
    require.context('../src/Components', true, /index.stories.mdx/),
    require.context('../src/Components', true, /\.stories\.(js|ts)x$/)
  ];

  return requireContexts ;
}

configure(loadStories(), module);
