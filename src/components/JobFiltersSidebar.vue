<template>
    <section>
    <div>Job Filters SideBar</div>
    <h2>whut u wanna do?</h2>
    <job-filters-sidebard-organizations :clearing="letsClearThis"></job-filters-sidebard-organizations>
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

<style>

</style>