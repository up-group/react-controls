module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  stories: ['../docs/**/*.story.@(ts|md)x', '../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-storysource', '@storybook/addon-essentials'],
  staticDirs: ['../public'],
  webpackFinal: async config => {
    const configWithoutAssets = config.module.rules.filter(r => r.type !== 'asset/resource');
    configWithoutAssets.push({
      test: /\.(ttf|woff|woff2)(\?.*)?$/,
      type: 'asset/inline',
      generator: { filename: 'fonts/[path][name][ext]' },
    });

    configWithoutAssets.push({
      test: /\.(eot)(\?.*)?$/,
      type: 'asset/resource',
      generator: { filename: 'fonts/[path][name][ext]' },
    });

    configWithoutAssets.push({
      test: /\.(jpe?g|gif|png)(\?.*)?$/,
      type: 'asset/resource',
      generator: { filename: 'img/[path][name][ext]' },
    });

    configWithoutAssets.push({
      test: /\.svg$/,
      type: 'asset/inline',
      generator: { filename: 'icons/[path][name][ext]' },
    });

    return config;
  },
  core: {
    builder: {
      name: 'webpack5',
      options: {
        fsCache: true,
      },
    },
  },
};
