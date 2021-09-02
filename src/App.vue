<template>
  <div class="header"><p>This is the app</p></div>
  <CalendarView v-if="!isDayView" />
  <DayView v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CalendarView from './views/CalendarView.vue';
import DayView from './views/DayView.vue';
import { accessStore } from './store/store';

export default defineComponent({
  name: 'App',
  components: {
    CalendarView,
    DayView,
  },
  setup() {
    const { isDayView } = accessStore();

    return { isDayView };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  border: 1px solid red;
}
</style>
