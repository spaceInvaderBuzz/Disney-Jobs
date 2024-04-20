<template>
    <keep-alive>
        <changes-saved-modal></changes-saved-modal>
    </keep-alive>

    <nav class="navtempcool">
        
        
        The Navbar
        {{ profileFirstName }}
        {{ profileLastName}}
        {{ profileUserName }}
        {{ profileInitials }}
        <button class="buttton" @click="signOut">Sign Out</button>
    </nav>
    <div class="flex-cool">
        <job-filters-sidebar></job-filters-sidebar>
        <job-listings></job-listings>
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
.flex-cool {
    display: flex;
    gap: 400px;
}

.navtempcool {
    margin-bottom: 100px;
}
.buttton {
    margin-top:100px;
}

</style>