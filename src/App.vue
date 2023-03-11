<template>
  <div id="app">
    <router-view></router-view>
  </div>

  <div class="container">
    <h1>Counter App</h1>
    <div class="counter">
      <div class="count">{{ count }}</div>
      <div class="buttons">
        <button class="btn" @click="increment">+</button>
        <button class="btn" @click="decrement">-</button>
        <button class="btn" @click="reset">Reset</button>
      </div>
      <div class="input">
        <input type="number" v-model="value" />
        <button class="btn" @click="setValue(value)">Set Value</button>
      </div>
    </div>
  </div>
</template>

<script>
import useCounter from "./composables/useCounter";
import { useRoute, useRouter } from "vue-router";
import router from "./router";


export default {
  name: "App",
  setup() {
    const { count, increment, decrement, reset, setValue } = useCounter();

    return { count, increment, decrement, reset, setValue, value: 0 };
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3rem;
  padding: 2rem;
  background-color: #f7f7f7;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.count {
  font-size: 6rem;
  margin-bottom: 1rem;
}

.buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 2rem;
  padding: 1rem;
  transition: all 0.2s ease-in-out;
}

.btn:hover {
  background-color: #3e8e41;
}

.increment {
  background-color: #4CAF50;
}

.decrement {
  background-color: #f44336;
}

.reset {
  background-color: #2196F3;
}

.set-value {
  background-color: #9c27b0;
}

.input {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

input {
  font-size: 2rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

input:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
@media only screen and (max-width: 600px) {
  .counter {
    font-size: 1.5rem;
    padding: 0.5rem;
  }
}
</style>

