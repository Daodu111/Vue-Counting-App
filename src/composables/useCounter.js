import { computed } from "vue";
import { useStore } from "vuex";


export default function useCounter() {
  const store = useStore();
  console.log("store", store);

  const count = computed(() => store.getters.getCount);

  const increment = () => store.dispatch("changeCount", 1);
  const decrement = () => store.dispatch("changeCount", -1);
  const reset = () => store.dispatch("reset");
  const setValue = (value) => store.dispatch("changeCount", value);

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  };
}
