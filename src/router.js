import Vue from "vue";
import Router from "vue-router";
import Pay from "./Components/Pay.vue";
import HistoryPaied from "./Components/HistoryPaied.vue";
import SuccessPay from "./Components/SuccessPay.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/history",
      component: HistoryPaied
    },
    {
      path: "/",
      component: Pay
    },
    {
      path: "/success",
      name: "success",
      component: SuccessPay
    }
  ]
});
