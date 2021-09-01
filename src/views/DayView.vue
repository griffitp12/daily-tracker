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
import axios from 'axios';

export default defineComponent({
  name: 'DayView',
  props: {
    selectedDate: Number,
  },
  setup(props, context) {
    let pushups = ref(0);
    let situps = ref(0);
    let run = ref(false);
    let alcohol = ref(false);

    interface DataObj {
      date: number;
      pushups: number;
      situps: number;
      alcohol: boolean;
      run: boolean;
    }

    const buttonHandler = () => {
      context.emit('update:isDayView');
    };
    const updateLog = (event: Event) => {
      event.preventDefault();
      alert("Today's log was updated!");
    };

    const addDate = async function(date: number) {
      await axios({
        method: 'POST',
        url: '/graphql',
        data: {
          query: `
          mutation{
          addDate(date: ${date})
          }`,
        },
      });
    };

    if (props.selectedDate) {
      addDate(props.selectedDate);
    }

    return { buttonHandler, updateLog, pushups, situps, run, alcohol };
  },
});
</script>

<style scoped>
label {
  display: block;
  margin: 5px;
}
</style>
