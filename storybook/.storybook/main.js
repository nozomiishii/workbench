module.exports = {
  stories: ['../components/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    'storybook-addon-designs',
    {
      name: '@storybook/addon-docs/react/preset',
      options: {
        configureJSX: true,
      },
    },
  ],
};
