import { defineStore } from "pinia";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import 'firebase/compat/storage';
import db from "@/firebase/firebaseInit";


export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const ADD_SELECTED_ORGANIZATIONS = "ADD_SELECTED_ORGANIZATIONS";
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";
export const ADD_SELECTED_DEGREE_TYPES = "ADD_SELECTED_DEGREE_TYPES";
export const SYNC_CLEAR_FILTERS = "SYNC_CLEAR_FILTERS";
export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const CHANGE_USER = "CHANGE_USER";
export const SET_PROFILE_INITIALS = "SET_PROFILE_INITIALS";
export const UPDATE_USER_INFO = "UPDATE_USER_INFO";
export const GET_USER_PROFILE_IMG = "GET_USER_PROFILE_IMG";
export const LOAD_PAGE = "LOAD_PAGE";

export const useUserStore = defineStore("user", {       
    state: () => ({
       dataFetchedComplete: false,
       pageLoaded: false,
       imgPageLoaded: false,
       selectedOrganizations: [],
       selectedJobTypes: [],
       selectedDegreeTypes: [],
       user: "",
       profileFirstName: "",
       profileLastName: "", 
       profileInitials: "",
       profileUserName: "",
       profileEmail: "",
       profileResume: "",
       profileImg: "", 
    }),
    actions: {
      async [UPDATE_USER_INFO](parameter1, parameter2, parameter3,parameter4, parameter5){
         const dataBase = await db.collection('users').doc(firebase.auth().currentUser.uid);
         await dataBase.update({
            firstName: parameter1,
            lastName: parameter2,
            username: parameter3,
         }); //here is where i am goign t oupalote the file to firestorarge 
         //const profileFilePath = `covers/${firebase.auth().currentUser.uid}/${this.file.name}`;
         
       
      },
      async [GET_CURRENT_USER](){
         const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
         const dbResults = await dataBase.get();
         this.profileFirstName = await dbResults.data().firstName;
         this.profileLastName = await dbResults.data().lastName;
         this.profileUserName = await dbResults.data().username;
         this.profileEmail = await dbResults.data().email;
         this.pageLoaded = true;
         this.dataFetchedComplete = true;
         

      },
      async [GET_USER_PROFILE_IMG](){
         const profileImageDataBase = await db.collection("images").doc(firebase.auth().currentUser.uid);
         const profileImageDataBaseResults = await profileImageDataBase.get();
         this.profileImg = await profileImageDataBaseResults.data().filepath;
         this.imgPageLoaded = true;
         this.dataFetchedComplete = true;
        
      },
     
      [SET_PROFILE_INITIALS](){
         this.profileInitials = this.profileFirstName.match(/(\b\S)?/g).join("") +
         this.profileLastName.match(/(\b\S)?/g).join("");
      },
      [CHANGE_USER](){
        firebase.auth().onAuthStateChanged((currentUser) => {
            this.user = currentUser });
      },
       [ADD_SELECTED_ORGANIZATIONS](parameter){
        this.selectedOrganizations = parameter;
       },
       [ADD_SELECTED_JOB_TYPES](paramter){
         this.selectedJobTypes = paramter;
       },
       [ADD_SELECTED_DEGREE_TYPES](parameter){
         this.selectedDegreeTypes = parameter; 
       },
       [CLEAR_FILTERS](){
         this.selectedJobTypes = [];
         this.selectedOrganizations =[];
       },
       [SYNC_CLEAR_FILTERS](parameter){
         parameter = this.selectedOrganizations;

       },
    },
});


