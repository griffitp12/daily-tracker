<template>
  <div class="header">
    <p>
      Today is September <span class="date">{{ date }}</span>
    </p>
    <p>You have done {{ pushups }} pushups today and {{ situps }} situps.</p>
  </div>
</template>

<script lang="ts">
import { accessStore } from '@/store/store';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    console.log('mounting header');
    const { todaysData } = accessStore();
    let { appLoading } = accessStore();
    const date = new Date().getDate();
    let pushups;
    let situps;
    if (todaysData) {
      pushups = ref(todaysData.value.pushups);
      situps = ref(todaysData.value.situps);
    }

    return { date, pushups, situps, appLoading };
  },
});
</script>

<style scoped>
.header {
  border: 1px solid red;
}
.date {
  color: green;
  font-weight: 700;
}
</style>
