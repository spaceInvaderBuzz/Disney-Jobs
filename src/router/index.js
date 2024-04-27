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
import CareersHeroPage from '@/views/CareersHeroPage.vue';
import MoviePage from '@/views/MoviePage.vue';
import ApplicationSuccessful from '@/views/ApplicationSuccessful.vue'
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import 'firebase/compat/storage';
import db from "@/firebase/firebaseInit";

const requireAuth = (to, from, next) => {
  let user = firebase.auth().currentUser;
  if(!user){
    next({name: 'Home'})
  } else {
    next()
  }
  
};
const requireAuthApply = (to, from, next) => {
  let userApply = firebase.auth().currentUser;
  if(!userApply){
    next({path: '/login'})
  } else {
    next()
  }
  
};



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
      beforeEnter: requireAuth,
    },
    {
      path: "/apply/:id",
      name: "JobApplication",
      component: JobApplication,
      beforeEnter: requireAuthApply,
    },
    {
      path: "/careers",
      name: "CareersHeroPage",
      component: CareersHeroPage,
    },
    {
      path: "/films/results/:id",
      name: "MoviePage",
      component: MoviePage,
      props: true
    },
    {
      path: "/success",
      name: "ApplicationSuccessful",
      component: ApplicationSuccessful,
    },
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
