<template>
  <div class="container">
    <table border="1" class="calendar">
      <tr>
        <th colspan="7">September</th>
      </tr>
      <tr>
        <th>Su</th>
        <th>Mo</th>
        <th>Tu</th>
        <th>We</th>
        <th>Th</th>
        <th>Fr</th>
        <th>Sa</th>
      </tr>
      <tr>
        <th><CalendarDay /></th>
        <th><CalendarDay /></th>
        <th><CalendarDay /></th>
        <th>
          <CalendarDay date="1" @emit:clickedDate="clickedDateHandler" />
        </th>
        <th><CalendarDay date="2" /></th>
        <th><CalendarDay date="3" /></th>
        <th><CalendarDay date="4" /></th>
      </tr>
      <tr>
        <th><CalendarDay date="5" /></th>
        <th><CalendarDay date="6" /></th>
        <th><CalendarDay date="7" /></th>
        <th><CalendarDay date="8" /></th>
        <th><CalendarDay date="9" /></th>
        <th><CalendarDay date="10" /></th>
        <th><CalendarDay date="11" /></th>
      </tr>
      <tr>
        <th><CalendarDay date="12" /></th>
        <th><CalendarDay date="13" /></th>
        <th><CalendarDay date="14" /></th>
        <th><CalendarDay date="15" /></th>
        <th><CalendarDay date="16" /></th>
        <th><CalendarDay date="17" /></th>
        <th><CalendarDay date="18" /></th>
      </tr>
      <tr>
        <th><CalendarDay date="19" /></th>
        <th><CalendarDay date="20" /></th>
        <th><CalendarDay date="21" /></th>
        <th><CalendarDay date="22" /></th>
        <th><CalendarDay date="23" /></th>
        <th><CalendarDay date="24" /></th>
        <th><CalendarDay date="25" /></th>
      </tr>
      <tr>
        <th><CalendarDay date="26" /></th>
        <th><CalendarDay date="27" /></th>
        <th><CalendarDay date="28" /></th>
        <th><CalendarDay date="29" /></th>
        <th><CalendarDay date="30" /></th>
        <th><CalendarDay /></th>
        <th><CalendarDay /></th>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CalendarDay from '../components/CalendarDay.vue';

export default defineComponent({
  name: 'CalendarView',
  components: {
    CalendarDay,
  },
  setup(_, context) {
    const clickedDateHandler = (date: string) => {
      context.emit('update:selectedDay', date);
    };
    return { clickedDateHandler };
  },
});
</script>

<style scoped>
th {
  width: 10vw;
  height: 10vh;
}
.container {
  margin: auto 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
.calendar {
  width: 50%;
}
</style>
