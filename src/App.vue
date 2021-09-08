<template>
  <suspense>
    <template #default>
      <AppWrapper />
    </template>
    <template #fallback>
      <div>App is loading...</div>
    </template>
  </suspense>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { accessStore } from './store/store';
import calls from './apicalls';
import helpers from './helpers';

export default defineComponent({
  name: 'App',
  components: {
    AppWrapper: defineAsyncComponent(() => import('./views/AppWrapper.vue')),
  },

  setup() {
    let { allData, appLoading, todaysData, todaysDate } = accessStore();
    const { isDayView } = accessStore();

    (async () => {
      const data = await calls.allInfo();
      allData.value = data;
      console.log('app fetched all data:', data);
      todaysData.value = helpers.filterInfoByDay(data, todaysDate);
      console.log('app fetched todays data:', todaysData.value);
      appLoading = ref(false);
    })();

    return { isDayView, appLoading, allData, todaysData };
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
