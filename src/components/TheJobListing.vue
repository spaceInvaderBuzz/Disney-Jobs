<template>
   <li>
    <h1>{{ job.title}}</h1>
    <h2>{{job.organization}}</h2>
    <ul>
       <li v-for="location in job.locations" :key="location">
        {{ location }}
       </li>
    </ul>
    <ul>
        <li v-for="qualification in job.minimumQualifications" :key="qualification">
            {{ qualification }}
        </li>
    </ul>
    <div class="buttonthing">
        <router-link :to="jobPageLink">sniff me</router-link>
    </div>
   </li>
  
</template>

<script>
export default {
    name: "TheJobListing",
    props:["job"],
    computed: {
        jobPageLink(){
            return `/jobs/results/${this.job.id}`
        }
    }
}
</script>

<style>

</style>