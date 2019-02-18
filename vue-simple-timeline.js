import VueSimpleTimeline from './src/components/VueSimpleTimeline.vue'

// Export components
const Components = {
  VueSimpleTimeline
}

const VueSimpleTimelinePlugin = {
  install (Vue) {
    Object.keys(Components).forEach((name) => {
      Vue.component(name, Components[name])
    })
  }
}

// Export as a plugin
export default VueSimpleTimelinePlugin

// Export as individual components
export {
  VueSimpleTimeline
}
