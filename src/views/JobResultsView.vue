<template>
    <div class="blackBackgroundAllResults">
    <jobs-navbar></jobs-navbar>
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
                <div v-else class="no-results">
                    <div class="no-results-img"></div>
                    <div class="no-results-text">
                        <h1>No results found</h1>
                        <p>Looks likew there are no results here. Try searching with less filters</p>
                    </div>
                   

                </div>
                
                
                
               
            </div>
        </div>
     
    </div>
    <the-footer></the-footer>

</template>

<script>
import axios from "axios";
import ChangesSavedModal from '@/components/ChangesSavedModal.vue';
import JobListings from '@/components/JobListings.vue';
import JobFiltersSidebar from '../components/JobFiltersSidebar.vue';
import { mapState, mapActions } from 'pinia';
import { useUserStore, GET_CURRENT_USER, SET_PROFILE_INITIALS, CHANGE_USER, ADD_SELECTED_DEGREE_TYPES, ADD_SELECTED_ORGANIZATIONS, ADD_SELECTED_JOB_TYPES } from '@/piniastores/user';
import { useJobsStore, FILTERED_JOBS, FETCH_JOBS, UNIQUE_JOB_LOCATIONS, UNIQUE_DEGREE_TYPES } from '@/piniastores/jobs';
import TheJobListing from "@/components/TheJobListing.vue";
import JobsNavbar from '@/components/JobsNavbar.vue';
import TheFooter from "@/components/TheFooter.vue";




export default {
    name: "JobResultsView",
    components: {
        JobFiltersSidebar,
        JobListings,
        ChangesSavedModal,
        TheJobListing, JobsNavbar,
        TheFooter,
    },
    data(){
        return {
            allResults: "",
            halfResults: "",
        };
    },
   

    methods: {
        ...mapActions(useJobsStore, [FETCH_JOBS]),
        console(){
            console.log(this.UNIQUE_DEGREE_TYPES);
        },
        console(){
            console.log(this.displayedJobs.length);
        }
       
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








.blackBackgroundAllResults {
    background: url("/src/assets/images/Untitled_Artwork 62.png");
    background-position: center center/cover;
    max-height: 100%;
    overflow: hidden;
}
.blackBackgroundHalfResults  {
    background: url("/src/assets/images/Untitled_Artwork 62.png");
    background-position: center center/cover;
    max-height: 100%;
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
   
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
    height: 100vh;
}

.no-results-img {
    margin-top: -200px;
    background: url("/src/assets/images/Untitled_Artwork\ 103.png") no-repeat;
    background-size: contain;
    width: 650px;
    height: 650px;
}

.no-results-text {
    margin-top:-150px;
    text-align: center;
}
.no-results-text h1 {
    font-size: 5rem;
}
.no-results-text p {
    font-size: 1.3rem;
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
.container {
    color: white;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 30px;
        
      
      
      }

</style>