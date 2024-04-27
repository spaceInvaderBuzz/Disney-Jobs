<template>
    <collapsible-accordion header="Degree">
        <ul class="the-filters">
            <li v-for="degree in UNIQUE_DEGREE_TYPES" :key="degree" class="individual-item">
                <input type="checkbox" :id="degree" :value="degree" v-model="selectedLocalDegrees" @change="selectDegree">
                <label :for="degree">{{ degree }}</label>
                
            </li>
           
        </ul>
    </collapsible-accordion>
    
    

</template>

<script>
import { mapState, mapStores, mapActions } from 'pinia';
import { useJobsStore, UNIQUE_DEGREE_TYPES} from "@/piniastores/jobs";
import {useUserStore, ADD_SELECTED_DEGREE_TYPES  } from "@/piniastores/user"
import CollapsibleAccordion from './CollapsibleAccordion.vue';


export default {
    name: "JobFiltersSidebarDegrees",
    components: { CollapsibleAccordion },
    data(){
        return {
            selectedLocalDegrees: [],
        }
    },
    computed: {
        ...mapState(useJobsStore, [UNIQUE_DEGREE_TYPES]),
    },
    methods: {
        ...mapActions(useUserStore, [ADD_SELECTED_DEGREE_TYPES]),
        selectDegree(){
            this.ADD_SELECTED_DEGREE_TYPES(this.selectedLocalDegrees);
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