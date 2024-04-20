<template>
    <collapsible-accordion header="Organizations">
        <ul>
            <li v-for="organization in UNIQUE_ORGANIZATIONS" :key="organization">
                <input type="checkbox" :id="organization" :value="organization" v-model="selectedLocalOrganizations" @change="selectOrganization">
                <label :for="organization">{{ organization }}</label>
                
            </li>
           
        </ul>
    </collapsible-accordion>
    
   
        
       
</template>

<script>
import { mapState, mapStores, mapActions} from "pinia";

import { useJobsStore, UNIQUE_ORGANIZATIONS } from "@/piniastores/jobs"
import { useUserStore, ADD_SELECTED_ORGANIZATIONS, SYNC_CLEAR_FILTERS } from "@/piniastores/user"

import CollapsibleAccordion from './CollapsibleAccordion.vue';

export default {
    name: "JobFiltersSidebarOrganizations",
    components: { CollapsibleAccordion },
    props: ['clearing'],   //clearThis
    data(){
        return {
            selectedLocalOrganizations: [],
        };
    },
    computed: {
        ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS, SYNC_CLEAR_FILTERS]), //alreasy calls it, this is a set 
        
    },
    methods: {
        ...mapActions(useUserStore, [ADD_SELECTED_ORGANIZATIONS]),
        selectOrganization(){
            this.ADD_SELECTED_ORGANIZATIONS(this.selectedLocalOrganizations);
       
        },
        

    },
   
  
};
</script>

<style>

</style>