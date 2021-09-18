<template>
  <div class="create-component-list">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="component-item"
      @click="onItemClick(item)"
    >
      <l-text v-bind="item"></l-text>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import LText from '../components/LText.vue'

export default defineComponent({
  name: 'components-list',
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  emits: ['on-item-click'],
  components: {
    LText,
  },
  setup(props, { emit }) {
    const onItemClick = (data: any) => {
      emit('on-item-click', data)
    }

    return {
      onItemClick,
    }
  },
})
</script>
