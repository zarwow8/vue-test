import Vue from "vue";
import Router from "vue-router";
import Pay from "./Components/Pay.vue";
import His from "./Components/His.vue";
import SuccessPay from "./Components/SuccessPay.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/history",
      component: His
    },
    {
      path: "/",
      component: Pay
    },
    {
      path: "/success",
      name: "success",
      component: SuccessPay
      // beforeEnter(to, from, next) {
      //   console.log("beforeRouter1", to);

      //   if (to.params.success) {
      //     next(true);
      //     console.log("beforeRouter2");
      //   } else {
      //     next("/");
      //   }
      // }
    }
  ]
});
