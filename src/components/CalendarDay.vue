<template class="day-container">
  <div v-if="!isFuture" @click="handleClickedDate">
    <p v-if="pushups">{{pushups}}, {{situps}}</p>
    <p v-if="date">{{ date }}</p>
    <div>
      <span v-if="didRun">🏃</span>
      <span v-if="didDrink">🍺</span>
    </div>
    
    
  </div>
  <div v-else class="future">
    <p v-if="date">{{ date }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { accessStore } from '../store/store';
import helpers from '../helpers';

export default defineComponent({
  name: 'CalendarDay',
  props: {
    date: String,
  },

  setup(props) {
    let isFuture = ref(false);
    const { selectedDate, isDayView, allData } = accessStore();
    // eslint-disable-next-line no-undef

    let numDate = 0;
    let didRun
    let didDrink
    let pushups
    let situps

    if (props.date) {
      numDate = parseInt(props.date);
      }
      

    const checkIfFuture = (): void => {
      if (!props.date) {
        return;
      }
      let numDate = parseInt(props.date);
      const todaysDate = new Date().getDate();
      if (numDate > todaysDate) {
        isFuture.value = true;
      }
    };

    const handleClickedDate = () => {
      if (numDate) {
        selectedDate.value = numDate;
        isDayView.value = true;
      }
    };

    let dataByDate = helpers.filterInfoByDay(allData.value, numDate);
    if (dataByDate) {
      didRun = dataByDate.run;
      didDrink = dataByDate.alcohol
      pushups = dataByDate.pushups
      situps = dataByDate.situps
    }

    onMounted(checkIfFuture);

    return { isFuture, handleClickedDate, dataByDate, didRun, didDrink, pushups, situps };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.day-container {
  display: flex;
  align-items: center;
}
.future {
  background-color: gray;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stat-text {
  font-weight: 200
}
</style>
