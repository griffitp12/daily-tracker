<template class="day-container">
  <div v-if="!isFuture" @click="handleClickedDate">
    <p v-if="date">{{ date }}</p>
  </div>
  <div v-else class="future">
    <p v-if="date">{{ date }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { accessStore } from '../store/store';

export default defineComponent({
  name: 'CalendarDay',
  props: {
    date: String,
  },

  setup(props) {
    let isFuture = ref(false);
    const { selectedDate, isDayView } = accessStore()

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
      if (props.date) {
        selectedDate.value = parseInt(props.date);
        isDayView.value = true
      }
    };

    onMounted(checkIfFuture);

    return { isFuture, handleClickedDate };
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
</style>
