<template>
    <collapsible-accordion header="Organizations">
        <ul class="the-filters">
            <li v-for="organization in UNIQUE_ORGANIZATIONS" :key="organization" class="individual-item">
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

<style scoped>
.individual-item {
    cursor: pointer;
    padding: 5px;
    padding-right: 30px;
    display: flex;
    align-items: center;
    text-align: center;
    
}

.individual-item:hover {
    background: rgb(51, 51, 51);
    border-radius: 5px;
}

.the-filters {
    color: white;
    background: rgb(18, 18, 18);
    position: absolute;
    top: 10px;
    padding: 20px;
}

.the-filters li {
    list-style: none;
}
.the-filters li label {
    margin-left: 10px;
}

.the-filters input {
    appearance: none;
    height: 15px;
    width: 15px;
    background: rgb(47, 47, 47);
    border-radius: 20px;
    cursor: pointer;
    margin: 5px;
}




.individual-item:hover input {
    background: rgb(18, 18, 18);
} 
.the-filters input:checked {
    background: #ff004f;
    
}

</style>