<template>
  <div v-if="!isUntracked && date" class="grid-container">
    <div
      class="UL grid-cell"
      :style="{ backgroundColor: dynamicStyles.pushupsBG }"
    >
      <p class="grid-data">{{ pushups }}</p>
    </div>
    <div
      class="UR grid-cell"
      :style="{ backgroundColor: dynamicStyles.situpsBG }"
    >
      <p class="grid-data">{{ situps }}</p>
    </div>
    <div class="date" @click="handleClickedDate">
      {{ date }}
    </div>
    <div class="LL grid-cell" :style="{ backgroundColor: dynamicStyles.runBG }">
      <span v-if="didRun" class="grid-data">🏃</span>
    </div>
    <div
      class="LR grid-cell"
      :style="{ backgroundColor: dynamicStyles.alcoholBG }"
    >
      <span v-if="didDrink" class="grid-data">🍺</span>
    </div>
  </div>
  <div v-else class="untracked">
    <p v-if="date">{{ date }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { accessStore } from '../store/store';
import helpers from '../../utils/helpers';
import styling from '../../utils/dynamicStyling';

export default defineComponent({
  name: 'CalendarDay',
  props: {
    date: Number,
  },

  setup(props) {
    let isUntracked = ref(false);
    const {
      selectedDate,
      isDayView,
      allData,
      monthlyShabbosDates,
    } = accessStore();

    let didRun = false;
    let didDrink = false;
    let pushups = 0;
    let situps = 0;
    // eslint-disable-next-line no-undef
    let dataByDate: GraphQLDataObj | undefined;

    let dynamicStyles = {
      situpsBG: 'none',
      pushupsBG: 'none',
      runBG: 'none',
      alcoholBG: 'none',
    };

    if (props.date) {
      dataByDate = helpers.filterInfoByDay(allData.value, props.date);
    }

    if (dataByDate) {
      didRun = dataByDate.run;
      // dynamicStyles.runBG = styling.setStyleBoolean(didRun, 'run');
      didDrink = dataByDate.alcohol;
      // dynamicStyles.alcoholBG = styling.setStyleBoolean(didDrink, 'alcohol');
      pushups = dataByDate.pushups;
      dynamicStyles.pushupsBG = `rgba(64,143,64,${styling.setStyleRatioCountable(
        pushups,
        'pushups'
      )}`;
      situps = dataByDate.situps;
      dynamicStyles.situpsBG = `rgba(64,143,64,${styling.setStyleRatioCountable(
        situps,
        'situps'
      )}`;
    }

    const checkIfUntracked = (): void => {
      if (!props.date) {
        return;
      }
      const todaysDate = new Date().getDate();
      if (props.date > todaysDate || monthlyShabbosDates.includes(props.date)) {
        isUntracked.value = true;
      }
    };

    const handleClickedDate = () => {
      if (props.date) {
        selectedDate.value = props.date;
        isDayView.value = true;
      }
    };

    onMounted(checkIfUntracked);

    return {
      isUntracked,
      handleClickedDate,
      didRun,
      didDrink,
      pushups,
      situps,
      dynamicStyles,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-container {
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
  align-items: flex-start;
  justify-content: flex-start;
}
.UR {
  grid-column: 2;
  grid-row: 1;
  align-items: flex-start;
  justify-content: flex-end;
}
.LL {
  grid-column: 1;
  grid-row: 2;
  align-items: flex-end;
  justify-content: flex-start;
}
.LR {
  grid-column: 2;
  grid-row: 2;
  align-items: flex-end;
  justify-content: flex-end;
}
.grid-data {
  margin: 5px;
  font-weight: 200;
}
.grid-cell {
  border: 1px solid black;
  display: flex;
}
.date {
  position: absolute;
  display: inline-block;
  cursor: pointer;
  margin: auto;
  border-radius: 50%;
  width: 20px;
  line-height: 20px;
  padding: 10px;
  background: #fff;
  border: 3px solid #000;
  color: #000;
  text-align: center;
}
.untracked {
  background-color: gray;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
