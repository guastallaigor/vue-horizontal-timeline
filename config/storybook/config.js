/* eslint-disable import/no-extraneous-dependencies */
import {
  addDecorator,
  configure
} from '@storybook/vue'

const req = require.context('../../stories', true, /.stories.js$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
