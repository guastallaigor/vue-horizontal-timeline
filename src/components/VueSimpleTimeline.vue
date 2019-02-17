<template>
  <div class="vue-simple-timeline" :style="setTimelineStyles">
    <section class="timeline">
      <ol>
        <li v-for="(item, i) in items" :key="i" @click="cardClicked(item)" :style="setLineColor">
          <div class="time" :class="getTimeClass(item)" :style="getTimeStyles">
            <slot v-if="hasSlot"/>
            <span
              class="title"
              v-if="!hasSlot && item[titleAttr]"
              :class="getTitleClasses">
              {{ item[titleAttr] | textSubstr(titleSubstr) }}
            </span>
            <span
              class="content"
              v-if="!hasSlot && item[contentAttr]"
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
  name: 'VueSimpleTimeline',
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
    hasSlot: {
      type: Boolean,
      default: false
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
      default: '#E9E9E9'
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
      if (!value) return ''

      return value.length > qtd ? `${value.substring(0, qtd)}${mask}` : value
    }
  },
  computed: {
    itemComp: {
      get () {
        return this.itemSelected
      },
      set (value) {
        this.$emit('update:itemSelected', value)
      }
    },
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

      this.itemComp = { ...item }
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

<style lang="scss" scoped>
@keyframes triangle-odd {
  100% {
    filter: drop-shadow(4px 2px 1px rgba(0,0,0,0.2))drop-shadow(2px 4px 0px rgba(0,0,0,0.14));
  }
}

@keyframes triangle-even {
  100% {
    filter: drop-shadow(4px -1px 1px rgba(0,0,0,0.2));
  }
}

@mixin add-blue-drop-shadow() {
  filter: drop-shadow(-1px 0px 0 #03A9F4)drop-shadow(1px 1px 0 #03A9F4)drop-shadow(0px -1px 0 #03A9F4);
}

$background-color: #E9E9E9;
$marker: #E91E63;
$line: #03A9F4;

.vue-simple-timeline {
  position: relative;
  background: $background-color;
  width: 100%;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);

  .text-center {
    text-align: center;
  }

  .timeline {
    white-space: nowrap;
    overflow-x: auto;
    padding: 9em 0;
    height: inherit;

    .title {
      display: block;
      font-size: 1.4rem;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .content {
      display: block;
      font-size: 1rem;
      margin-bottom: 4px;
      overflow: hidden;
    }

    ol {
      font-size: 0;
      width: 100%;
      padding: 100px 0 120px 0px;
      transition: all .5s;

      li {
        position: relative;
        display: inline-block;
        list-style-type: none;
        width: 180px;
        height: 3px;
        background: $line;

        &:last-child {
          width: 330px;
        }

        &:not(:last-child) {
          padding-right: 0px;
          margin-right: 0px;

          &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: calc(100% - 140px);
            bottom: 0;
            width: 14px;
            height: 14px;
            transform: translateY(-50%);
            border-radius: 50%;
            background: $marker;
            border: 1px solid #fff;
          }
        }

        .time {
          position: absolute;
          left: 3em;
          padding: 10px;
          font-size: 1rem;
          white-space: normal;
          color: black;
          background: white;
          box-shadow: 3px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0 rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
          transition: .2s all ease-out;
          cursor: pointer;

          &:hover {
            box-shadow: 6.5px 8px 3px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
          }

          &::before {
            content: '';
            position: absolute;
            top: 100%;
            left: 0;
            width: 0;
            height: 0;
            border-style: solid;
          }
        }

        &:nth-child(even) .time {
          top: calc(100% + 16px);
          border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;
          border-bottom-left-radius: 3px;

          &::before {
            top: -8px;
            border-width: 8px 0 0 8px;
            border-color: transparent transparent transparent white;
            filter: drop-shadow(1px -1px 1px rgba(0,0,0,0.2));
          }

          &:hover::before {
            animation: triangle-even .2s both;
          }

          &.border-blue {
            @include add-blue-drop-shadow();
          }
        }

        &:nth-child(odd) .time {
          top: -16px;
          transform: translateY(-100%);
          border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;
          border-top-left-radius: 3px;

          &::before {
            top: 100%;
            border-width: 8px 8px 0 0;
            border-color: white transparent transparent transparent;
            filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.2))drop-shadow(1px 1px 0px rgba(0,0,0,0.14));
          }

          &:hover::before {
            animation: triangle-odd .2s both;
          }

          &.border-blue {
            @include add-blue-drop-shadow();
          }
        }
      }
    }
  }
}
</style>
