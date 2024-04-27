<template>

    
    <body>

       
        <form class="poop">
          
            <label :for="resumePageFirstName">FirstName: {{ this.resumePageFirstName}}</label> 
            <input disabled type="text" id="resumePageFirstName" v-model="resumePageFirstName"/>


            <label :for="profilePageLastName">LasttName:</label> 
            <input disabled type="text" id="profilePageLastName" v-model="resumePageLastName"/>


            <label :for="profilePageUserName">Username:</label> 
            <input disabled type="text" id="profilePageUserName" v-model="resumePageUsername"/>


            <label :for="profilePageEmail">Email</label> 
            <input type="text" disabled id="profilePageEmail" v-model="resumePageEmail"/>


            <h1>ADDRESS</h1>


            <label :for="address"> Address </label> 
            <input type="text" id="address" v-model="address"/>

            <label :for="city"> City </label> 
            <input type="text" id="city" v-model="city"/>

            <label :for="state"> State </label> 
            <input type="text" id="state" v-model="state"/>

            <label :for="zipcode"> State </label> 
            <input type="text" id="zipcode" v-model="zipcode"/>

            <h1>WORK EXPERIENCE</h1>
            <button @click="addWorkExperience" class="button">Add Experience</button>

            <div class="job-experience" v-for="(item,index) in workExperience" :key="index">
                <label for="job-title">Job Title </label>
                <input type="text" required v-model="item.jobTitle">

                <label for="Company">Company</label>
                <input type="text" required v-model="item.company">


                <label for="role-description">Role Description</label>
                <input type="textarea" v-model="item.roleDescription">


                <div @click="deleteItem(item.itemId)" class="delete-experience">CANCEL</div>
                <div @click="addItem(item.itemId)" class="add-experience">ADD</div>





            </div>

            <div v-for="finishedItem in finishedWorkExperience" :key="finishedItem.itemId">
                POOOOOOOP
                <div @click="editItem(finishedItem.itemId)">EDIT ITEM</div>
                <div @click="deleteItem">DELETE</div>
            </div>


           

            <div @dragenter.prevent="toggleActive" @dragleave.prevent="toggleActive" @dragover.prevent @drop.prevent="handleDropChange" class="dropzone" :class="{ 'active-dropzone' : active}">
                <span>Drag or Drop File</span>
                <span>OR</span>
                <label for="dropzoneFile">Upload Resume</label>
                <input @change="handleChange" type="file" id="dropzoneFile">
                <div class="error">{{fileErr}}</div>
                <div>{{ err }}</div>
            </div>


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


export default {
name: "JobApplication",
data(){
    return {
        resume: "",
        workExperience: [],
        finishedWorkExperience: [],
        resumePageFirstName: "", 
        resumePageLastName: "",
        resumePageUsername: "",
        resumePageEmail: "",
        resumePageResume: "",
    };
},
methods: {

    async apply(){
           if (this.resume){
            this.filePath = `resume/${firebase.auth().currentUser.uid}/${this.file.name}`;
          
            //const storageRef = firebase.storage(this.filePath).put(this.file);
            //const res = await storageRef.put(this.file);  
            this.loading = true;
            try{
                const storage = firebase.storage();
            const storageRef = storage.ref(this.filePath);
            await storageRef.put(this.resume, this.jobId);
            } catch(err) {
                this.loading = false; 
                this.err = err.message;

            }
           
    };
    const application = db.collection('application').doc(firebase.auth().currentUser.uid);
    await application.set({
        jobId: this.$route.params.id,
        firstName: this.resumePageFirstName,
        lastName: this.resumePageLastName,
        username: this.resumePageUsername,
        email: this.resumePageEmail,
        address: this.address,
        city: this.city,
        state: this.state,
        zipcode: this.zipcode,
        finishedWorkExperience: this.finishedWorkExperience,
        


    })
},

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
    },
    addItem(parameter){
        this.workExperience.forEach((experience) => {
            if (experience.itemId === parameter){
                this.finishedWorkExperience.push(experience);
            };
        });
        this.workExperience = this.workExperience.filter((experience) => experience.itemId !== parameter);

    },
    editItem(parameter){
        this.finishedWorkExperience.forEach((finishedExperience) => {
            if(finishedExperience.itemId === parameter){
                this.workExperience.push(finishedExperience);
            }
        })
    }
},

computed: {
    ...mapState(useUserStore, ["dataFetchedComplete","profileFirstName", "profileLastName", "profileUserName", "profileEmail", "profileResume"]),
},
created(){
    setTimeout(() => {
        this.populateInfo();
    }, 2000);
   
},


};
</script>

<style scoped>

.dropzone {
    background: orange;
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border: 2px dashed #ff004f;
    transition: .3s ease all;
    background: pink;
    
}

.dropzone label {
    padding: 8px 12px;
    color: white;
    background: #ff004f;
    transition: 0.3s ease all;
    cursor: pointer;
}
.dropzone input {
    display: none;
}

.active-dropzone {
    background: yellow;

}

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