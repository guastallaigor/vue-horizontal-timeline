import VueHorizontalTimeline from './src/components/VueHorizontalTimeline'

// Components
const Components = {
  VueHorizontalTimeline
}

const VueHorizontalTimelinePlugin = {
  install (Vue) {
    Object.keys(Components).forEach((name) => {
      Vue.component(name, Components[name])
    })
  }
}

// Export as a plugin
export default VueHorizontalTimelinePlugin

// Export as individual components
export {
  VueHorizontalTimeline
}
