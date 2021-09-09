<template>
  <div v-if="!isFuture && date" @click="handleClickedDate" class="grid-container">
    <div class="UL grid-cell" @mouseover="hover = true">
      <p v-if="pushups" class="grid-data">{{ pushups }}</p>
      <span v-if="hover">This is a secret message.</span>
    </div>
    <div class="UR grid-cell">
      <p v-if="situps" class="grid-data">{{ situps }}</p>
    </div>
    
    <div class="LL grid-cell">
      <span v-if="didRun" class="grid-data">🏃</span>
    </div>
    <div class="LR grid-cell">
      <span v-if="didDrink" class="grid-data">🍺</span>
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
    let didRun;
    let didDrink;
    let pushups;
    let situps; 
    let hover = ref(false)

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
      didDrink = dataByDate.alcohol;
      pushups = dataByDate.pushups;
      situps = dataByDate.situps;
    }

    onMounted(checkIfFuture);

    return {
      isFuture,
      handleClickedDate,
      dataByDate,
      didRun,
      didDrink,
      pushups,
      situps,
      hover,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-container {
  cursor: pointer;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-auto-rows: 50% 50%;
  margin: 0 auto;
  height: 100%;
  width: 100%;
}
.UL {
  grid-column: 1;
  grid-row: 1;
}
.UR {
  grid-column: 2;
  grid-row: 1
}
.LL {
  grid-column: 1;
  grid-row: 2;
}
.LR {
  grid-column: 2;
  grid-row: 2;
}
.grid-data {
  margin: 0 auto;
}
.grid-cell {
  border: 1px solid black;
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
  font-weight: 200;
}
</style>
