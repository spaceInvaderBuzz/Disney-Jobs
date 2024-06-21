<template>
<div class="form-wrap">
    <form class="login">
        
        <div class="disney-careers-container">
            <div class="disney-logo">
                <img src="/src/assets/images/IMG_8108.png" alt="">
            </div>
            <div class="mouse">
                <img src="/src/assets/images/Untitled_Artwork 200.png" alt="">
            </div>
            <h1 class="disney-careers">CAREERS</h1>
        </div>
        <div class="main-form">

            
        </div>
        <h1 class="welcome">Welcome</h1>
        <div class="inputs">
            <div class="input">
                <div class="user-icon">
                    <img src="/src/assets/images/Untitled_Artwork 201.png" alt="">
                </div>
                <label for="email"></label>
                <input type="text" placeholder="Email" id="email" v-model="email">
                
            </div>
            <div class="input">
                <div class="user-icon">
                    <img src="/src/assets/images/Untitled_Artwork 202.png" alt="">
                </div>
                <input type="password" placeholder="Password" v-model="password">
            </div>
            
        </div>
        <router-link class="forgot-password" :to="{name: 'Home'}">Forgor your password?</router-link>
            <button class="sign-in" @click.prevent="signIn">Sign In</button>
            <p class="login-register">
                Don't have an account? 
                <router-link class="router-link" :to="{name: 'TheRegister'}">Register</router-link>
            </p>
            <div v-if="error" class="error">{{ errorMsg }}</div>
            <div class="angle"></div>
    </form>
    <div class="background">
        <div class="text">Find your passion. Get started</div>
        <div class="layer"></div>
        <div class="logos-slide">
            <img src="/src/assets/images/Untitled_Artwork 58.png" alt="">
            <img src="/src/assets/images/Untitled_Artwork 59.png" alt="">
            <img src="/src/assets/images/Untitled_Artwork 60.png" alt="">
            <img src="/src/assets/images/Untitled_Artwork 61.png" alt="">
         </div>
        <div class="logos-slide">
            <img src="/src/assets/images/Untitled_Artwork 58.png" alt="">
            <img src="/src/assets/images/Untitled_Artwork 59.png" alt="">
            <img src="/src/assets/images/Untitled_Artwork 60.png" alt="">
            <img src="/src/assets/images/Untitled_Artwork 61.png" alt="">
         </div>
        
    </div>
</div>
   
  
</template>

<script>
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

export default {
name: "TheLoginPage",
data(){
    return {
        email: "",
        password:"",
        error: null,
        errorMsg: "",
    };
},
methods: {
    async signIn(){
        await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
         
            this.error = false;
            this.errorMsg = "";
           
            this.$router.push({name: "JobResults"});
           
               
         
            
            
        
       
    }
},
};

</script>

<style scoped>

.disney-careers-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

}

.disney-careers-container img {
    width: 100%;
    height: 100%;
}

.disney-logo {
    width: 130px;
    height: 60px;
 
}

.mouse {
    width: 110px;
    height: 150px;
    
}
.disney-careers {
    font-size: 1.4rem;
}

.welcome {
    font-size: 3rem;
    margin: 20px 0;
}

.user-icon {
    width: 32px;
    height: 32px;
}
.user-icon img {
    width: 100%;
    height: 100%;
}


.form-wrap {
    color: black;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
   

}

.login-register {
    margin-bottom: 32px;
}

.text {
    z-index: 4;
    font-size: 2.5rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.router-link {
    color: black;
}

form {
    background: rgb(255, 255, 255);
    height: 100%;
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    
}

h2 {
    text-align: center;
    font-size: 32px;
    color: #303030;
    margin-bottom: 40px;


}

.forgot-password {
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: 14px;
    margin: 16px 0 32px;
    border-bottom: 1px solid transparent;
    transition: 0.5s ease all;
}

.forgot-password:hover {
    border-color: #303030 ;
}


.inputs {
   width: 100%;
    max-width: 350px;
    
    margin: 40px 0;
 

}

.input {
    
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:15px;
    transition: 300ms ease;
   

}
.input label {
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    transition: 300ms ease;
    left:10%;
    
}


.input input {
    font-size:1rem;
    width: 100%;
    border: none;
    padding: 4px 4px 4px 10px;
    height: 50px;
    border-bottom: rgb(122, 122, 122) 2px solid;

} 
input:focus {
    outline: none;
    border-bottom-color: #ff004f;
}

input:focus + label {
    display: none;
}

.sign-in {
    color: white;
    font-size: 1.2rem;
    letter-spacing: 2px;
    padding: 20px 30px;
    width: 300px;
    border-radius: 20px;
    border: none;
    background: linear-gradient(20deg,#ff004f,#690342 );
    margin-bottom: 30px;
    
}

.angle {
    
    position: absolute;
    background: rgb(255, 255, 255);
    width: 60px;
    height: 100%;
    right: -30px;
    transform: rotateZ(3deg);

}

.background {
    z-index: -1;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    flex:2;
    width: 100%;
    height: 100%;
}



@keyframes slide {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
}

.logos-slide {
    display: inline-block;
    animation: 60s slide infinite linear;
    
}

.logos-slide img {
    height: 1000px;
    width: 1000px;
}
.layer {
    z-index: 2;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        360deg,
        rgba(0,0,0,0.76) .54%,
        rgba(0,0,0,.5) 100%,
        rgba(0,0,0,8e-5) 100%
    );

}


@media (max-width: 670px){
.angle {
    display: none;
}
form {
    
    
    border-radius: 40px;
    background: white;
    height: 820px;
    padding: 0 50px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 2500;
}

.background .text {
    display: none;
}
}
</style>