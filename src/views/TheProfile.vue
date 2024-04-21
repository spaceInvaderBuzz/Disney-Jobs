<template>
    <keep-alive>
        <changes-saved-modal :theModalProp="theSuccesModal" v-if="yourmomstinks"></changes-saved-modal>
    </keep-alive>
    
    <div class="dick">
        <div class="scott">

            <label :for="profilePageFirstName">FirstName: {{ profilePageFirstName }}</label> 
            <input type="text" id="profilePageFirstName" v-model="profilePageFirstName" @keydown="changePiniaInfo"/>
            <label :for="profilePageLastName">LasttName:</label> 
            <input type="text" id="profilePageLastName" v-model="profilePageLastName"/>
            <label :for="profilePageUserName">Username:</label> 
            <input type="text" id="profilePageUserName" v-model="profilePageUsername"/>
            <label :for="profilePageEmail">Email</label> 
            <input type="text" disabled id="profilePageEmail" v-model="profilePageEmail"/>
            <label>Uplaod Resume</label>
            <input @change="handleChange" type="file">
            <div>
                Current Resume: 
                {{ profilePageResume }}
            </div>
            
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
        url: null,
        filePath: null,

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
           
            
           await this.UPDATE_USER_INFO(this.profilePageFirstName, this.profilePageLastName, this.profilePageUsername, this.file);
        this.theSuccesModal = true;
        await console.log(this.profilePageResume);
        
        
        //this.$router.push({name: "JobResults"});
        }
      
        
    },
    changeName(){
        this.profilePageFirstName = this.profileFirstName;
        this.profilePageLastName = this.profileLastName;
        this.profilePageUsername = this.profileUserName;
        this.profilePageEmail = this.profileEmail;
        this.profilePageResume = this.profileResume;
        
      },   
    handleChange(e){
        const types = ["application/vnd.openxmlformats-officedocument.wordprocessingml.document"];


        const selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            this.file = selected;
            this.fileErr = null;
        } else {
            this.file = null;
            this.fileErr = 'Please sleect a document file type'
        };
        
    },
      
},
computed: {
    ...mapState(useUserStore, ["profileEmail","profileUserName", "profileFirstName","profileLastName","profileResume","profileResume"]),
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