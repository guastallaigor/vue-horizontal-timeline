<template>
  <div class="vue-horizontal-timeline" :style="setTimelineStyles">
    <section class="timeline">
      <ol>
        <li
          v-for="(item, i) in items"
          :key="i"
          :style="setLineColor"
          :class="[{'add-step': $scopedSlots.default || item[titleAttr] || item[contentAttr]}, item.stepCssClass]"
        >
          <div
            v-if="$scopedSlots.default || item[titleAttr] || item[contentAttr]"
            class="time"
            :class="[getTimeClass(item), item.boxCssClass]"
            :style="getTimeStyles" @click="cardClicked(item)"
          >
            <slot v-if="$scopedSlots.default" v-bind:item="item"/>
            <span
              class="title"
              v-if="!$scopedSlots.default && item[titleAttr]"
              :class="getTitleClasses">
              {{ item[titleAttr] | textSubstr(titleSubstr) }}
            </span>
            <span
              class="content"
              v-if="!$scopedSlots.default && item[contentAttr]"
              :class="getContentClasses">
              {{ item[contentAttr] | textSubstr(contentSubstr) }}
            </span>
          </div>
        </li>
        <li :style="setLineColor"></li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: 'VueHorizontalTimeline',
  props: {
    items: {
      type: Array,
      required: true
    },
    itemSelected: {
      type: Object,
      default: () => ({})
    },
    itemUniqueKey: {
      type: String,
      default: ''
    },
    titleAttr: {
      type: String,
      default: 'title'
    },
    titleCentered: {
      type: Boolean,
      default: false
    },
    titleClass: {
      type: String,
      default: ''
    },
    titleSubstr: {
      type: Number,
      default: 18
    },
    contentAttr: {
      type: String,
      default: 'content'
    },
    contentCentered: {
      type: Boolean,
      default: false
    },
    contentClass: {
      type: String,
      default: ''
    },
    contentSubstr: {
      type: Number,
      default: 250
    },
    minWidth: {
      type: String,
      default: '200px'
    },
    minHeight: {
      type: String,
      default: ''
    },
    timelinePadding: {
      type: String,
      default: ''
    },
    timelineBackground: {
      type: String,
      default: ''
    },
    lineColor: {
      type: String,
      default: '#03A9F4'
    },
    clickable: {
      type: [String, Boolean],
      default: true
    }
  },
  filters: {
    textSubstr (value, qtd = 250, mask = '...') {
      return value && value.length > qtd ? `${value.substring(0, qtd)}${mask}` : value
    }
  },
  computed: {
    setTimelineStyles () {
      const { timelineBackground, timelinePadding } = this
      const styleObj = {}

      if (timelinePadding) {
        styleObj.padding = timelinePadding
      }

      if (timelineBackground) {
        styleObj.background = timelineBackground
      }

      return styleObj
    },
    setLineColor () {
      const { lineColor } = this

      return lineColor ? `background: ${lineColor}` : ''
    },
    getTimeStyles () {
      const { minWidth, minHeight, clickable } = this
      const styleObj = {
        minWidth,
        minHeight
      }

      if (!clickable) {
        styleObj.cursor = 'default'
      }

      return styleObj
    },
    getTitleClasses () {
      const { titleClass, titleCentered } = this

      return titleClass || { 'text-center': titleCentered }
    },
    getContentClasses () {
      const { contentClass, contentCentered } = this

      return contentClass || { 'text-center': contentCentered }
    }
  },
  methods: {
    cardClicked (item) {
      if (!this.clickable) {
        return
      }

      this.$emit('update:itemSelected', { ...item })
      this.$emit('click', item)
    },
    getTimeClass (item) {
      const { itemUniqueKey, itemSelected } = this

      if (itemUniqueKey && itemSelected) {
        return {
          'border-blue': item[itemUniqueKey] === itemSelected[itemUniqueKey]
        }
      }

      return {}
    }
  }
}
</script>

<style src="../assets/css/style.min.css" scoped></style>

<style>
.has-color-red {
  color: red !important;
}

.has-step-green::after {
  background: green !important;
}
</style>
