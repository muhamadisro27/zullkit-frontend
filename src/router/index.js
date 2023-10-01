import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoryView from "../views/CategoryView.vue";
import CategoryDetailView from "../views/CategoryDetailView.vue";
import PricingView from "../views/PricingView.vue";
import LoginView from "../views/LoginView.vue";
import StudyCaseView from "../views/StudyCaseView.vue";
import RegisterView from "../views/RegisterView.vue";
import DetailsView from "../views/DetailView.vue";
import CheckoutView from "../views/CheckoutView.vue";
import SuccessView from "../views/SuccessView.vue";

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
      path: "/categories/:id",
      name: "categories_id",
      component: CategoryDetailView,
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
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/product/:id",
      name: "product",
      component: DetailsView,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutView,
    },
    {
      path: "/success",
      name: "success",
      component: SuccessView,
    },
  ],
});

export default router;
