// src/views/Counter.vue

<template>
  <div class="counter">
    <div class="count">{{ count }}</div>
    <div class="buttons">
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="reset">Reset</button>
    </div>
    <div class="input">
      <input type="number" v-model="value" />
      <button @click="setValue(value)">Set Value</button>
    </div>
  </div>
</template>

<script>
import { useCounter } from "../composables/useCounter";

export default {
  name: "Counter",
  setup() {
    const { count, increment, decrement, reset, setValue, value } = useCounter();

    return { count, increment, decrement, reset, setValue, value };
  },
};
</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3rem;
  margin-top: 2rem;
}

.count {
  font-size: 6rem;
  margin-bottom: 1rem;
}

.buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.input {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}
</style>
