<template>
    <collapsible-accordion header="Job Types">
        <ul>
            <li v-for="jobType in UNIQUE_JOB_TYPES" :key="jobType">
                <input type="checkbox" :id="jobType" :value="jobType" v-model="selectedLocalJobTypes" @change="selectJobType">
                <label :for="jobType">{{ jobType }}</label>
            </li>
        </ul>
    </collapsible-accordion>
    
   
        
       
</template>

<script>
import { mapState, mapStores, mapActions} from "pinia";

import { useJobsStore, UNIQUE_JOB_TYPES } from "@/piniastores/jobs"
import { useUserStore, ADD_SELECTED_JOB_TYPES } from "@/piniastores/user"

import CollapsibleAccordion from './CollapsibleAccordion.vue';

export default {
    name: "JobFiltersSidebarJobTypes",
    components: { CollapsibleAccordion },
    data(){
        return {
            selectedLocalJobTypes: [],
        };
    },
    computed: {
        ...mapState(useJobsStore, [UNIQUE_JOB_TYPES]), //alreasy calls it, this is a set 
   
        
    },
    methods: {
        ...mapActions(useUserStore, [ADD_SELECTED_JOB_TYPES]),
        selectJobType(){
            this.ADD_SELECTED_JOB_TYPES(this.selectedLocalJobTypes);
       
        },

    },
  
};
</script>

<style>

</style>