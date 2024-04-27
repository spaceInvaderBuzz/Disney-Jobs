<template>
    <div :class="{ blackBackgroundAllResults: displayedJobs.length >= 8, blackBackgroundHalfResults: displayedJobs.length <= 4 }">
        <nav class="main-nav">
            <ul class="main-items">
                <div @click="console" class="logo">Disney Careers</div>
                <div v-if="localUser">
                  <div class="nav-split">
                    <div class="loggedIn">
                      <div class="profile-email">{{ profileEmail }}</div>
                     <div class="name-and-last-name">Welcome, {{ profileFirstName }}, {{profileLastName}}!</div>
                   </div>
                   <div class="profile-info">
                    
                    <router-link class="profile-button" :to="{ name: 'ProfilePage'}">Profile</router-link>
                    <div class="profile-button" @click="signOut">Sign Out</div>
                    <div class="profile-image-container">
                      <img :src="profileImg" alt="">
                     
                    </div>
                   </div>
                   
                  </div>
                  
                    
                   
                  
                    
                </div>
               
                <div v-else class="login-and-signup">
                    <li><router-link :to="{ name: 'TheLoginPage' }">Log In</router-link></li>
                <li><router-link :to="{ name: 'TheRegister' }">Sign Up</router-link></li>
                </div>
                
            </ul>
        </nav>
        <nav class="filter-nav">
            <job-filters-sidebar></job-filters-sidebar>
         </nav>
       
        <div class="flex-cool">
           
            <div class="container">
                <p>job listings componet</p>
                <div v-if="displayedJobs.length > 0">
                    <ol>
                        <the-job-listing v-for="job in displayedJobs" :key="job.id" :job="job"></the-job-listing>
                    </ol>
                    <div class="currentpage">Page {{ currentPage }}</div>
                    <div class="previous-and-next">
                        <div>
                            <router-link v-if="previousPage" :to="{ name: 'JobResults', query: { page:previousPage } }">Previous</router-link>
                        </div>
                        <div>
                            <router-link v-if="nextPage" :to="{ name: 'JobResults', query: { page:nextPage } }">Next</router-link>
                        </div>
                    </div>
                </div>
                <div v-else class="no-results"></div>
                
                
               
            </div>
        </div>
        
    </div>
    

</template>

<script>
import axios from "axios";
import ChangesSavedModal from '@/components/ChangesSavedModal.vue';
import JobListings from '@/components/JobListings.vue';
import JobFiltersSidebar from '../components/JobFiltersSidebar.vue';
import { mapState, mapActions } from 'pinia';
import { useUserStore, GET_CURRENT_USER, SET_PROFILE_INITIALS, CHANGE_USER } from '@/piniastores/user';
import { useJobsStore, FILTERED_JOBS, FETCH_JOBS, UNIQUE_JOB_LOCATIONS, UNIQUE_DEGREE_TYPES } from '@/piniastores/jobs';
import TheJobListing from "@/components/TheJobListing.vue";




export default {
    name: "JobResultsView",
    props: ["displayedJobs"],
    data(){
        return {
            allResults: "",
            halfResults: "",
        };
    },
    components: {
        JobFiltersSidebar,
        JobListings,
        ChangesSavedModal,
        TheJobListing
    },

    methods: {
        ...mapActions(useJobsStore, [FETCH_JOBS]),
        console(){
            console.log(this.UNIQUE_DEGREE_TYPES);
        },
        
       
    },
   

    computed: {
        ...mapState(useUserStore, ["user", "profileFirstName","profileLastName","profileInitials", "profileUserName","profileImg"]), //u can acces this.profilefirstname isntead of ths.userStore.blablabla
        ...mapState(useJobsStore, [UNIQUE_JOB_LOCATIONS, UNIQUE_DEGREE_TYPES]),
        localUser(){
        return this.user ? true : false;
       },

       currentPage(){
            return Number.parseInt(this.$route.query.page || "1");
        },
        previousPage() {
            const previousPage = this.currentPage - 1;
            const firstPage = 1;
            return previousPage >= firstPage ? previousPage : undefined;  //3
        },
        ...mapState(useJobsStore,["jobs", FILTERED_JOBS]), //when we extract getters, they are called automaitclaly

            nextPage() {
            const nextPage = this.currentPage + 1;
            const maxPage = this.FILTERED_JOBS.length / 10;
            return nextPage <= maxPage ? nextPage : undefined; 
        },
        displayedJobs() {
            
            
            const firstJobIndex = (this.currentPage - 1) * 10;
            const lastJobIndex = this.currentPage * 10;
            return this.FILTERED_JOBS.slice(firstJobIndex,lastJobIndex);
        },
        
    },
    async mounted(){
        this.FETCH_JOBS();
       
        
    },
};
</script>

<style scoped>
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







.no-results{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: green;
}
.blackBackgroundAllResults {
    background: url("/src/assets/images/Untitled_Artwork 62.png");
    background-position: center center/cover;
    height: 4900px;
}
.blackBackgroundHalfResults  {
    background: url("/src/assets/images/Untitled_Artwork 62.png");
    background-position: center center/cover;
    height: 2450px;
}

.filter-nav {
    background: yellow;
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

.filter-nav {
    position: sticky;
    top: 0;
    z-index: 3;
}

.no-results {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: green;
}

.previous-and-next {
    display: flex;
    justify-content: space-between;
    margin: 40px 0;
}
.black-background {
    background: black;
}
.currentpage {
    display: flex;
    justify-content: center;
}

</style>