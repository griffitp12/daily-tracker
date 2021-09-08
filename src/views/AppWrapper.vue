<template>
  <Header />
  <DayView v-if="isDayView" />
  <CalendarView v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CalendarView from './CalendarView.vue';
import DayView from './DayView.vue';
import Header from '../components/Header.vue';
import { accessStore } from '../store/store'

export default defineComponent({
  components: {
    CalendarView,
    DayView,
    Header,
  },
  setup() {
      const { isDayView } = accessStore()
      return { isDayView }
  },
});
</script>
