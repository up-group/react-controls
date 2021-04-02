module.exports = {
  stories: [
    // '../docs/**/*.story.tsx',
    // '../docs/**/*.story.mdx',
    '../src/Components/Display/**/*.stories.tsx',
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    '@storybook/addon-storysource',
    '@storybook/addon-controls'
  ],
};
