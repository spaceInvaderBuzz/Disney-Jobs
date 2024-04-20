<template>
  <div>Job Page kaido</div>
 <ul>
  <li v-for="singleJob in singleJobPage" :key="singleJob.id">
    {{ singleJob.title }}
    {{ singleJob.organization }}
  </li>
 </ul>
</template>

<script>

import { mapActions, mapState } from 'pinia';
import { useJobsStore } from '@/piniastores/jobs';
import { FETCH_JOBS } from '@/piniastores/jobs';

export default {
name: "JobView",
props: ["id"],

computed: {
  ...mapState(useJobsStore, ["jobs"]),
  singleJobPage(){
    return this.jobs.filter((job) => job.id === this.id);
  },

},

methods: {
  ...mapActions(useJobsStore, [FETCH_JOBS]),
  
},
async created(){
  await this.FETCH_JOBS();
  console.log(this.jobs);
}
};

</script>

<style>

</style>