module.exports = {
  stories: [
    '../docs/**/*.story.tsx',
    '../docs/**/*.story.mdx',
    '../**/*.stories.tsx',
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
    '@storybook/addon-knobs',
    '@storybook/addon-storysource'
  ],
};
