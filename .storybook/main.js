module.exports = {
  stories: [
    '../docs/**/*.story.tsx',
    '../docs/**/*.story.mdx',
    '../**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource'
  ],
};
