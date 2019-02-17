/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withBackgrounds } from '@storybook/addon-backgrounds'
import VueSimpleTimeline from '../src/components/VueSimpleTimeline'

const timelineStory = storiesOf('VueSimpleTimeline', module)
  .addDecorator(withBackgrounds([
    { name: 'Blue', value: 'blue' },
    { name: 'Green', value: 'green' },
    { name: 'Yellow', value: 'yellow' },
    { name: 'Orange', value: 'orange' },
    { name: 'Red', value: 'red' },
    { name: 'Purple', value: 'purple' },
    { name: 'Black', value: 'black' },
    { name: 'White', value: 'white', default: true }
  ]))

timelineStory.add('with text', () => ({
  components: { VueSimpleTimeline },
  data: () => ({
    items: [
      {
        title: 'Title example 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio. Nullam non condimentum orci, a cursus magna. Suspendisse tempor rutrum eros, non pellentesque odio commodo eu. Donec at volutpat enim. Vivamus mattis volutpat urna, sit amet vulputate mauris sollicitudin et. Proin consequat at dolor in sodales. Vestibulum vel porta turpis. Pellentesque sollicitudin justo est, ut dapibus felis luctus mollis. Suspendisse feugiat, metus ut auctor dictum, nulla dui fringilla nisl, a pulvinar ipsum justo non lacus. Integer vestibulum sapien metus, et congue felis efficitur iaculis. Aliquam et mi quis nulla molestie elementum. Vestibulum in nibh nibh.'
      },
      {
        title: 'Title example 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio. Nullam non condimentum orci, a cursus magna. Suspendisse tempor rutrum eros, non pellentesque odio commodo eu. Donec at volutpat enim. Vivamus mattis volutpat urna, sit amet vulputate mauris sollicitudin et. Proin consequat at dolor in sodales. Vestibulum vel porta turpis. Pellentesque sollicitudin justo est, ut dapibus felis luctus mollis. Suspendisse feugiat, metus ut auctor dictum, nulla dui fringilla nisl, a pulvinar ipsum justo non lacus. Integer vestibulum sapien metus, et congue felis efficitur iaculis. Aliquam et mi quis nulla molestie elementum. Vestibulum in nibh nibh.'
      }
    ],
    item: {}
  }),
  template: `<vue-simple-timeline
    @click="action"
    :items="items"
    :item-selected.sync="item"
    itemUniqueKey="title"
    />`,
  methods: { action: action('clicked') }
}))

timelineStory.add('with JSX', () => ({
  components: { VueSimpleTimeline },
  data: () => ({
    items: [
      {
        title: 'Title example 1',
        label: 'Canada'
      },
      {
        title: 'Title example 2',
        label: 'United Kingdom'
      }
    ]
  }),
  render () {
    return <vue-simple-timeline onClick={this.action} items={this.items}>With JSX</vue-simple-timeline>
  },
  methods: { action: linkTo('clickto', 'with some emoji') }
}))
