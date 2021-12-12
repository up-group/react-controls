module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent
          ? !/node_modules/.test(prop.parent.fileName)
          : true,
    },
  },
  stories: [
    '../docs/**/*.story.@(ts|md)x',
    '../src/**/*.stories.tsx',
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
    '@storybook/addon-controls',
  ],
};
