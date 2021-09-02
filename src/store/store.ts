import { Ref, ref } from 'vue';

interface Reactives {
  selectedDate: Ref<number>,
  isDayView: Ref<boolean>
}

const selectedDate = ref(0);
const isDayView = ref(false)

export function accessStore(): Reactives {
  return {
    selectedDate, isDayView
  };
}

