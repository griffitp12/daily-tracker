<template>
  <div class="header"><p>This is the app</p></div>
  <CalendarView v-if="!isDayView" @update:selectedDay="clickedDateHandler" />
  <DayView
    v-else
    :selectedDate="selectedDate"
    @update:isDayView="toggleIsDayView"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CalendarView from './views/CalendarView.vue';
import DayView from './views/DayView.vue'

export default defineComponent({
  name: 'App',
  components: {
    CalendarView, DayView
  },
  setup() {
    let isDayView = ref(false);
    let selectedDate = ref(0);

    const toggleIsDayView = () => {
      isDayView.value = !isDayView.value;
    };

    const clickedDateHandler = (date: string) => {
      selectedDate.value = parseInt(date);
      toggleIsDayView();
    };

    return { isDayView, clickedDateHandler, selectedDate, toggleIsDayView };
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
