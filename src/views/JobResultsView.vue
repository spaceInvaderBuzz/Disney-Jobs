<template>
    <div class="black-background">
        <nav class="main-nav">
            <ul class="main-items">
                <div class="logo">Disney Careers</div>
                <div v-if="localUser">
                    Welcome, {{ profileFirstName }}, {{profileLastName}}!
    
                </div>
                <div v-else class="login-and-signup">
                    <li><router-link :to="{ name: 'Login' }">Log In</router-link></li>
                <li><router-link :to="{ name: 'Register' }">Sign Up</router-link></li>
                </div>
                
            </ul>
        </nav>
        <nav class="filter-nav">
            <job-filters-sidebar></job-filters-sidebar>
         </nav>
       
        <div class="flex-cool">
           
            <job-listings></job-listings>
        </div>
    </div>
    

</template>

<script>
import ChangesSavedModal from '@/components/ChangesSavedModal.vue';
import JobListings from '@/components/JobListings.vue';
import JobFiltersSidebar from '../components/JobFiltersSidebar.vue';
import { mapState, mapActions } from 'pinia';
import { useUserStore, GET_CURRENT_USER, SET_PROFILE_INITIALS, CHANGE_USER} from '@/piniastores/user';

export default {
    name: "JobResultsView",
    data(){
        return {
        
        };
    },
    components: {
        JobFiltersSidebar,
        JobListings,
        ChangesSavedModal
    },
   

    computed: {
        ...mapState(useUserStore, ["user", "profileFirstName","profileLastName","profileInitials", "profileUserName"]), //u can acces this.profilefirstname isntead of ths.userStore.blablabla
       localUser(){
        return this.user ? true : false;
       },
    },
    mounted(){
       
    }
};
</script>

<style scoped>
.black-background {
    background: url("/src/assets/images/Untitled_Artwork 62.png");
    background-position: center center/cover;
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

</style>