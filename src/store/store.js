import { ref } from 'vue';
const selectedDate = ref(0);
const isDayView = ref(false);
export function accessStore() {
    return {
        selectedDate, isDayView
    };
}
//# sourceMappingURL=store.js.map