<template>
    <body>
        <section class="poop">
            <label :for="resumePageFirstName">FirstName: {{ profilePageFirstName }}</label> 
            <input type="text" id="resumePageFirstName" v-model="resumePageFirstName"/>
            <label :for="profilePageLastName">LasttName:</label> 
            <input type="text" id="profilePageLastName" v-model="resumePageLastName"/>
            <label :for="profilePageUserName">Username:</label> 
            <input type="text" id="profilePageUserName" v-model="resumePageUsername"/>
            <label :for="profilePageEmail">Email</label> 
            <input type="text" disabled id="profilePageEmail" v-model="resumePageEmail"/>
            <label>Uplaod Resume</label>
            <input type="file" :value="resumePageResume">
            <label for="experience">Experience</label>
            <input type="text">
            <label for="experience">Education</label>
            <input type="text">
            <div class="error">{{fileErr}}</div>
            <div>{{ err }}</div>
            <button @click="apply">Apply</button>
        </section>
      
    </body>
    
</template>



<script>

import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/storage";
import db from "@/firebase/firebaseInit";
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '@/piniastores/user';
import { GET_CURRENT_USER } from '@/piniastores/user';


export default {
name: "JobApplication",
data(){
    return {
        resumePageFirstName: "", 
        resumePageLastName: "",
        resumePageUsername: "",
        resumePageEmail: "",
        resumePageResume: "",
    };
},
methods: {
    ...mapActions(useUserStore, [GET_CURRENT_USER]),
    populateInfo(){
        this.resumePageFirstName = this.profileFirstName, 
        this.resumePageLastName = this.profileLasttName, 
        this.resumePageUsername =  this.profileUserName,
        this.resumePageEmail = this.profileEmail,
        this.resumePageResume = this.profileResume
    },
},

comuputed: {
    ...mapState(useUserStore, ["profileFirstName", "profileLastName", "profileUserName", "profileEmail", "profileResume"]),
},
mounted(){
    setTimeout(() => {
        this.populateInfo();
    }, 1000);
  
   
}
};
</script>

<style scoped>
.container {
    background: yellow;
}
.poop {
    padding: 200px 0;
    height:100vh;
    width: 100vw;
    background: rebeccapurple;
}
.poopy { 
    margin: 50px 0;
    height: 800px;
    width: 800px;
    background: rebeccapurple;
}

</style>