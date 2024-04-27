<template>
    <nav class="main-nav">
        <ul class="main-items">
            <router-link :to="{ name: 'JobResults'}" class="logo">Disney Careers</router-link>
            <router-link :to="{name: 'Home'}">Back to home</router-link>
            <div v-if="user">
              <div class="nav-split">
                <div class="loggedIn">
                  <div class="profile-email">{{ profileEmail }}</div>
                 <div class="name-and-last-name">Welcome, {{ profileFirstName }}, {{profileLastName}} {{ profileUserName }}!</div>
               </div>
               <div class="profile-info">
                
                <router-link class="profile-button" :to="{ name: 'ProfilePage'}">Profile</router-link>
                <div class="profile-button" @click="signOut">Sign Out</div>
                <div class="profile-image-container">
                  <img :src="profileImg" alt="">
                 
                </div>
               </div>
               
              </div>
              
                
               
              
                
            </div>
           
            <div v-else class="login-and-signup">
                <li><router-link :to="{ name: 'TheLoginPage' }">Log In</router-link></li>
            <li><router-link :to="{ name: 'TheRegister' }">Sign Up</router-link></li>
            </div>
            
        </ul>
    </nav>
</template>

<script>
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/storage";
import db from "@/firebase/firebaseInit";
import { mapState } from 'pinia';
import { useUserStore } from '@/piniastores/user'

export default {
name: 'JobsNavbar',

data(){
    return {

    };
},

methods: {
    async signOut(){
        await firebase.auth().signOut();
        window.location.reload();
        
    },
},
computed: {
    ...mapState(useUserStore, ["user", "profileImg", "profileEmail","profileFirstName","profileLastName","profileUserName"]),
}
}
</script>

<style scoped>
.profile-email {
    font-size: 15px;
    margin-bottom:10px;
  }
  .profile-info {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .profile-info .profile-button {
    cursor: pointer;
    background: grey;
    margin: 0 5px;
    text-decoration: none;
    color: white;
    font-size: 12px;
    padding: 10px;
    margin-top: 5px;
  }
  
  .profile-image-container img {
    border-radius: 90px;
    width: 100%;
    height: 100%;
    margin: 0 15px;
  }
  
  .profile-image-container {
    
    width: 70px;
    height: 70px;
    border-radius: 90px;
  }
  
  
  
  .nav-split {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
  
  .name-and-last-name {
    font-weight: 700;
    font-size: 1.3rem;
  }



.login-and-signup {
    display: flex;
    gap: 40px;
}
.logo {
    font-size: 50px;
}
.main-nav {
    background: rgb(255, 255, 255);
    padding: 30px ;
}
.main-items {

    align-items: center;
    display: flex;
    justify-content: space-between;

}





</style>