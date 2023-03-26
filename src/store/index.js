import Vue from "vue";
import Vuex from "./cus-vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    add(state) {
      state.count++;
    },
  },
  actions: {
    add({ state }, payload) {
      //模拟请求
      setTimeout(function () {
        state.count += payload;
      }, 1000);
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
});
