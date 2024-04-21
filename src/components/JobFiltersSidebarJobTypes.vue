.the-filters input:after {
    font-family: "FontAwesome";
    height: 100%;
    width: 100%;
    content: "\f00c";
    color: white;
    display: none;
    
}



.the-filters input:checked:after{
    display: block;
}

<template>
    <collapsible-accordion header="Job Types">
        <ul class="the-filters">
            <li v-for="jobType in UNIQUE_JOB_TYPES" :key="jobType" class="individual-item">
                <input type="checkbox" :id="jobType" :value="jobType" v-model="selectedLocalJobTypes" @change="selectJobType">
                <label class="pointerevents" :for="jobType">{{ jobType }}</label>
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

<style scoped>

.pointerevents {
    cursor: pointer;
}


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