<template>
  <nav v-if="mobile" class="main-nav">
    <ul class="main-items">
      <div class="left-side">
        <router-link :to="{ name: 'JobResults'}" class="logo">
          <img src="/src/assets/images/IMG_8108.png" alt="">
          <h1>CAREERS</h1>
         
        </router-link>
        <router-link :to="{name: 'Home'}" class="back-to-home">Back to home</router-link>
      </div>
     
        
        <div v-if="user" class="right-side">

          <div class="profile-image-container">
            <img :src="profileImg" alt="">
           
          </div>
    
          <div class="user-info">
           
              <div class="profile-email">{{ profileEmail }}</div>
             <div class="name-and-last-name">{{ profileFirstName }}, {{profileLastName}}</div>
           

              <div class="login-and-logout">

                <router-link class="profile-button" :to="{ name: 'ProfilePage'}">Profile</router-link>
                <div class="divider"></div>
                <div class="profile-button-signout" @click="signOut">Sign Out</div>

               </div>
             </div>
             
           
          
        
            
           
          
           
          
          
            
           
          
            
        </div>
       
        <div v-else class="login-and-signup">
            <li class="login-btn">
              <div class="icon-container">
                <img src="/src/assets/images/Untitled_Artwork 201.png" alt="">
              </div>
             
              <router-link :to="{ name: 'TheLoginPage' }">Log In</router-link>
            </li>
            <div class="the-divider"></div>
        <li class="signup-btn"><router-link :to="{ name: 'TheRegister' }">Sign Up</router-link></li>
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
                <li class="login-btn"><router-link :to="{ name: 'TheLoginPage' }">Log In</router-link></li>
            <li class="signup-btn"><router-link :to="{ name: 'TheRegister' }">Sign Up</router-link></li>
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
  return;
}
this.mobile = false;
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
  

  .profile-image-container {
    
    width: 80px;
    height: 80px;
    border-radius: 90px;
  }
  .profile-image-container img {
    border-radius: 90px;
    width: 100%;
    height: 100%;
    margin: 0 15px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width:350px;
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


.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


}

.login-and-logout {
 
  display: flex;
 
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


.login-and-signup {
  list-style: none;
  display:flex;
  align-items: center;
  justify-content: center;
  gap: 25px;




}
.the-divider {
  width: 2px;
  height: 20px;
  background: rgb(137, 137, 137);
}
.icon-container {
  margin-right: 5px;
  width:30px;
  height: 30px;
}
.icon-container img {
  width: 100%;
  height: 100%;
}
.login-btn {
display:flex;
align-items: center;
}
.login-btn a {
  color: rgb(137, 137, 137)
}

.signup-btn {
  color: white;
  background: rgb(137, 137, 137);
  padding: 10px 18px;
  border-radius: 90px;
}
.signup-btn a {
  color: white;
}



@media(max-width:670px){

  .profile-image-container {
   
    width: 100px;
    height: 100px;
    border-radius: 90px;
  }


  .main-items {
flex-wrap: wrap;
  }
  .left-side {
    

    display: flex;
    justify-content: center;
    align-items: center;
    width:150px;
    }
    .logo {
      height: 80px;
      width:170px;
     
      justify-content: center;
    
      
    
    }
    .back-to-home {
      height: 70px;
    }
    .logo img {
      width:100%;
      height: 70%;
    }.logo h1 {
      font-size: 1.2rem;

    }
  
.login-and-logout {
 
  display: flex;
  height: 40px;
 
  justify-content: space-between;

  padding: 0 150px 0 150px;


}
    .profile-button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 90px;
      cursor: pointer;
      background: rgb(153, 153, 153);
      margin: 0 5px;
      text-decoration: none;
      color: white;
      padding: 3px 15px;
      margin-top: 5px;
    }
    .profile-button-signout {
      display: flex;
      align-items: center;
      justify-content: center;

    }
    
    .user-info {
     
      width: 240px;
    }

    .right-side {
      
  
      transform: scale(.85);
    }
    
  
}




</style>