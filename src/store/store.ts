import { Ref, ref } from 'vue';
import constants from '../../utils/constants'

interface StoreContents {
  selectedDate: Ref<number>,
  isDayView: Ref<boolean>
  appLoading: Ref<boolean>
  allData: Ref< [] | GraphQLDataObj[]>
  todaysData: Ref<GraphQLDataObj>
  todaysDate: number
  monthlyUntrackedDates: number[]
  currentMonth: string
}

const selectedDate = ref(0);
const isDayView = ref(false)
const allData = ref([])
const todaysData = ref({date: 0, pushups: 0, situps: 0, alcohol: false, run: false})
const appLoading = ref(false)
const todaysDate = new Date().getDate()
const monthlyUntrackedDates = [4, 11, 16, 18, 25]
const currentMonth = constants.currentMonth

export function accessStore(): StoreContents {
  return {
    selectedDate, isDayView, allData, appLoading, todaysData, todaysDate, monthlyUntrackedDates, currentMonth
  };
}

