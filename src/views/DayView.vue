<template>
  <form action="" id="input-form">
    <label for="pushups-input">
      <span>How many pushups did I do on {{currentMonth}} {{ selectedDate }}? </span
      ><input type="number" id="pushups-input" v-model="pushups"
    /></label>

    <label for="situps-input">
      <span>How many situps did I do on {{currentMonth}} {{ selectedDate }}? </span>
      <input type="number" id="situps-input" v-model="situps"
    /></label>

    <label for="run-input">
      <span>Did I run on {{currentMonth}} {{ selectedDate }}? </span>
      <input type="checkbox" id="run-input" v-model="run"
    /></label>

    <label for="run-input">
      <span>Did I drink on {{currentMonth}} {{ selectedDate }}? </span>
      <input type="checkbox" id="alcohol-input" v-model="alcohol"
    /></label>

    <div class="button container">
      <button @click="toggleIsDayView">
        Return To Calendar
      </button>
      <button @click="updateLog">
        Update {{currentMonth}} {{selectedDate}} Log
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { accessStore } from '../store/store';
import calls from '../../utils/apicalls';
import helpers from '../../utils/helpers';


export default defineComponent({
  name: 'DayView',
  setup() {
    const {
      selectedDate,
      isDayView,
      allData,
      todaysData,
      todaysDate,
      currentMonth,
    } = accessStore();
    let pushups = ref(0);
    let situps = ref(0);
    let run = ref(false);
    let alcohol = ref(false);

    // eslint-disable-next-line no-undef
    const selectedDateData: GraphQLDataObj = helpers.filterInfoByDay(
      allData.value,
      selectedDate.value
    );

    if (selectedDateData) {
      pushups = ref(selectedDateData.pushups);
      situps = ref(selectedDateData.situps);
      run = ref(selectedDateData.run);
      alcohol = ref(selectedDateData.alcohol);
    }

    const toggleIsDayView = () => {
      isDayView.value = false;
    };

    const updateLog = async (event: Event) => {
      event.preventDefault();
      // eslint-disable-next-line no-undef
      let data: GraphQLDataObj = {
        date: selectedDate.value,
        pushups: pushups.value,
        situps: situps.value,
        run: run.value,
        alcohol: alcohol.value,
      };
      await calls.updateData(data);
      allData.value = await calls.allInfo();
      todaysData.value = helpers.filterInfoByDay(allData.value, todaysDate);
      toggleIsDayView();
    };

    if (selectedDate) {
      calls.addDate(selectedDate.value);
    }

    return {
      toggleIsDayView,
      updateLog,
      pushups,
      situps,
      run,
      alcohol,
      selectedDate,
      currentMonth,
    };
  },
});
</script>

<style scoped>
label {
  display: block;
  margin: 5px;
}
</style>
