<template>
  <div class="header">
    <p>
      Today is {{currentMonth}} <span class="date">{{ todaysDate }}</span>
    </p>
    <p>You have done {{ pushups }} pushups and {{ situps }} situps today.</p>
  </div>
</template>

<script lang="ts">
import { accessStore } from '@/store/store';
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    let { todaysData, allData, currentMonth } = accessStore();
    const todaysDate = new Date().getDate();
    let pushups = ref(0);
    let situps = ref(0);
    if (todaysData.value) {
      if (todaysData.value.pushups) {
        pushups = ref(todaysData.value.pushups);
        situps = ref(todaysData.value.situps);
      }
    }

    watch(todaysData, (data, _) => {
      todaysData.value = data;
      pushups = ref(todaysData.value.pushups);
      situps = ref(todaysData.value.situps);
    });

    return { todaysDate, pushups, situps, allData, todaysData, currentMonth };
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
