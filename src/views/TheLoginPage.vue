<template>
<div class="form-wrap">
    <form class="login">
        <p class="login-register">
            Don't have an account? 
            <router-link class="router-link" :to="{name: 'TheRegister'}">Register</router-link>
        </p>
        <h2>Login to Disney Careers</h2>
        <div class="inputs">
            <div class="input">
                <input type="text" placeholder="Email" v-model="email">
                <i class="fas fa-email"></i>
            </div>
            <div class="input">
                <input type="password" placeholder="Password" v-model="password">
            </div>
            
        </div>
        <router-link class="forgot-password" :to="{name: 'Home'}">Forgor your password?</router-link>
            <button @click.prevent="signIn">Sign In</button>
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
    signIn(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
         
            this.error = false;
            this.errorMsg = "";
            this.$router.push({name: "JobResults"});
        })
        .catch((err) => {
            this.error = true;
            this.errorMsg = err.message;
        })
    }
}
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
    background: yellow;
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
    background: rgb(0, 0, 0);
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