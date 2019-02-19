<div align="center">
  <img src="./.github/logo.png" width="200px">
  <h1>Vue Simple Timeline</h1>
</div>
<p align="center">
  Just a simple horizontal timeline component made with Vue.js.
</p>
<p align="center">
  <a href="https://codepen.io/tutsplus/pen/ZKpNwm" target="_blank">Inspiration</a>
</p>

[![buddy pipeline](https://app.buddy.works/limaguastallaigor/vue-simple-timeline/pipelines/pipeline/173624/badge.svg?token=830a75b934ef2291ac702693fd25c5ce1bda7a85057312f916c28ef27699b9c1 "buddy pipeline")](https://app.buddy.works/limaguastallaigor/vue-simple-timeline/pipelines/pipeline/173624)
[![buddy pipeline](https://app.buddy.works/limaguastallaigor/vue-simple-timeline/pipelines/pipeline/173623/badge.svg?token=830a75b934ef2291ac702693fd25c5ce1bda7a85057312f916c28ef27699b9c1 "buddy pipeline")](https://app.buddy.works/limaguastallaigor/vue-simple-timeline/pipelines/pipeline/173623)
[![codecov](https://codecov.io/gh/guastallaigor/vue-simple-timeline/branch/master/graph/badge.svg)](https://codecov.io/gh/guastallaigor/vue-simple-timeline)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Greenkeeper badge](https://badges.greenkeeper.io/guastallaigor/vue-simple-timeline.svg)](https://greenkeeper.io/)

## How to install

### npm

```bash
$ npm install vue-simple-timeline
```

### yarn (recommended)

```bash
$ yarn add vue-simple-timeline
```

## Quick start
### Vue.js

```js
import Vue from 'vue'
import VueSimpleTimeline from 'vue-simple-timeline'

Vue.use(VueSimpleTimeline)
```

### Nuxt.js

You can import in a Nuxt.js plugin

`~/plugins/vue-simple-timeline.js`
```js
import Vue from 'vue'
import VueSimpleTimeline from 'vue-simple-timeline'

Vue.use(VueSimpleTimeline)
```

and then import it in your `nuxt.config.js` file
```js
plugins: [
    '~/plugins/vue-simple-timeline.js'
]
```

## Props

| Property name       | Type    | Default   | Description                                                                                    |
|---------------------|--------:|:---------:|------------------------------------------------------------------------------------------------|
| items               | Array   | []        | Array of objects to be displayed. Must have at least a content property                        |
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

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/guastallaigor/vue-simple-timeline/issues)

Fork the project and enter this commands in your terminal:

```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/vue-simple-timeline.git
cd vue-simple-timeline
yarn
```

### Storybook
For visual testing, this project contains storybook which you can run by doing the next command:
```sh
$ yarn storybook:serve
```

### Jest
Before making the PR, if you changed something that needs to be tested, please make the tests inside the `tests/unit` folder.

### Commitlint
This project follows the [commitlint](https://github.com/conventional-changelog/commitlint) guidelines, with minor changes.

You can commit using `npm run commit` to help you with that.

There's a `pre-push` hook that runs all the unit tests before you can push it. If an error occurs, an you can use the `npm run commit:retry` command that runs the previous `npm run commit` that you already filled.

## TODO

* [ ] Add 100% test coverage
* [ ] Add demo website/code pen
* [ ] Publish storybook
* [ ] Publish in npm

## License

MIT © [guastallaigor](https://github.com/guastallaigor/vue-simple-timeline/blob/master/LICENSE)
