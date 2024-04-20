<template>
    <div @click="showFilters" class="dorpcown-cotnaienr">
        <h1>Figma</h1>
        <i class="fas fa-arrow"></i>
    </div>
    <div v-if="filters" class="filters">
        <ul>
            <li v-for="organization in UNIQUE_ORGANIZATIONS" :key="organization">
                <input type="checkbox" :id="organization" :value="organization" v-model="selectedLocalOrganizations" @change="selectOrganization">
                <label :for="organization">{{ organization }}</label>
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
data(){
    return {
        filters: null, //true
    };
},
methods: {
    showFilters(){
        this.filters = !this.filters;
    },
},
}
</script>

<style>

</style>