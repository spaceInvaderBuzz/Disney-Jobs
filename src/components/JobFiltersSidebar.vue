<template>
    <section class="navigations">
    <job-filters-sidebard-organizations></job-filters-sidebard-organizations>
   <job-filters-sidebar-job-types></job-filters-sidebar-job-types>
   <job-filters-sidebard-organizations></job-filters-sidebard-organizations>
   <job-filters-sidebar-job-types></job-filters-sidebar-job-types>
   
    </section>
  
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useUserStore, CLEAR_FILTERS, SYNC_CLEAR_FILTERS } from '@/piniastores/user';
import JobFiltersSidebardOrganizations from './JobFiltersSidebardOrganizations.vue';
import JobFiltersSidebarJobTypes from './JobFiltersSidebarJobTypes.vue';
export default {
    name: "JobFiltersSidebar",
   components: { JobFiltersSidebardOrganizations, JobFiltersSidebarJobTypes },
   data(){
    return {
      
    };
   },
   methods: {
   
   },
};


</script>

<style scoped>
.navigations {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 60px;
    background: red;
    padding: 20px 100px;
    
}

</style>