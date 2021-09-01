<template>
  <div>
    <p>The date is September {{ selectedDate }}th</p>
  </div>
  <form action="">
    <label for="pushups-input">
      <span>How many pushups have I done today?</span
      ><input type="number" id="pushups-input"
    /></label>

    <label for="situps-input">
      <span>How many situps have I done today?</span>
      <input type="number" id="situps-input"
    /></label>

    <label for="run-input">
      <span>Did I run today?</span> <input type="checkbox" id="run-input"
    /></label>

    <label for="run-input">
      <span>Did I drink today?</span> <input type="checkbox" id="alcohol-input"
    /></label>
    <div class="button container">
      <button title="return to calendar" @click="buttonHandler">
        Return To Calendar
      </button>
      <button title="return to calendar" @click="updateLog">
        Update Today's Log
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DayView',
  props: {
    selectedDate: String,
  },
  setup(props, context) {
    const buttonHandler = () => {
      context.emit('update:isDayView');
    };
    return { buttonHandler };
  },
});
</script>

<style scoped>
label {
    display: block;
    margin: 5px;
}
</style>
