<template>
  <div class="home">
    <h1>Welcome to My Counter App!</h1>
    <p class="description">
      This app allows you to increment, decrement, reset and set the value of a
      counter.
    </p>
    <button class="btn" @click="goToCounter">Go to Counter</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToCounter() {
      this.$router.push('../counter');
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.title {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
}

.description {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 3rem;
  text-align: center;
  color: #666;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #4caf50;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  background-color: #3d8b3d;
}

@media only screen and (max-width: 768px) {
  .title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
}
</style>
