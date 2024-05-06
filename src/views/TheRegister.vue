<template>
    <div class="form-wrap">
        <form class="register">
            <p class="login-register">
                Already signed up? 
                <router-link class="router-link" :to="{name: 'TheLoginPage' }">Login</router-link>
            </p>
            <h2>Login to Disney Careers</h2>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="First Name" v-model="firstName">
                    <i class="fas fa-email"></i>
                </div>
                <div class="input">
                    <input type="text" placeholder="Last Name" v-model="lastName">
                </div>
                <div class="input">
                    <input type="text" placeholder="User Name" v-model="userName">
                </div>
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email">
                </div>
                
                <div class="input">
                    <input type="password" placeholder="Password" v-model="password">
                </div>
                
            </div>
            <router-link class="forgot-password" :to="{name: 'Home'}">Forgor your password?</router-link>
                <button @click.prevent="register">Sign Up</button>
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

<script scoped>
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import db from "@/firebase/firebaseInit";

import { useUserStore, GET_CURRENT_USER } from '@/piniastores/user';
import { mapActions, mapState } from 'pinia';


export default {
name: "TheRegister",
data(){
    return {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        error: null,
        errorMsg: "",
    };
},
methods: {
    ...mapActions(useUserStore,[GET_CURRENT_USER]),
    ...mapState(useUserStore, ["profileFirstName"]),

    async register(){
        if (
            this.email !== "" && 
            this.firstName !== "" && 
            this.lastName !== "" && 
            this.userName !== "" && 
            this.password !== "" 
            
        ) {
            this.error = false;
            this.errorMsg = "";
            const firebaseAuth = await firebase.auth();
            const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password); //this is the action
            const result = await createUser;  //this is the receiopt- has all the info 
            const dataBase = db.collection("users").doc(result.user.uid);
            await dataBase.set({
                firstName: this.firstName,
                lastName: this.lastName,
                username: this.userName,
                email: this.email,
            });
           
            this.$router.push({name: "Home"});
            
            return;
             
        }
        this.error = true;
        this.errorMsg = "Please fill out all fields!";
        return;
    },
},
};
</script>

<style scoped>
.form-wrap {
    color: black;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 90%;
   

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
    background: linear-gradient(
        318.68deg,
        #ff004f 0%,
        #7f0229 49.72%,
        #2d000f
    );
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
    background: rebeccapurple;
   width: 100%;
    max-width: 350px;

}

.input {
    background: pink;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:8px;

}

.input input {
    width: 100%;
    border: none;
    background-color: #f2f7f6;
    padding: 4px 4px 4px 30px;
    height: 50px;

} 

input:focus{
    outline: none;
}

.angle {
    
    position: absolute;
    background: #ff004f;
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
</style>