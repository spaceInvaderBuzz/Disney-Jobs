<template>
    
        <div v-if="loading">
            <the-loading-screen></the-loading-screen>
          
        </div>

        
    <div v-show="changesWereSaved">
      <profile-modal :profileModalActive="profileModalActive">
        <div class="changes-saved">
            <div class="mushu-container">
                <img src="/src/assets/images/Untitled_Artwork 104.png" alt="">
            </div>
            <div class="text-for-modal">
                <h1>Changes</h1>
                <h1>saved!</h1>
                <button class="modal-close-btn" @click="reloadPage">Close</button>
            </div>
            

        </div>
      </profile-modal>
    </div>
        
    
        <div class="profile-background">
            <div class="profile-background-backdrop">
                <jobs-navbar></jobs-navbar>
            
            
                      <div class="profile">
                        <div class="profile-background-container">
                            <div class="profile-card-background">
                                <svg class="svg-thang" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,0L48,16C96,32,192,64,288,101.3C384,139,480,181,576,208C672,235,768,245,864,213.3C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            
                                <div class="profile-card">
                                    <div class="profile-image-white">
                                        <div v-if="user" class="profile-image">
                                            <img :src="profileImg" alt="">
                                        </div>
                                        <div v-else class="profile-image">
                                            <img src="/src/assets/images/Untitled_Artwork 76.png" alt="">
                                        </div>
                                        <div class="profile-image-label">
                                            <i class="fa-solid fa-upload"></i>
                                            <label class="profile-image-thang" for="profile-image">Upload profile image</label>
                                        <input @change="handleChange2" type="file" id="profile-image">
                                        </div>
                                        
                                        <div class="error">{{ fileErr2 }}</div>
                                        <div>{{ err }}</div>
            
                                    </div>
                                    
                        
                                    <div class="inputs-background">
                
                                        <div class="input-container">
                                            <label :for="profilePageFirstName">FirstName:</label> 
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
                                        
                                        
                                        
                            
                                       <button class="update-button" @click="updateProfile">UPDATE</button>
                
                                    </div>
                                    
                    
                                  
                                </div>
            
            
            
                            </div>
                           
                    
                               
                        </div>
        
        
        
        
        
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
import JobsNavbar from '@/components/JobsNavbar.vue';
import TheLoadingScreen from "@/components/TheLoadingScreen.vue";

import ProfileModal from "@/components/ProfileModal.vue"



export default {
name: "ProfilePage",
components: { ChangesSavedModal, JobsNavbar, TheLoadingScreen, ProfileModal },
data(){
    return {
        profileModalActive: false,
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

    reloadPage(){
        this.profileModalActive = false;
        window.location.reload();
        
    },

   
   
    ...mapActions(useUserStore, [UPDATE_USER_INFO, GET_CURRENT_USER]),
    async updateProfile(){

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
           
            } catch(err) {
                this.loading = null;
                this.err = err.message;

            };
        };

        this.changesWereSaved = true;
        this.profileModalActive = true;
           
            
           await this.UPDATE_USER_INFO(this.profilePageFirstName, this.profilePageLastName, this.profilePageUsername, this.file, this.imageUrl);
      
        
    },
        //this.$router.push({name: "JobResults"});
        
      
        
    changeName(){
        this.profilePageFirstName = this.profileFirstName;
        this.profilePageLastName = this.profileLastName;
        this.profilePageUsername = this.profileUserName;
        this.profilePageEmail = this.profileEmail;
        this.profilePageResume = this.profileResume;
        
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
    ...mapState(useUserStore, ["dataFetchedComplete","profileImg","profileEmail","profileUserName", "profileFirstName","profileLastName","profileResume","profileResume","profileImgURL", "user"]),
    localUser(){
        return this.user ? true : false;
    }
},
mounted(){
   
    
    
},

created(){
    setTimeout(() => {
        this.changeName();
    }, 2000);
  
},



}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Mouse+Memoirs&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Princess+Sofia&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');


.changes-saved {
    display: flex;
    align-items: center;
    justify-content: center;

}
.changes-saved h1 {
    font-size: 3rem;
}

.modal-close-btn {
    cursor: pointer;
    border-radius: 100px;
    background: #000000;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1.3rem;
    margin-top: 50px;
}

.changes-saved .mushu-container {
    height: 500px;
    width: 400px;
}

.mushu-container img {
    width: 100%;
    height: 100%;
}

.text-for-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.profile-email {
    font-size: 15px;
    margin-bottom:10px;
  }
  .profile-info {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .profile-info .profile-button {
    cursor: pointer;
    background: grey;
    margin: 0 5px;
    text-decoration: none;
    color: white;
    font-size: 12px;
    padding: 10px;
    margin-top: 5px;
  }
  
  .profile-image-container img {
    border-radius: 90px;
    width: 100%;
    height: 100%;
    margin: 0 15px;
  }
  
  .profile-image-container {
    
    width: 70px;
    height: 70px;
    border-radius: 90px;
  }
  
  
  
  .nav-split {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
  
  .name-and-last-name {
    font-weight: 700;
    font-size: 1.3rem;
  }

  .login-and-signup {
    display: flex;
    gap: 40px;
  }
  .logo {
    font-size: 50px;
  }
  .main-nav {
    background: rgb(255, 255, 255);
    padding: 30px ;
  }
  .main-items {
  
    align-items: center;
    display: flex;
    justify-content: space-between;
  }  





  
.svg-thang {
    position: absolute;
    top: 330px;
}

.input-container {
    display: flex;
    flex-direction: column;
}

.input-container input {
    margin: 10px 0;
    padding: 10px 10px;
    border-radius:90px;
    border: 1px solid rgb(98, 98, 98);
    
}

.input-container label {
    font-weight:600;
}

.input-container:focus {
    outline: none;
}



.update-button {
    margin: 20px 0;
    background-color: #ff004f;
    border: none;
    padding: 15px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    width: 100%;
    
}

.profile-background-backdrop {
    background: url("/src/assets/images/Untitled_Artwork 99.png") no-repeat;
    background-size: contain;
}

.profile-card {
    margin-bottom: 100px;
    margin-top: 50px;
}


.profile-image-white {
    background: #ff004f;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 40px 0;
    
}
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.831);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    
}

.loading h1 {
    position: absolute;
    bottom: 30%;
}

.loading-img-container {
    width: 500px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.spinner {
    content: "";
    position: absolute;
    width: 250px;
    height: 250px;
    top: 0;
    left:0;
    border: 8px solid transparent;
    border-radius: 50%;
    border-top-color: #ff004f;
    animation: button-loading-spinner 1s ease infinite;
    

}

@keyframes button-loading-spinner {
    from {
        transform: rotate(0turn);
    }
    to {
        transform: rotate(1turn);
    }
}

.loading-img {
    position: relative;
    background: url("/src/assets/images/200w.gif") no-repeat;
    background-size: cover;
    width: 50%;
    height: 50%;
    border-radius: 500px;
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
    position: absolute;
    z-index: 3;
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
    color: white;
    cursor: pointer;
   border: 2px solid white;
    padding: 15px;
    font-size: 14px;
    margin: 20px 0;
    width: 200px;
    height: 50px;
    background: black;
    position: relative;
    
}

.profile-image-thang {
    top: 0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;
    position:absolute; 
    background: rebeccapurple;
    cursor: pointer;
    width: 100%;
    height: 100%;
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
    border: #ffffff 4px solid;
}





.input-container {
  margin: 50px;
    
}


.profile-background {
    background: black;
}

.profile-card {
    background: #ffffff;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    
}

.profile-background-container{
    display: flex;
    align-items: center;
    justify-content: center;
  
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
    background: rgb(255, 255, 255);
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

.profile-card-background {
    position: relative;
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