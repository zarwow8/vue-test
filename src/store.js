import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    historyPay: []
  },
  mutations: {
    addPay(state, payload) {
      state.historyPay.push(payload);
    }
  },
  actions: {}
});
