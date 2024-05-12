<template>
   
    <section class="navigations">
        
            <job-filters-sidebard-organizations></job-filters-sidebard-organizations>
            <job-filters-sidebar-job-types></job-filters-sidebar-job-types>
            <job-filters-sidebar-degrees></job-filters-sidebar-degrees>
            <job-filters-sidebar-degrees></job-filters-sidebar-degrees>

        
   
    </section>
  
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useUserStore, CLEAR_FILTERS, SYNC_CLEAR_FILTERS } from '@/piniastores/user';
import JobFiltersSidebardOrganizations from './JobFiltersSidebardOrganizations.vue';
import JobFiltersSidebarJobTypes from './JobFiltersSidebarJobTypes.vue';
import JobFiltersSidebarDegrees from './JobFiltersSidebarDegrees.vue';
export default {
    name: "JobFiltersSidebar",
   components: { JobFiltersSidebardOrganizations, JobFiltersSidebarJobTypes, JobFiltersSidebarDegrees },
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
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 60px;
    background: rgb(0, 0, 0);
    box-shadow: 0 4px 40px -9px #ff005167;
    padding: 20px 100px;
    


}
@media (max-width: 1068px){
    .navigations {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 20px;
    }
}

@media (max-width: 670px){
  .navigations {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap:20px;
  }
}

</style>