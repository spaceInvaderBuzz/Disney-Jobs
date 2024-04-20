import { defineStore } from "pinia";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import db from "@/firebase/firebaseInit";


export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const ADD_SELECTED_ORGANIZATIONS = "ADD_SELECTED_ORGANIZATIONS";
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";
export const SYNC_CLEAR_FILTERS = "SYNC_CLEAR_FILTERS";
export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const CHANGE_USER = "CHANGE_USER";
export const SET_PROFILE_INITIALS = "SET_PROFILE_INITIALS";

export const useUserStore = defineStore("user", {       
    state: () => ({
       selectedOrganizations: [],
       selectedJobTypes: [],
       user: "",
       profileFirstName: "",
       profileLastName: "",
       profileInitials: "",
       profileUserName: "",
    }),
    actions: {
      async [GET_CURRENT_USER](){
         const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
         const dbResults = await dataBase.get();
         this.profileFirstName = await dbResults.data().firstName;
         this.profileLastName = await dbResults.data().lastName;
         this.profileUserName = await dbResults.data().username;

      },
      [SET_PROFILE_INITIALS](){
         this.profileInitials = this.profileFirstName.match(/(\b\S)?/g).join("") +
         this.profileLastName.match(/(\b\S)?/g).join("");
      },
      [CHANGE_USER](){
         const isUserLoggedIn = firebase.auth().onAuthStateChanged((currentUser) => {
            this.user = currentUser });
      },
       [ADD_SELECTED_ORGANIZATIONS](parameter){
        this.selectedOrganizations = parameter;
       },
       [ADD_SELECTED_JOB_TYPES](paramter){
         this.selectedJobTypes = paramter;
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


