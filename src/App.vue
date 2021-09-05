<template>
  <div v-if="appLoading.value"></div>
  <div v-else>
    <Header />
    <CalendarView v-if="!isDayView" />
    <DayView v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import CalendarView from './views/CalendarView.vue';
import DayView from './views/DayView.vue';
import Header from './components/Header.vue';
import { accessStore } from './store/store';
import calls from './apicalls';
import helpers from './helpers';

export default defineComponent({
  name: 'App',
  components: {
    CalendarView,
    DayView,
    Header,
  },
  setup() {
    let { allData, appLoading, todaysData } = accessStore();
    const { isDayView } = accessStore();
    console.log('mounting app')

    onMounted(() => {
      calls.allInfo().then((data) => {
        allData.value = data;

        const todaysDate = new Date().getDate();
        todaysData.value = helpers.filterInfoByDay(allData.value, todaysDate);

        console.log('app mounted');
        appLoading = ref(false);
      });
    });

    return { isDayView, appLoading, allData };
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
