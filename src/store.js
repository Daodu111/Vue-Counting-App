import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
  },
  getters: {
    getCount: (state) => state.count,
  },
  mutations: {
    changeCount: (state, payload) => (state.count += payload),
    reset: (state) => (state.count = 0),
  },
  actions: {
    async changeCount({ commit }, payload) {
      return Promise.resolve(commit("changeCount", payload));
    },
    async reset({ commit }) {
      return Promise.resolve(commit("reset"));
    },
  },
});

