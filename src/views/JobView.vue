<template>
  <div class="skidmark">
    <div class="background">
      <nav class="main-nav">
        <ul class="main-items">
            <div class="logo">Disney Careers</div>
            <div v-if="localUser">
                Welcome, {{ profileFirstName }}, {{profileLastName}}!
    
            </div>
            <div v-else class="login-and-signup">
                <li><router-link :to="{ name: 'TheLoginPage' }">Log In</router-link></li>
            <li><router-link :to="{ name: 'TheRegister' }">Sign Up</router-link></li>
            </div>
            
        </ul>
    </nav>
    <div class="pimg1">ANIMATION</div>
    <div class="container-for-job-page">
      <div class="info-box">
        <h1>JOB DESCRIPTION</h1>
        <ul>
          <li v-for="singleJob in singleJobPage" :key="singleJob.id">
            {{ singleJob.organization }}
            <li v-for="qualification in singleJob.minimumQualifications" :key="qualification">
              {{ qualification }}
            </li>
            <li v-for="description in singleJob.description" :key="description">
              {{ description  }}
            </li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dignissimos vero quidem ab in esse culpa veritatis laboriosam, tenetur non veniam nobis fugit enim qui ipsum a voluptates! Nisi assumenda dicta facere quibusdam ad numquam quasi earum quaerat laborum odit illo placeat, quia exercitationem sunt quam soluta accusantium, sapiente perferendis aperiam, repellat minus. Ab quos ipsum iure, velit fugiat voluptatem voluptatibus pariatur magnam, inventore voluptas dolorum culpa error facere praesentium quasi et autem amet sit? Veniam quaerat quo dolor numquam autem. Quae, optio debitis dolores ratione ducimus iste! Officiis ab unde architecto aperiam rem ad? Deserunt nobis facere maiores dolorem pariatur eveniet commodi doloremque sunt, obcaecati facilis illum temporibus in, debitis placeat sequi voluptates? Ipsa ab tenetur nobis dolores quaerat excepturi impedit, labore consequuntur recusandae, amet nemo perspiciatis laudantium, quis quo! Totam corporis iste, impedit aliquam consectetur maxime quibusdam neque officia fugiat est sapiente dolore doloremque veritatis possimus sed vel fugit deserunt aliquid esse quidem voluptatem repellendus? Consequuntur amet quibusdam saepe quaerat sit harum commodi veritatis soluta minima impedit, qui ipsam adipisci mollitia exercitationem fuga velit deserunt ab. Quae molestias inventore distinctio ad eaque illo corrupti error voluptatem aperiam esse rerum, consequatur architecto laborum reprehenderit, non alias, voluptas itaque! Laborum veniam odio necessitatibus ducimus distinctio ut dolorem, sit nihil soluta corporis nobis. Laboriosam repellendus aliquam fugiat in, iste harum tempora tempore temporibus laborum, quia ducimus, deleniti pariatur. Vero, quibusdam accusantium quidem, dignissimos quos quaerat officia qui unde eaque perferendis atque nulla nihil explicabo natus placeat. Ea quo autem eligendi quos velit doloremque aliquam laboriosam dolor commodi nesciunt consequuntur blanditiis ad eos possimus, exercitationem quibusdam dolore omnis nam corrupti? Nemo, similique, autem officiis earum cupiditate vitae culpa quasi odio magni nisi atque voluptates asperiores expedita optio quidem alias beatae magnam cumque minima perferendis voluptatibus. Excepturi voluptatum culpa fuga inventore vero aspernatur voluptate odit, cumque aperiam minus veritatis ex laudantium? Rem neque, velit nostrum, aperiam adipisci dignissimos pariatur hic illo laborum corporis, perspiciatis porro ab blanditiis sapiente dolores quia officia dicta unde? Assumenda iusto aperiam unde soluta recusandae. Ratione quae error neque est deserunt nulla. Laborum consequatur, earum illum deserunt maxime iure itaque corrupti, dolor, inventore vitae beatae necessitatibus totam quaerat qui numquam! Nostrum repellat tempora vitae aliquam ad doloribus, tempore alias iure eum earum, quas iste omnis reiciendis repudiandae numquam! Excepturi assumenda esse deserunt, odit ratione explicabo minima ad distinctio. Explicabo deleniti totam, soluta voluptatem ea blanditiis consequatur alias facilis magni, aliquam iusto beatae similique perspiciatis, rerum ipsa vitae id voluptas vel fugiat eius? Quasi eius temporibus molestiae molestias, non dolore dolor ipsam at nam amet, harum totam qui libero exercitationem id? Officiis ratione dolores tenetur? Architecto soluta eaque voluptatibus excepturi, commodi numquam autem sed velit voluptate rerum. Ipsa sapiente id pariatur praesentium suscipit blanditiis aperiam libero alias? Ab ut sint minus dolorum quod adipisci praesentium esse, est alias autem illo inventore rerum pariatur, dolor, odit dolores quae consequatur beatae provident nobis? Vel culpa nam quibusdam, optio distinctio nobis eaque inventore. Nisi maxime ipsam consectetur similique cum quasi quas, repellat laboriosam?
          </li>
              
         </ul>
      </div>
      <div class="apply-box">
        <li v-for="singleJob in singleJobPage" :key="singleJob.id">
          {{ singleJob.title }}
       
          </li>
          <h3>Location: New Jersey</h3>
          <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo consectetur deleniti ea incidunt provident ratione?</div>
          <router-link class="apply-buttomn" :to="{ name: 'JobApplication'}">Apply Now</router-link>
      </div>
      
    </div>
    
  </div>
  </div>

 


 
</template>

<script>

import { mapActions, mapState } from 'pinia';
import { useJobsStore } from '@/piniastores/jobs';
import { FETCH_JOBS } from '@/piniastores/jobs';
import { useUserStore } from '@/piniastores/user';

export default {
name: "JobView",
props: ["id"],

computed: {
  ...mapState(useJobsStore, ["jobs"]),
  singleJobPage(){
    return this.jobs.filter((job) => job.id === this.id);
  },
        ...mapState(useUserStore, ["user", "profileFirstName","profileLastName","profileInitials", "profileUserName"]), //u can acces this.profilefirstname isntead of ths.userStore.blablabla
       localUser(){
        return this.user ? true : false;
       },
    },

methods: {
  ...mapActions(useJobsStore, [FETCH_JOBS]),
  
},
async created(){
  await this.FETCH_JOBS();
}
};
//#ff004f;
</script>
<style scoped>



@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Mouse+Memoirs&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Princess+Sofia&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

.skidmark {
  background: black;
}
.pimg1 {
  font-family: 'Bebas Neue';
  display: flex;
  align-items: center;
  font-size: 200px;
  letter-spacing: 10px;
  color: white;
  justify-content: center;
  background-image: url('/src/assets/images/Untitled_Artwork 63.png');
  height: 700px;
  position: relative;
  background-position: center;
  background-size:cover;
  background-repeat:no-repeat;
  background-attachment: fixed;

 
}



.container-for-job-page {
  
  padding: 10px 30px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
  color: white;
  background: black;
  margin: 100px auto;
  max-width: 1500px;

}

.info-box {
  
}


.login-and-signup {
  display: flex;
  gap: 40px;
}
.logo {
  font-size: 50px;
}
.main-nav {
  background: rgb(255, 255, 255);
  padding: 30px ;
}
.main-items {

  align-items: center;
  display: flex;
  justify-content: space-between;

}



</style>