<template>
    <body>
        <form class="poop">
            <label :for="resumePageFirstName">FirstName:</label> 
            <input type="text" id="resumePageFirstName" v-model="resumePageFirstName"/>


            <label :for="profilePageLastName">LasttName:</label> 
            <input type="text" id="profilePageLastName" v-model="resumePageLastName"/>


            <label :for="profilePageUserName">Username:</label> 
            <input type="text" id="profilePageUserName" v-model="resumePageUsername"/>


            <label :for="profilePageEmail">Email</label> 
            <input type="text" disabled id="profilePageEmail" v-model="resumePageEmail"/>


            <label>Uplaod Resume</label>
            <input type="file" :value="resumePageResume">



            <div class="job-experience" v-for="(item,index) in workExperience" :key="index">
                <label for="job-title">Job Title {{ item.itemId}}</label>
                <input type="text" required v-model="item.jobTitle">

                <label for="Company"></label>
                <input type="text" required v-model="item.company">


                <label for="role-description"></label>
                <input type="textarea" v-model="item.roleDescription">


                <div @click="deleteItem(item.itemId)" class="delete-experience">D E L E T E</div>
                



            </div>


            <button @click="addWorkExperience" class="button">Add Experience</button>


            <div class="error">{{fileErr}}</div>
            <div>{{ err }}</div>
            <button @click="apply">Apply</button>
        </form>
      
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
        workExperience: [],
        resumePageFirstName: "", 
        resumePageLastName: "",
        resumePageUsername: "",
        resumePageEmail: "",
        resumePageResume: "",
    };
},
methods: {
    ...mapActions(useUserStore,[GET_CURRENT_USER]),

    populateInfo(){
        this.resumePageFirstName = this.profileFirstName;
        this.resumePageLastName = this.profileLastName;
        this.resumePageUsername =  this.profileUserName;
        this.resumePageEmail = this.profileEmail;
        this.resumePageResume = this.profileResume;
    },
    addWorkExperience(){
        const uid = Math.floor(Math.random() * 10000000 );
        this.workExperience.push({
            itemId: uid,
            jobTitle: "",
            company: "",
            roleDescription: "",
        });
    },
    deleteItem(parameter){
        this.workExperience = this.workExperience.filter((experience) => experience.itemId !== parameter);
    }
},

comuputed: {
    ...mapState(useUserStore, ["profileFirstName", "profileLastName", "profileUserName", "profileEmail", "profileResume"]),
},
created(){
    
    this.GET_CURRENT_USER();
},

mounted(){
    console.log(this.profileFirstName);
},
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