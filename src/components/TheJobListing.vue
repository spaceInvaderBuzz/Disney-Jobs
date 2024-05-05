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
       
        <router-link :to="jobPageLink">
            <div class="go-to-job-container">Go To Job <i class="fas fa-long-arrow-right"></i></div></router-link>
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

.buttonthing {
    background: black;
    padding: 20px 25px;
    border-radius: 50px;
    text-align: center;
    border: #ff004f 1px solid;
}

.buttonthing a {
    text-decoration: none;
    color: white;
}

.buttonthing i {
    margin-left: 8px;
    width: 0;
    overflow: hidden;
    transition: 0.5s;
}


.buttonthing:hover i {
    width: 20px;
}



.buttonthing span {
    background: blue;
    margin-right: 5px;
}

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
    padding: 45px 40px;
    display: grid;
    grid-template-columns: 4fr 1fr ;
    gap: 15px;
    align-items: center;
    transition: 0.3s;

}


</style>