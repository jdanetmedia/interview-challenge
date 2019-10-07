import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ChallengeOne from "./views/ChallengeOne.vue";
import ChallengeTwo from "./views/ChallengeTwo.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/challenge-one",
      name: "challenge-one",
      component: ChallengeOne
    },
    {
      path: "/challenge-two",
      name: "challenge-two",
      component: ChallengeTwo
    }
  ]
});
