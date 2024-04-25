<template>

  
   
    
</template>

<script>
import axios from "axios";
import { useJobsStore, FETCH_JOBS, FILTERED_JOBS} from "@/piniastores/jobs";
import { mapActions, mapState } from "pinia";
import TheJobListing from "@/components/TheJobListing.vue"
export default {
    name: "JobListings",
    components: { TheJobListing },
    data(){
        return {
          
        };
    },
   
    computed: {


       
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
   
    methods:{
        ...mapActions(useJobsStore, [FETCH_JOBS]),
    },
    async mounted(){
        this.FETCH_JOBS();
        
    },
};
</script>

<style scoped>


</style>