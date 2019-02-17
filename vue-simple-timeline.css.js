import VueSimpleTimeline from './src/components/VueSimpleTimeline.vue'

// Export components
const Components = {
  VueSimpleTimeline
}

const VueSimpleTimeline = {
  install (Vue) {
    Vue.component('VueSimpleTimeline', VueSimpleTimeline)
  }
}

// Export as a plugin
export default VueSimpleTimeline
