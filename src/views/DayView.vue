<template>
  <div>
    <p>The date is September {{ selectedDate }}</p>
  </div>
  <form action="" id="input-form">
    <label for="pushups-input">
      <span>How many pushups have I done today?</span
      ><input type="number" id="pushups-input" v-model="pushups"
    /></label>

    <label for="situps-input">
      <span>How many situps have I done today?</span>
      <input type="number" id="situps-input" v-model="situps"
    /></label>

    <label for="run-input">
      <span>Did I run today?</span>
      <input type="checkbox" id="run-input" v-model="run"
    /></label>

    <label for="run-input">
      <span>Did I drink today?</span>
      <input type="checkbox" id="alcohol-input" v-model="alcohol"
    /></label>

    <div class="button container">
      <button @click="buttonHandler">
        Return To Calendar
      </button>
      <button @click="updateLog">
        Update Today's Log
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { accessStore } from '../store/store' 
import calls from '../apicalls'

export default defineComponent({
  name: 'DayView',
  setup() {
    const { selectedDate, isDayView } = accessStore()

    calls.getDataByDate(selectedDate.value)

    let pushups = ref(0);
    let situps = ref(0);
    let run = ref(false);
    let alcohol = ref(false);

    const buttonHandler = () => {
      isDayView.value = false
    };

    const updateLog = (event: Event) => {
      event.preventDefault();
      let data = {
        date: selectedDate.value,
        pushups: pushups.value,
        situps: situps.value,
        run: run.value,
        alcohol: alcohol.value
      }
      calls.updateData(data)
    };

    if (selectedDate) {
      calls.addDate(selectedDate.value);
    }

    return { buttonHandler, updateLog, pushups, situps, run, alcohol, selectedDate };
  },
});
</script>

<style scoped>
label {
  display: block;
  margin: 5px;
}
</style>
