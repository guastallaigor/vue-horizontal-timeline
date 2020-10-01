module.exports = {
    stories: ['../stories/**/*.stories.js'],
    logLevel: 'debug',
    addons: [
      '@storybook/addon-knobs',
      '@storybook/addon-actions',
      '@storybook/addon-backgrounds',
      '@storybook/addon-viewport/register',
      '@storybook/addon-a11y'
    ]
  };
