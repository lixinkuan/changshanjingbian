import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsList from "../views/productList/productList.vue";
import ProductDetail from "../views/productDetail/productDetail.vue";
import AboutUs from "../views/aboutUs/aboutUs.vue";
import Qualification from "../views/qualification/qualification.vue";
import ContactUs from "../views/contactUs/contactUs.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products_list",
      name: "products_list",
      component: ProductsList,
    },
    {
      path: "/products_detail",
      name: "products_detail",
      component: ProductDetail,
    },
    {
      path: "/aboutUs",
      name: "aboutUs",
      component: AboutUs,
    },
    {
      path: "/qualification",
      name: "qualification",
      component: Qualification,
    },
    {
      path: "/contactUs",
      name: "contactUs",
      component: ContactUs,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
