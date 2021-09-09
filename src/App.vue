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
import calls from '../utils/apicalls';
import helpers from '../utils/helpers';

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
      todaysData.value = helpers.filterInfoByDay(data, todaysDate);
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
