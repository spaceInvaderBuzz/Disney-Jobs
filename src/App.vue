<template>
  
    <main-nav v-if="!navigation"></main-nav>
   
      <router-view></router-view>
    
    



</template>

<script>
import CareersHeroPage from './views/CareersHeroPage.vue';
import MainNav from './components/MainNav.vue';
import Home from '@/views/Home.vue';
import TheFooterVue from './components/TheFooter.vue';
import Films from './views/Films.vue';
import TheLoginPage from '@/views/TheLoginPage.vue';
import { mapState, mapActions } from 'pinia';
import JobApplication from './views/JobApplication.vue';
import { useUserStore, GET_USER_PROFILE_IMG, GET_CURRENT_USER, SET_PROFILE_INITIALS, CHANGE_USER} from '@/piniastores/user';



export default {

  
  name: 'App',
  components: { CareersHeroPage, JobApplication, MainNav, Home, TheFooterVue, Films, TheLoginPage },
  data(){
    return {
      navigation: null,
    };
  },
  async created(){  //as soon as the app is loadied, we are reachign ut to firebase, grabbig the data, and importing it onto the pinia store
    await this.CHANGE_USER();
    if(this.user){
      await this.GET_CURRENT_USER();
      await this.GET_USER_PROFILE_IMG();
    };
    
    this.checkRoute();
    
 
  },
 methods: {
  ...mapActions(useUserStore, [GET_USER_PROFILE_IMG, GET_CURRENT_USER,SET_PROFILE_INITIALS,CHANGE_USER]),
  ...mapState(useUserStore, ["user"]),

  
  checkRoute(){
    if (this.$route.path === "/login" || this.$route.path === "/jobs/results" || this.$route.name === "JobListing" || this.$route.name === "ProfilePage") {
      this.navigation = true;
      
      return;
    } this.navigation = false;
  },
 },
 watch: {
  $route(){
    this.checkRoute();
  },
 },
};
</script>

methods: 
created(){
  
  this.GET_CURRENT_USER();
  this.SET_PROFILE_INITIALS();
  this.CHANGE_USER();
 
 
  
},

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');


.slide-enter-active,
.slide-leave-active {
  transition: 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}


* {
  font-family: 'Rubik';
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
  color: white;
  


}


</style>
