<template>
   <li class="listing">
    <div class="seperator">
        <h1 class="job-title">{{ job.title}}</h1>
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
    </div>
    
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

<style scoped>
.listing:hover {
   background-color: rgba(255, 255, 255, 0.027);
   backdrop-filter: blur(8px);
   transform: scale(1.03);
   
}
.job-title {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 2px solid #ff004f;
}
.listing {
    margin:70px;
    border-radius: 20px;
    border: 4px solid white;
    padding: 50px 70px;
    display: flex;
    gap: 100px;
    align-items: center;
    transition: 0.3s;

}

.button-thing {
    display: flex;
}


</style>