import { mount } from '@vue/test-utils'
import VueSimpleTimeline from '../../src/components/VueSimpleTimeline'

describe('When I create the VueSimpleTimeline component', () => {
  const value1 = {
    title: 'Title example 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio. Nullam non condimentum orci, a cursus magna. Suspendisse tempor rutrum eros, non pellentesque odio commodo eu. Donec at volutpat enim. Vivamus mattis volutpat urna, sit amet vulputate mauris sollicitudin et. Proin consequat at dolor in sodales. Vestibulum vel porta turpis. Pellentesque sollicitudin justo est, ut dapibus felis luctus mollis. Suspendisse feugiat, metus ut auctor dictum, nulla dui fringilla nisl, a pulvinar ipsum justo non lacus. Integer vestibulum sapien metus, et congue felis efficitur iaculis. Aliquam et mi quis nulla molestie elementum. Vestibulum in nibh nibh.'
  }
  const value2 = {
    title: 'Title example 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio. Nullam non condimentum orci, a cursus magna. Suspendisse tempor rutrum eros, non pellentesque odio commodo eu. Donec at volutpat enim. Vivamus mattis volutpat urna, sit amet vulputate mauris sollicitudin et. Proin consequat at dolor in sodales. Vestibulum vel porta turpis. Pellentesque sollicitudin justo est, ut dapibus felis luctus mollis. Suspendisse feugiat, metus ut auctor dictum, nulla dui fringilla nisl, a pulvinar ipsum justo non lacus. Integer vestibulum sapien metus, et congue felis efficitur iaculis. Aliquam et mi quis nulla molestie elementum. Vestibulum in nibh nibh.'
  }
  const value3 = {
    title: 'Title example 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio. Nullam non condimentum orci, a cursus magna. Suspendisse tempor rutrum eros, non pellentesque odio commodo eu. Donec at volutpat enim. Vivamus mattis volutpat urna, sit amet vulputate mauris sollicitudin et. Proin consequat at dolor in sodales. Vestibulum vel porta turpis. Pellentesque sollicitudin justo est, ut dapibus felis luctus mollis. Suspendisse feugiat, metus ut auctor dictum, nulla dui fringilla nisl, a pulvinar ipsum justo non lacus. Integer vestibulum sapien metus, et congue felis efficitur iaculis. Aliquam et mi quis nulla molestie elementum. Vestibulum in nibh nibh.'
  }
  const items = [value1, value2, value3]
  const createTimelineWrapper = (propsData = {}, slot) => {
    return mount(VueSimpleTimeline, {
      propsData,
      slots: {
        default: slot || 'VueSimpleTimeline'
      }
    })
  }

  it('should be a Vue instance', () => {
    const wrapper = createTimelineWrapper({ items })
    expect(wrapper.find(VueSimpleTimeline).isVueInstance()).toBe(true)
  })

  it('should add a text-center class inside the title if titleCentered prop is added', () => {
    const wrapper = createTimelineWrapper({ items, titleCentered: true })
    const timelineClasses = wrapper.find('.vue-simple-timeline>section.timeline>ol>li:first-child>.time>span').classes()
    expect(timelineClasses.length).toBe(2)
    expect(timelineClasses).toContainEqual('text-center')
  })

  it('should emit a click event when clicked on any timeline card', () => {
    const wrapper = createTimelineWrapper({ items })

    const time = wrapper.find('.vue-simple-timeline>section.timeline>ol>li:first-child>.time')
    time.trigger('click')
    time.trigger('click')
    time.trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click').length).toBe(3)
  })

  it('should print html inside slot', () => {
    const html = '<p id="find-this-id">VueSimpleTimeline</p>'
    const wrapper = createTimelineWrapper({ items, hasSlot: true }, html)
    const slot = wrapper.find('p#find-this-id')

    expect(wrapper.exists()).toBe(true)
    expect(slot.exists()).toBe(true)
    expect(slot.html()).toBe(html)
  })

  it('should disable event click when clickable prop is false', () => {
    const wrapper = createTimelineWrapper({ items, clickable: false })

    const time = wrapper.find('.vue-simple-timeline>section.timeline>ol>li:first-child>.time')
    time.trigger('click')
    time.trigger('click')
    time.trigger('click')

    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('should change the color of the line inside the timeline to black when the prop lineColor is set to black', () => {
    const wrapper = createTimelineWrapper({ items, lineColor: 'black' })

    const lis = wrapper.findAll('.vue-simple-timeline>section.timeline>ol>li')
    const li1 = wrapper.find('.vue-simple-timeline>section.timeline>ol>li:first-child')
    const li2 = wrapper.find('.vue-simple-timeline>section.timeline>ol>li:nth-child(2)')
    const li3 = wrapper.find('.vue-simple-timeline>section.timeline>ol>li:nth-child(3)')

    // one more is created empty
    expect(lis.length).toBe(4)
    expect(li1.attributes().style).toBe('background: black;')
    expect(li2.attributes().style).toBe('background: black;')
    expect(li3.attributes().style).toBe('background: black;')
  })

  it('should change the background color of the timeline to black when the prop timelineBackground is set to black', () => {
    const wrapper = createTimelineWrapper({ items, timelineBackground: 'black' })

    const timeline = wrapper.find('.vue-simple-timeline')

    expect(timeline.exists()).toBe(true)
    expect(timeline.attributes().style).toBe('background: black;')
  })

  it('should change the padding of the timeline to 15em when the prop timelinePadding is set to 15em', () => {
    const wrapper = createTimelineWrapper({ items, timelinePadding: '15em' })

    const timeline = wrapper.find('.vue-simple-timeline')

    expect(timeline.exists()).toBe(true)
    expect(timeline.attributes().style).toBe('padding: 15em;')
  })

  it('should change the min-height of the timeline to 900px when the prop minHeight is set to 900px', () => {
    const wrapper = createTimelineWrapper({ items, minHeight: '900px' })

    const time = wrapper.find('.vue-simple-timeline>section.timeline>ol>li:first-child>.time')

    expect(time.exists()).toBe(true)
    // min-width 200px by default
    expect(time.attributes().style).toBe('min-width: 200px; min-height: 900px;')
  })

  it('should change the min-width of the timeline to 500px when the prop minWidth is set to 500px', () => {
    const wrapper = createTimelineWrapper({ items, minWidth: '500px' })

    const time = wrapper.find('.vue-simple-timeline>section.timeline>ol>li:first-child>.time')

    expect(time.exists()).toBe(true)
    expect(time.attributes().style).toBe('min-width: 500px;')
  })

  it('should wrap the content when it has above 50 characters and the prop contentSubstr is set to 50', () => {
    const wrapper = createTimelineWrapper({ items, contentSubstr: 50 })
    const html = `<span class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing...
          </span>`

    const content1 = wrapper.find('.vue-simple-timeline>section.timeline>ol>li:first-child>.time>span.content')
    const content2 = wrapper.find('.vue-simple-timeline>section.timeline>ol>li:nth-child(2)>.time>span.content')
    const content3 = wrapper.find('.vue-simple-timeline>section.timeline>ol>li:nth-child(3)>.time>span.content')

    expect(content1.exists()).toBe(true)
    expect(content2.exists()).toBe(true)
    expect(content3.exists()).toBe(true)
    expect(content1.html()).toBe(html)
    expect(content2.html()).toBe(html)
    expect(content3.html()).toBe(html)
  })

  it('should add a custom-class to the cards content when contentClass is set to custom-class', () => {
    const wrapper = createTimelineWrapper({ items, contentClass: 'custom-class' })

    const content1 = wrapper.find('.vue-simple-timeline>section.timeline>ol>li:first-child>.time>span.content')
    const content2 = wrapper.find('.vue-simple-timeline>section.timeline>ol>li:nth-child(2)>.time>span.content')
    const content3 = wrapper.find('.vue-simple-timeline>section.timeline>ol>li:nth-child(3)>.time>span.content')

    for (var i = 1; i <= 3; i++) {
      expect(`${content}${i}`.exists()).toBe(true)
      expect(`${content}${i}`.length).toBe(2)
      expect(`${content}${i}`).toContainEqual('custom-class')
    }
  })
})
