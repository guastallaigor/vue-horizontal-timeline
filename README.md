<div align="center">
  <img src="./.github/logo.png" width="200px">
  <h1>Vue Horizontal Timeline</h1>
</div>
<p align="center">
  Just a simple horizontal timeline component made with Vue.js.
</p>
<p align="center">
  <a href="https://codepen.io/tutsplus/pen/ZKpNwm" target="_blank">Inspiration</a>
</p>

[![Version](https://img.shields.io/npm/v/vue-horizontal-timeline.svg)](https://github.com/guastallaigor/vue-horizontal-timeline/)
[![buddy pipeline](https://app.buddy.works/limaguastallaigor/vue-horizontal-timeline/pipelines/pipeline/173812/badge.svg?token=830a75b934ef2291ac702693fd25c5ce1bda7a85057312f916c28ef27699b9c1 "buddy pipeline")](https://app.buddy.works/limaguastallaigor/vue-horizontal-timeline/pipelines/pipeline/173812)
[![buddy pipeline](https://app.buddy.works/limaguastallaigor/vue-horizontal-timeline/pipelines/pipeline/173811/badge.svg?token=830a75b934ef2291ac702693fd25c5ce1bda7a85057312f916c28ef27699b9c1 "buddy pipeline")](https://app.buddy.works/limaguastallaigor/vue-horizontal-timeline/pipelines/pipeline/173811)
[![codecov](https://codecov.io/gh/guastallaigor/vue-horizontal-timeline/branch/master/graph/badge.svg)](https://codecov.io/gh/guastallaigor/vue-horizontal-timeline)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Greenkeeper badge](https://badges.greenkeeper.io/guastallaigor/vue-horizontal-timeline.svg)](https://greenkeeper.io/)
[![Downloads](https://img.shields.io/npm/dt/vue-horizontal-timeline.svg)](https://github.com/guastallaigor/vue-horizontal-timeline/)
[![Dependencies](https://img.shields.io/david/guastallaigor/vue-horizontal-timeline.svg)](https://github.com/guastallaigor/vue-horizontal-timeline/)
[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/guastallaigor)

## Demo

[![Edit Checkbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/o4o10xynoz)

## How to install

### npm

```bash
$ npm install vue-horizontal-timeline --save
```

### yarn (recommended)

```bash
$ yarn add vue-horizontal-timeline
```

## Quick start
### Vue.js

You can import in you `main.js` file

```js
import Vue from 'vue'
import VueHorizontalTimeline from 'vue-horizontal-timeline'

Vue.use(VueHorizontalTimeline)
```

Or locally in any component

```js
import { VueHorizontalTimeline } from 'vue-horizontal-timeline'

export default {
  components: {
    VueHorizontalTimeline
  }
}
```

### Nuxt.js

You can import as a Nuxt.js plugin

`~/plugins/vue-horizontal-timeline.js`
```js
import Vue from 'vue'
import VueHorizontalTimeline from 'vue-horizontal-timeline'

Vue.use(VueHorizontalTimeline)
```

and then import it in your `nuxt.config.js` file
```js
plugins: [
    '~/plugins/vue-horizontal-timeline.js'
]
```

## Basic usage

```html
<template>
  <vue-horizontal-timeline :items="items"/>
</template>

<script>
export default {  
  data() {
    const example1 = {
      title: 'Title example 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio.'
    }
    const example2 = {
      title: 'Title example 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio.'
    }
    const example3 = {
      title: 'Title example 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio.'
    }
    const items = [example1, example2, example3]

    return { items }
  }
}
</script>
```

## Props

| Property name       | Type    | Default   | Description                                                                                    |
|---------------------|--------:|:---------:|------------------------------------------------------------------------------------------------|
| items               | Array   | null      | Array of objects to be displayed. Must have at least a content property                        |
| item-selected       | Object  | {}        | Object that is set when it is clicked. Note that `clickable` prop must be set to true          |
| item-unique-key     | String  | ''        | Key to set a blue border to the card when it is clicked (`clickable` prop must be set to true) |
| title-attr          | String  | 'title'   | Name of the property inside the objects, that are in the items array, to set the cards title   |
| title-centered      | Boolean | false     | Centralizes the cards title                                                                    |
| title-class         | String  | ''        | If you want to set a custom class to the cards title, set it here                              |
| title-substr        | String  | 18        | Number of characters to display inside the cards title. Above this, will set a '...' mask      |
| content-attr        | String  | 'content' | Name of the property inside the objects, that are in the items array, to set the cards content |
| content-centered    | Boolean | false     | Centralizes all the cards content text                                                         |
| content-class       | String  | ''        | If you want to set a custom class to the cards content, set it here                            |
| content-substr      | String  | 250       | Number of characters to display inside the cards content. Above this, will set a '...' mask    |
| has-slot            | String  | true      | Set to true if you pass a `<slot>` to override `title` and `content` attributes                |
| min-width           | String  | '200px'   | Min-width of the timeline                                                                      |
| min-height          | String  | ''        | Min-height of the timeline                                                                     |
| timeline-padding    | String  | ''        | Padding of the timeline                                                                        |
| timeline-background | String  | '#E9E9E9' | Background color of the whole timeline                                                         |
| line-color          | String  | '#03A9F4' | Color of the line inside the timeline                                                          |
| clickable           | Boolean | true      | Makes the card clickable that returns the object                                               |

## Development

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/guastallaigor/vue-horizontal-timeline/issues)

Fork the project and enter this commands in your terminal

```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/vue-horizontal-timeline.git
cd vue-horizontal-timeline
yarn
```

### Storybook
For visual testing, this project contains storybook which you can run by doing the next command
```sh
$ yarn storybook:serve
```

### Jest
Before making the PR, if you changed something that needs to be tested, please make the tests inside the `tests/unit` folder.

To run the tests, you can use the next command

```sh
$ yarn test:unit
```

### Commitlint
This project follows the [commitlint](https://github.com/conventional-changelog/commitlint) guidelines, with minor changes.

You can commit using `npm run commit` to help you with that.

There's a `pre-push` hook that runs all the unit tests before you can push it.

If an error occurs, you can use the `npm run commit:retry` command that runs the previous `npm run commit` that you already filled.

## TODO

* [X] Add 100% test coverage
* [X] Add demo website/code pen
* [X] Publish in npm

<a href="https://www.buymeacoffee.com/guastallaigor" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## License

MIT © [guastallaigor](https://github.com/guastallaigor/vue-horizontal-timeline/blob/master/LICENSE)
