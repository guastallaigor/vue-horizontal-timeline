import { create } from '@storybook/theming/create'

export default create({
  base: 'light',

  colorPrimary: '#41b883',
  colorSecondary: '#941a7f',

  // UI
  appBg: '#FDF1F1',
  appContentBg: '#FDF1F1',
  appBorderColor: '#CBD5E0',
  appBorderRadius: 4,

  // Typography
  fontBase: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#1A202C',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: '#FFFFFF',
  barBg: '#4b0f6b',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: '#1A202C',
  inputBorderRadius: 4,

  brandTitle: 'Vue Horizontal Timeline',
  brandUrl: 'https://github.com/guastallaigor/vue-horizontal-timeline',
  brandImage: 'https://raw.githubusercontent.com/guastallaigor/vue-horizontal-timeline/master/.github/logo.png'
})
