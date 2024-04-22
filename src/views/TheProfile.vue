<template>
    <div v-if="loading" class="loading">
        <img src="/src/assets/images/mickey-mouse-steamboat-willie.gif" alt="">
        Loading
    </div>
<div v-if="changesWereSaved" class="changesSaved">
    <router-link class="closeButton" :to="{ name: 'JobListing', params: { id: '2'} }">changes were saved</router-link>
</div>
    

    <div class="profile-background">
        <nav class="main-nav">
            <ul class="main-items">
                <div class="logo">Disney Careers</div>
                <div v-if="localUser">
                  <div class="nav-split">
                    <div class="loggedIn">
                      <div class="profile-email">{{ profileEmail }}</div>
                     <div class="name-and-last-name">Welcome, {{ profileFirstName }}, {{profileLastName}}!</div>
                   </div>
                   <div class="profile-info">
                    <div class="profile-image-container">
                      <img :src="profileImg" alt="">
                     
                    </div>
                    <router-link class="profile-button" :to="{ name: 'ProfilePage'}">Profile</router-link>
                   </div>
                   
                  </div>
                  
                    
                   
                  
                    
                </div>
               
                <div v-else class="login-and-signup">
                    <li><router-link :to="{ name: 'TheLoginPage' }">Log In</router-link></li>
                <li><router-link :to="{ name: 'TheRegister' }">Sign Up</router-link></li>
                </div>
                
            </ul>
        </nav>
    
    
        
            <div class="profile-background-container">
                <div class="profile-card">
                    <div v-if="user" class="profile-image">
                        <img :src="profileImg" alt="">
                    </div>
                    <div v-else class="profile-image">
                        <img src="/src/assets/images/Untitled_Artwork 76.png" alt="">
                    </div>
                    <div class="profile-image-label">
                        <i class="fa-solid fa-upload"></i>
                        <label for="profile-image">Upload profile image</label>
                    <input @change="handleChange2" type="file" id="profile-image">
                    </div>
                    
                    <div class="error">{{ fileErr2 }}</div>
                    <div>{{ err }}</div>
        
                    
                    <div class="input-container">
                        <label :for="profilePageFirstName">FirstName: {{ profilePageFirstName }}</label> 
                    <input type="text" id="profilePageFirstName" v-model="profilePageFirstName" @keydown="changePiniaInfo"/>
                    </div>
                    
                    <div class="input-container">
                        <label :for="profilePageLastName">LasttName:</label> 
                    <input type="text" id="profilePageLastName" v-model="profilePageLastName"/>
                    </div>
                    
                    <div class="input-container">
                        <label :for="profilePageUserName">Username:</label> 
                        <input type="text" id="profilePageUserName" v-model="profilePageUsername"/>
                    </div>
                   
                    <div class="input-container">
                        <label :for="profilePageEmail">Email</label> 
                    <input type="text" disabled id="profilePageEmail" v-model="profilePageEmail"/>
                    </div>
                    
                    
                    <div @dragenter.prevent="toggleActive" @dragleave.prevent="toggleActive" @dragover.prevent @drop.prevent="handleDropChange" class="dropzone" :class="{ 'active-dropzone' : active}">
                        <span>Drag or Drop File</span>
                        <span>OR</span>
                        <label for="dropzoneFile">Upload Resume</label>
                        <input @change="handleChange" type="file" id="dropzoneFile">
                        <div class="error">{{fileErr}}</div>
                        <div>{{ err }}</div>
                    </div>
        
                   <button @click="updateProfile">BIKINI GIRLS</button>
    
                  
                </div>
        
                   
            </div>
        </div>
            

    
   
        
            
            

 
</template>

<script>

import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/storage";
import db from "@/firebase/firebaseInit";
import { mapActions, mapState } from 'pinia';
import { useUserStore, UPDATE_USER_INFO, GET_CURRENT_USER} from '@/piniastores/user';
import ChangesSavedModal from '@/components/ChangesSavedModal.vue';


export default {
name: "ProfilePage",
components: { ChangesSavedModal },
data(){
    return {
      
        changesWereSaved: false,
        loading: null,
        active: "",
        dropzoneFile: "",
        profilePageFirstName: "", 
        profilePageLastName: "",
        profilePageUsername: "",
        profilePageEmail: "",
        profilePageResume: "",
        theSuccesModal: null,
        file: null,
        fileErr: null,
        err: null,
        imageUrl: null,
        filePath: null,
        imageFile: null, 
        fileErr2: null,


    };
},
methods: {

    pushBackToJobPage(){
        this.$route.push({name: "JobListing"});
    },

    toggleActive(){
        this.active = !this.active;
    },
    handleDropChange(e){
        this.active = !this.active;
        const types = ["application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
        const selected2 = e.dataTransfer.files[0];
        if (selected2 && types.includes(selected2.type)){
            this.file = selected2;
            this.fileErr = null;
            console.log(this.file);
        } else {
            this.file = null,
            this.fileErr = 'Please drag a JPG or PNG file';
        };
    },
   
    ...mapActions(useUserStore, [UPDATE_USER_INFO, GET_CURRENT_USER]),
    async updateProfile(){

        if (this.file){
            this.filePath = `covers/${firebase.auth().currentUser.uid}/${this.file.name}`;
          
            //const storageRef = firebase.storage(this.filePath).put(this.file);
            //const res = await storageRef.put(this.file);  
            this.loading = true;
            try{
                const storage = firebase.storage();
            const storageRef = storage.ref(this.filePath);
            await storageRef.put(this.file);
            } catch(err) {
                this.loading = false; 
                this.err = err.message;

            };
        };
        if (this.imageFile){
            this.imageFilePath = `covers/${firebase.auth().currentUser.uid}/${this.imageFile.name}`;
          
            //const storageRef = firebase.storage(this.filePath).put(this.file);
            //const res = await storageRef.put(this.file);  
            this.loading = true;
            try {
                const storage = firebase.storage();
            const storageRef = storage.ref(this.imageFilePath);
            const res = await storageRef.put(this.imageFile);
            this.imageUrl = await res.ref.getDownloadURL(); //we ha ve succusley uploade ti firebase
            const firebaseAuth = await firebase.auth();
            const userImageDatabase = await db.collection('images').doc(firebase.auth().currentUser.uid);
            await userImageDatabase.set({
                filePath: this.imageUrl,
            });
            this.loading = null;
            console.log(this.imageUrl);
            } catch(err) {
                this.loading = null;
                this.err = err.message;

            };
        };

        this.changesWereSaved = true;
           
            
           await this.UPDATE_USER_INFO(this.profilePageFirstName, this.profilePageLastName, this.profilePageUsername, this.file, this.imageUrl);
        this.theSuccesModal = true;
        
    },
        //this.$router.push({name: "JobResults"});
        
      
        
    changeName(){
        this.profilePageFirstName = this.profileFirstName;
        this.profilePageLastName = this.profileLastName;
        this.profilePageUsername = this.profileUserName;
        this.profilePageEmail = this.profileEmail;
        this.profilePageResume = this.profileResume;
        
      },   
    handleChange(e){
        const types = ["application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
        console.log(e.target.files[0]);
        const selected = e.target.files[0]; //this is the file we selected
        if(selected && types.includes(selected.type)){ 
            this.file = selected;
            this.fileErr = null;
        } else {
            this.file = null;
            this.fileErr = 'Please select a document file type'
        };
        
    },
    handleChange2(e){
        const imageTypes = ["image/jpeg","image/png"];
        const selectedImage = e.target.files[0];
        console.log(selectedImage);
        if(selectedImage && imageTypes.includes(selectedImage.type)){
            this.imageFile = selectedImage;
            this.fileErr = null;
        } else {
            this.imageFile = null;
            this.fileErr2 = "Please select a JPG or a PNG file"
        }
    }
      
},
computed: {
    ...mapState(useUserStore, ["profileImg","profileEmail","profileUserName", "profileFirstName","profileLastName","profileResume","profileResume","profileImgURL", "user"]),
},
mounted(){
    setTimeout(() => {
        this.changeName();
        console.log(this.profileResume);
    }, 1000);
   
    
    
},



}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Mouse+Memoirs&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Princess+Sofia&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

.loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100;
    background: rgba(0, 0, 0, 0.831);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    
}

.closeButton {
    background: orange;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 100px;
}

.changesSaved {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 100px;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    width: 100%;
    height: 100%;
}

.profile-image-label input {
    display: none;
}

.profile-image-label {
    cursor: pointer;
    background: green;
    padding: 15px;
    font-size: 14px;
    margin: 20px 0;
}

.profile-image-label i {
    margin-right: 10px ;
}

.profile-image {
    width: 200px;
    height: 200px;

}

.profile-image img {
    width: 100%;
    height: 100%;
    border-radius: 100px;
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



.input-container {
  margin: 50px;
    
}


.profile-background {
    background: black;
}

.profile-card {
    background: white;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    
}

.profile-card input {

}
.profile-background-container{
    display: flex;
    align-items: center;
    justify-content: center;
    background: purple;
    height: 100vh;
    margin: 0 auto;
    max-width: 1100px;

}



.login-and-signup {
    display: flex;
    gap: 40px;
  }
  .logo {
    font-size: 50px;
  }
  .main-nav {
    background: rgb(224, 24, 24);
    padding: 30px ;
  }
  .main-items {
  
    align-items: center;
    display: flex;
    justify-content: space-between;
  
  }

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.profile-info a {
  background: grey;
  text-decoration: none;
  color: white;
  font-size: 12px;
  padding: 2px;
  margin-top: 5px;
}

.profile-image-container img {
  border-radius: 90px;
  width: 100%;
  height: 100%;
}

.profile-image-container {
  
  width: 50px;
  height: 50px;
  border-radius: 90px;
}



.nav-split {
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
}

.name-and-last-name {
  font-weight: 700;
  font-size: 1.3rem;
}
</style>