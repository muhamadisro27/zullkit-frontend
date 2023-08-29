import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoryView from "../views/CategoryView.vue";
import PricingView from "../views/PricingView.vue";
import LoginView from "../views/LoginView.vue";
import StudyCaseView from "../views/StudyCaseView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categories",
      name: "categories",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CategoryView,
    },
    {
      path: "/pricing",
      name: "pricing",
      component: PricingView,
    },
    {
      path: "/study-case",
      name: "study-case",
      component: StudyCaseView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

export default router;
