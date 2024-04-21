<template>
    <keep-alive>
        <changes-saved-modal :theModalProp="theSuccesModal" v-if="yourmomstinks"></changes-saved-modal>
    </keep-alive>
    
    <div class="dick">
        <div class="scott">
            
            <label for="profile-image">Profile image</label>
            <input @change="handleChange2" type="file" id="profile-image">
            <div class="error">{{ fileErr2 }}</div>
            <div>{{ err }}</div>

            <label :for="profilePageFirstName">FirstName: {{ profilePageFirstName }}</label> 
            <input type="text" id="profilePageFirstName" v-model="profilePageFirstName" @keydown="changePiniaInfo"/>
            <label :for="profilePageLastName">LasttName:</label> 
            <input type="text" id="profilePageLastName" v-model="profilePageLastName"/>
            <label :for="profilePageUserName">Username:</label> 
            <input type="text" id="profilePageUserName" v-model="profilePageUsername"/>
            <label :for="profilePageEmail">Email</label> 
            <input type="text" disabled id="profilePageEmail" v-model="profilePageEmail"/>
            
            <label>Upload Resume</label>
            <input @change="handleChange" type="file">
            <div class="error">{{fileErr}}</div>
            <div>{{ err }}</div>

           <button @click="updateProfile">BIKINI GIRLS</button>
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
   
    ...mapActions(useUserStore, [UPDATE_USER_INFO, GET_CURRENT_USER]),
    async updateProfile(){

        if (this.file){
            this.filePath = `covers/${firebase.auth().currentUser.uid}/${this.file.name}`;
          
            //const storageRef = firebase.storage(this.filePath).put(this.file);
            //const res = await storageRef.put(this.file);  
            try{
                const storage = firebase.storage();
            const storageRef = storage.ref(this.filePath);
            await storageRef.put(this.file);
            } catch(err) {
                this.err = err.message;

            };
        };
        if (this.imageFile){
            this.imageFilePath = `covers/${firebase.auth().currentUser.uid}/${this.imageFile.name}`;
          
            //const storageRef = firebase.storage(this.filePath).put(this.file);
            //const res = await storageRef.put(this.file);  
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
            console.log(this.imageUrl);
            } catch(err) {
                this.err = err.message;

            };
        };
           
            
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
        const selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            this.file = selected;
            this.fileErr = null;
        } else {
            this.file = null;
            this.fileErr = 'Please sleect a document file type'
        };
        
    },
    handleChange2(e){
        const imageTypes = ["image/jpeg","image/png"];
        const selectedImage = e.target.files[0];
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
    ...mapState(useUserStore, ["profileEmail","profileUserName", "profileFirstName","profileLastName","profileResume","profileResume","profileImgURL"]),
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
.scott{
    margin: 300px 0;
    background: yellow;
    height: 100vh;
}
</style>