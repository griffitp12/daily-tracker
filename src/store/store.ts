import { Ref, ref } from 'vue';

interface Reactives {
  selectedDate: Ref<number>,
  isDayView: Ref<boolean>
  appLoading: Ref<boolean>
  allData: Ref< [] | GraphQLDataObj[]>
  todaysData: Ref<GraphQLDataObj>
}

const selectedDate = ref(0);
const isDayView = ref(false)
const allData = ref([])
const todaysData = ref({date: 0, pushups: 0, situps: 0, alcohol: false, run: false})
const appLoading = ref(true)

export function accessStore(): Reactives {
  return {
    selectedDate, isDayView, allData, appLoading, todaysData
  };
}

