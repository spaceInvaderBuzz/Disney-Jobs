import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import FilmsVue from "@/views/Films.vue";
import FeaturedFilm from "@/views/FeaturedFilm.vue";
import TheLoginPage from "@/views/TheLoginPage.vue";
import TheRegister from "@/views/TheRegister.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import JobResultsView from "@/views/JobResultsView.vue";
import JobView from "@/views/JobView.vue";
import ProfilePage from "@/views/TheProfile.vue";
import JobApplication from '@/views/JobApplication.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  
  
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/films",
      name:"Films",
      component: FilmsVue,
    },
    {
      path: "/featured",
      name:"FeaturedFilm",
      component: FeaturedFilm,
    },
    {
      path: "/login",
      name: "TheLoginPage",
      component: TheLoginPage,
    },
    {
      path: "/register",
      name: "TheRegister",
      component: TheRegister,
    },
    {
      path: "/forgotpassword",
      name: "ForgotPassword",
      component: ForgotPassword,
    },
    {
      path: "/jobs/results",
      name: "JobResults",
      component: JobResultsView,
    },
    {
      path: "/jobs/results/:id",
      name: "JobListing",
      component: JobView,
      props: true
    },
    {
      path:"/profile",
      name:"ProfilePage",
      component: ProfilePage,
    },
    {
      path: "/apply",
      name: "JobApplication",
      component: JobApplication,
    }
  ],
  scrollBehavior(){
    return {
      top: 0, 
      left: 0,
      behavior: "smooth"
    };
  }
 
});


export default router;
