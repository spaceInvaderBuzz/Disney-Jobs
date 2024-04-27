<template>

    
    <body>

        <div v-if="loading">
            <img src="/src/assets/images/200w.gif" alt="">
        </div>
       
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

                <label for="from"></label>
                <input type="date" id="from" v-model="from">

                <label for="to"></label>
                <input type="date" id="to" v-model="to">


                <h2 @click="deleteItem(item.itemId)" class="delete-experience">CANCEL</h2>
                <h2 @click="addItem(item.itemId)" class="add-experience">ADD</h2>





            </div>

            <div v-for="finishedItem in finishedWorkExperience" :key="finishedItem.itemId">
                {{ finishedItem.jobTitle }}
                <div @click="editItem(finishedItem.itemId)">EDIT ITEM</div>
                <div @click="reallyDeleteItem(finishedItem.itemId)">DELETE</div>
            </div>


           

            <div @dragenter.prevent="toggleActive" @dragleave.prevent="toggleActive" @dragover.prevent @drop.prevent="handleDropChange" class="dropzone" :class="{ 'active-dropzone' : active}">
                <span>Drag or Drop File</span>
                <span>OR</span>
                <label for="dropzoneFile">Upload Resume</label>
                <input @change="handleChange" type="file" id="dropzoneFile">
                <div class="error">{{resumeErr}}</div>
                
            </div>


          
            
            <button @click.prevent="apply">Apply</button>
            {{ pleaseSelectOneExperienceMsg }}
            {{ pleaseUploadResume }}
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
        loading: false,
        jobId: this.$route.params.id,
        active: null,
        resume: "",
        workExperience: [],
        finishedWorkExperience: [],
        resumePageFirstName: "", 
        resumePageLastName: "",
        resumePageUsername: "",
        resumePageEmail: "",
        resumePageResume: "",
        resumeErr: "",
        pleaseSelectOneExperienceMsg: "",
        pleaseUploadResume: "",
        err: "",
    };
},
methods: {

  

    async apply(){

    
           if (this.resume && this.finishedWorkExperience.length !== 0) {
            this.filePath = `resume/${firebase.auth().currentUser.uid}/${this.resume.name}`;
          
           
          this.loading = true;
          try{
          const storage = firebase.storage();
          const storageRef = storage.ref(this.filePath);
          await storageRef.put(this.resume, this.jobId);
          } catch(err) {
              this.loading = false; 
              this.err = err.message;

          }
         
  
  const application = db.collection('application').doc(firebase.auth().currentUser.uid);
  if (this.finishedWorkExperience.length === 0){
    this.pleaseSelectOneExperienceMsg = "Please select one expeirence";
    return;
  }
  if (this.finishedWorkExperience.length !== 0){
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
      


  }); 
   } 
   this.pleaseUploadResume = "";
   this.pleaseSelectOneExperienceMsg = "";
   this.loading = false;
   return;  };
           this.pleaseUploadResume= "please upload a resume"
          
   

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
            from: "",
            to: "",

        });
    },

    deleteItem(parameter){
        this.workExperience = this.workExperience.filter((experience) => experience.itemId !== parameter);
    },
    reallyDeleteItem(parameter){
        this.finishedWorkExperience = this.finishedWorkExperience.filter((experience) => experience.itemId !== parameter)
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
            };
        });
        this.finishedWorkExperience = this.finishedWorkExperience.filter((item) => item.itemId !== parameter)
    },
    toggleActive(){
        this.active = !this.active;
    },
    handleDropChange(e){
        this.active = !this.active;
        const types = ["application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
        const selected2 = e.dataTransfer.files[0];
        if (selected2 && types.includes(selected2.type)){
            this.resume = selected2;
            this.resumeErr = null;
     
        } else {
            this.resume = null,
            this.resumeErr = 'Please drag a document file';
        };
    },
    handleChange(e){
        const types = ["application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      
        const selected = e.target.files[0]; //this is the file we selected
        if(selected && types.includes(selected.type)){ 
            this.resume = selected;
            this.resumeErr = null;
        } else {
            this.resume = null;
            this.resumeErr = 'Please select a document file type'
        };
        
    },

},

computed: {
    ...mapState(useUserStore, ["dataFetchedComplete","profileFirstName", "profileLastName", "profileUserName", "profileEmail", "profileResume"]),
},
created(){
    setTimeout(() => {
        this.populateInfo();
    }, 2000);
    console.log(this.jobId);
   
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