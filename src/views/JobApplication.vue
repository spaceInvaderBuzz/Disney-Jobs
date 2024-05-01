<template>

    
    <body>



        <div v-if="loading">
           <the-loading-screen></the-loading-screen>
        </div>

        <jobs-navbar></jobs-navbar>

        <div class="application-hero">
            <div class="hero-text">
              <p>DISNEY CAREERS</p>
              <h1>FIND YOUR </h1>
              <h1>DREAM JOB</h1>
            </div>
           <div class="hero-background"></div>
           
        </div>


        <section class="the-application-form">
            <div class="the-application-form-container">

                <div class="applying-for">
                    <div class="hero-logo-container">
                        <img src="/src/assets/images/Untitled_Artwork 101.png" alt="">
                    </div>
                    <h3>Applying for:</h3>
                    <h1>{{ applicationJob[0].title }}</h1>
                </div>
                
               
                <form class="poop">

                    <div class="email-container">
                        <label :for="profilePageEmail">Email</label> 
                    <input type="text" disabled id="profilePageEmail" v-model="resumePageEmail"/>
                    </div>
                    
                    <div class="username">
                     <label :for="profilePageUserName">Username:</label> 
                    <input disabled type="text" id="profilePageUserName" v-model="resumePageUsername"/>
                    </div>

                    <div class="first-and-last-name">
                        <div class="first-name">
                            <label :for="resumePageFirstName">FirstName: {{ this.resumePageFirstName}}</label> 
                            <input disabled type="text" id="resumePageFirstName" v-model="resumePageFirstName"/>
                          </div>
                           
                
                            <div class="last-name">
                                <label :for="profilePageLastName">LasttName:</label> 
                            <input disabled type="text" id="profilePageLastName" v-model="resumePageLastName"/>
                            </div>
                    </div>
                
                    
        
        
                    
        
        
                   
        
        
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
        

                          <div class="from-and-to">
                            <div class="from">
                                <label for="from">from</label>
                            <input type="date" id="from" v-model="from">
                            </div>
                            
                            <div class="to">
                                <label for="to">to</label>
                                <input type="date" id="to" v-model="to">
                            </div>
                           

                          </div>

                      
        
        
                        <h2 @click="deleteItem(item.itemId)" class="delete-experience">CANCEL</h2>
                        <h2 @click="addItem(item.itemId)" class="add-experience">ADD</h2>
        
        
        
        
        
                    </div>
        
                    <div v-for="finishedItem in finishedWorkExperience" :key="finishedItem.itemId" class="item-finished">
                        {{ finishedItem.jobTitle }}
                        <div class="toggle-button-stuff" @click="toggleEditOrDelete(finishedItem.itemId)">
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                       
                        <div class="edit-or-delete-thang" :class="{ active: idThang === finishedItem.itemId }">
                           
                                <div @click="editItem(finishedItem.itemId)">EDIT ITEM</div>
                            
                           
                         
                            <div @click="reallyDeleteItem(finishedItem.itemId)">DELETE</div>
                            
                        </div>
                       
                        
                    </div>
        
        
                   
        
                    
                    <div class="bottom-page">
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
                    </div>
                    
                </form>
    
                
            </div>
            
            
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
import { useJobsStore } from '@/piniastores/jobs';
import JobsNavbar from '@/components/JobsNavbar.vue';
import TheLoadingScreen from '@/components/TheLoadingScreen.vue';


export default {
  components: { JobsNavbar, TheLoadingScreen },
name: "JobApplication",
data(){
    return {
        idThang: "",
        editOrDeleteJob: false,
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

  toggleEditOrDelete(parameter){
    if (this.idThang === parameter) {
        this.idThang = null; 
    return; } 
    this.idThang = parameter;

  },

  

  toggleThang(parameter){

  },

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
   this.$router.push({name: 'ApplicationSuccessful'});
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
        if (this.idThang === parameter) {
        this.idThang = null; }
        this.workExperience.forEach((experience) => {
            if (experience.itemId === parameter){
                this.finishedWorkExperience.push(experience);
            };
        });
        this.workExperience = this.workExperience.filter((experience) => experience.itemId !== parameter);

    },
    editItem(parameter){
        this.editOrDeleteJob = false;
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
    ...mapState(useJobsStore, ["jobs"]),

    ...mapState(useUserStore, ["dataFetchedComplete","profileFirstName", "profileLastName", "profileUserName", "profileEmail", "profileResume"]),

    applicationJob(){
        return this.jobs.filter((job) => job.id === this.$route.params.id);
    }
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

.edit-or-del-enter-active,
.edit-or-del-leave-active {
    transition: all 0.2s ease;
}

.edit-or-del-enter-from,
.edit-or-del-leave-to {
    opacity: 0;
    transform: translateY(-50px);
}


.edit-or-delete-thang {
    display: none;
    z-index: 1;
    position: absolute;
    right: 0;
    bottom: -80px;
    background: rgb(167, 167, 167);
    font-size: 1.2rem;
    cursor: pointer;
}
.edit-or-delete-thang.active {
    display: block;
}

.edit-or-delete-thang div {
    padding: 7px 15px;
}
.edit-or-delete-thang div:hover {
    background: #ff004f;
}



.item-finished {
    position: relative;
    font-size: 1.3rem;
    background: #ff004f;
    margin: 15px 0;
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px;
}


.toggle-button-stuff {
    font-size: 2rem;
    cursor: pointer;
}

.poop {
  
    margin: 0px 30px;
    padding-top:30px ;
    border-top: 2px solid rgb(71, 71, 71);
    
}

.email-container {
    width: 100%;
}
input {
    width: 100%;
    height: 40px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid grey;
}

.first-and-last-name {
    display: flex;
    gap: 15px;
    
    width: 100%;
    
}

.first-name {
    width: 50%;
}

.last-name {
    width: 50%;
}



.hero-logo-container {
    width: 50px;
    height: 50px;
}
.hero-logo-container img {
    width: 100%;
    height: 100%;
}

.application-hero {
    position: relative;
}

.the-application-form-container {
    max-width: 900px;
    margin: 0 auto;
   
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.hero-text {
    position: absolute;
    top:180px;
    left: 120px;
    font-size: 2rem;
}

.hero-background {
    background: url("/src/assets/images/careers-internships.jpg") no-repeat;
    background-size: cover;
    min-height: 500px;
}

.applying-for {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    margin-bottom: 30px;


}

.applying-for h1 {
    font-size: 2.5rem;
}

.from-and-to {
    display: flex;
    gap:20px;
    width: 100%;

}

.from {
    width: 50%;
}
.to {
    width: 50%;
}

.job-experience {
    background: rgb(194, 194, 194);
    padding: 0 20px;
}

.dropzone {
    background: orange;
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border: 2px dashed #505050;
    transition: .3s ease all;
    background: rgb(255, 255, 255);
    
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

.bottom-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
}


button {
    background: black;
    border: none;
    color: white;
    padding: 13px 20px;
    margin: 15px 0;
    cursor: pointer;
}


</style>