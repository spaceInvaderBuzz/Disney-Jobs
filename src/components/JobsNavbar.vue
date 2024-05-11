<template>
  <nav v-if="mobile" class="main-nav">
    <ul class="main-items">
        <router-link :to="{ name: 'JobResults'}" class="logo">
          <img src="/src/assets/images/IMG_8108.png" alt="">
          <h1>CAREERS</h1>
        </router-link>
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
    <nav v-else class="main-nav">
        <ul class="main-items">
          <div class="left-side">
            <router-link :to="{ name: 'JobResults'}" class="logo">
              <img src="/src/assets/images/IMG_8108.png" alt="">
              <h1>CAREERS</h1>
             
            </router-link>
            <router-link :to="{name: 'Home'}" class="back-to-home">Back to home</router-link>
          </div>
         
            
            <div v-if="user" class="right-side">


              <div class="user-info">
               
                  <div class="profile-email">{{ profileEmail }}</div>
                 <div class="name-and-last-name">Welcome, {{ profileFirstName }}, {{profileLastName}}!</div>
               

                  <div class="login-and-logout">

                    <router-link class="profile-button" :to="{ name: 'ProfilePage'}">Profile</router-link>
                    <div class="divider"></div>
                    <div class="profile-button-signout" @click="signOut"><i class="fas fa-sign-out"></i> Sign Out</div>
  
                   </div>
                 </div>
                 
               
              
            
                
               
                <div class="profile-image-container">
                  <img :src="profileImg" alt="">
                 
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
      windowWidth: null,
      mobile: null,
    };
},

methods: {
  checkScreen(){
this.windowWidth = window.innerWidth;
if(this.windowWidth <= 670){
  this.mobile = true;
}
  },
    async signOut(){
        await firebase.auth().signOut();
        window.location.reload();
        
    },
},
computed: {
    ...mapState(useUserStore, ["user", "profileImg", "profileEmail","profileFirstName","profileLastName","profileUserName"]),
},
created(){
  window.addEventListener('resize',this.checkScreen());
  this.checkScreen();
},
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
  

  
  .profile-image-container img {
    border-radius: 90px;
    width: 100%;
    height: 100%;
    margin: 0 15px;
  }
  
 
  
  
  
  .nav-split {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
  
  .name-and-last-name {
    font-weight: 700;
    font-size: 1.4rem;
    margin: 10px 0;
  }



.login-and-signup {
    display: flex;
    gap: 40px;
}
.logo {
  height: 120px;
  width:190px;
 
  justify-content: center;
  
  

}
.logo img {
  width:100%;
  height: 75%;
}
.main-items a {
  text-decoration: none;
  color: black;
}
.logo h1 {
  display: flex;
  justify-content: flex-end;
  font-size: 1.8rem;
 

}

.main-nav {
    background: rgb(255, 255, 255);
  
}
.main-items {
  display: flex;
    align-items: center;
 
    justify-content: space-between;

}

.left-side {

  width:350px;
}
.left-side {
  display: flex;
  justify-content: center;
  align-items: center;
}

.back-to-home {
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 78px;
  height: 100px;
  text-align: center;
  border-left: 2px solid black;
  margin-left: 15px;
  padding-left: 15px;
}

.right-side {
  display: flex;
  align-items: center;
}
.profile-image-container {
    
  width: 80px;
  height: 80px;
  border-radius: 90px;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


}

.login-and-logout {
 
  display: flex;
  width: 100%;
  justify-content: space-between;

  padding: 0 110px 0 150px;


}


.profile-button {
  border-radius: 90px;
  cursor: pointer;
  background: rgb(153, 153, 153);
  margin: 0 5px;
  text-decoration: none;
  color: white;
  padding: 10px 20px;
  margin-top: 5px;
}
.divider {
  width: 2px;
  height: 100;
  background: rgb(137, 137, 137);
}

.profile-button-signout {
 
  cursor: pointer;
  
  text-decoration: none;
  color: rgb(137, 137, 137);


  padding: 10px 20px;
  margin-top: 5px;
  
}
.right-side a {
  color: white;
}



@media(max-width:670px){
  
}




</style>