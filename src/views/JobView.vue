<template>
<div class="hopefully-this-class-fixes-everything">

  <div class="skidmark">
    <div class="background">
      <jobs-navbar></jobs-navbar>
    <div v-for="singleJob in singleJobPage" :key="singleJob">
      <div :class="{ pimg1:singleJob.organization === VueAndMe, pimg2:singleJob.organization === VueTube, pimg3:singleJob.organization === VueCanDoIt }">
        
        <div class="job-header">{{ singleJob.organization }}</div>
      
      </div>
    </div>
    
    <div v-if="mobile" class="container-for-job-page">
      <div class="apply-box">
        <li v-for="singleJob in singleJobPage" :key="singleJob.id" class="single-job-title">
          {{ singleJob.title }}
       
          </li>
          <h3>Location: New Jersey</h3>
          <div class="job-apply-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo consectetur deleniti ea incidunt provident ratione?</div>
          <div class="share-this-job">
            <h4>Share this job!</h4>
            <div class="socials">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
         
          <router-link class="apply-button" :to="{ name: 'JobApplication', params: {id: this.$route.params.id } }">Apply Now</router-link>
      </div>
      <div class="info-box">
        <h1 class="job-description">JOB DESCRIPTION</h1>
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
     
      <div class="benefits">
        <div class=benefit>
          <div class="text-and-icon">
            <h1>Retirement Plan</h1>
          <div class="benefit-img1"></div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo consequatur consectetur neque maxime non?</div>
          </div>
          <img src="/src/assets/images/Untitled_Artwork 64.png" alt="">
        </div>
        <div class=benefit>
          <div class="text-and-icon">
            <h1>Health Insurance</h1>
          <div class="benefit-img2"></div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illum consectetur praesentium placeat quae officiis exercitationem quas, harum voluptas eveniet.</div>
          </div>
          <img src="/src/assets/images/Untitled_Artwork 64.png" alt="">
        </div>
        <div class=benefit>
          <div class="text-and-icon">
            <h1>Paid Time Off</h1>
          <div class="benefit-img3"></div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil, nemo nisi sunt quidem quo.</div>
          </div>
          <img src="/src/assets/images/Untitled_Artwork 64.png" alt="">
        </div>
        <div class=benefit>
          <div class="text-and-icon">
            <h1>Health Insurance</h1>
          <div class="benefit-img4"></div>
          </div>
          <img src="/src/assets/images/Untitled_Artwork 64.png" alt="">
        </div>
        </div>
    </div>
    <div v-else class="container-for-job-page">
      <div class="info-box">
        <h1 class="job-description">JOB DESCRIPTION</h1>
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
        <li v-for="singleJob in singleJobPage" :key="singleJob.id" class="single-job-title">
          {{ singleJob.title }}
       
          </li>
          <h3>Location: New Jersey</h3>
          <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo consectetur deleniti ea incidunt provident ratione?</div>
          <div class="share-this-job">
            <h4>Share this job!</h4>
            <div class="socials">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
         
          <router-link class="apply-button" :to="{ name: 'JobApplication', params: {id: this.$route.params.id } }">Apply Now</router-link>
      </div>
      <div class="benefits">
        <div class=benefit>
          <div class="text-and-icon">
            <h1>Retirement Plan</h1>
          <div class="benefit-img1"></div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo consequatur consectetur neque maxime non?</div>
          </div>
          <img src="/src/assets/images/Untitled_Artwork 64.png" alt="">
        </div>
        <div class=benefit>
          <div class="text-and-icon">
            <h1>Health Insurance</h1>
          <div class="benefit-img2"></div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illum consectetur praesentium placeat quae officiis exercitationem quas, harum voluptas eveniet.</div>
          </div>
          <img src="/src/assets/images/Untitled_Artwork 64.png" alt="">
        </div>
        <div class=benefit>
          <div class="text-and-icon">
            <h1>Paid Time Off</h1>
          <div class="benefit-img3"></div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil, nemo nisi sunt quidem quo.</div>
          </div>
          <img src="/src/assets/images/Untitled_Artwork 64.png" alt="">
        </div>
        <div class=benefit>
          <div class="text-and-icon">
            <h1>Health Insurance</h1>
          <div class="benefit-img4"></div>
          </div>
          <img src="/src/assets/images/Untitled_Artwork 64.png" alt="">
        </div>
        </div>
    </div>
    <div class="not-what-you-lookin-for">
      <div class="bottom-box">
        <div>Dont find a good fit?</div>
        <div>We are always looking for talent to join our team.
          if you dont find a position you are looking for join our newsletter 
          and be ntiifed of new openings! 
        </div>
        <label for="email">EMAIL</label>
        <input type="email">
      </div>
      
      <div class="image"></div>
    </div>
    
     
  </div>
  </div>



</div>
   
   <the-footer></the-footer>
 



 


 
</template>

<script>

import { mapActions, mapState } from 'pinia';
import { useJobsStore } from '@/piniastores/jobs';
import { FETCH_JOBS } from '@/piniastores/jobs';
import { useUserStore, GET_USER_PROFILE_IMG } from '@/piniastores/user';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/storage";
import db from "@/firebase/firebaseInit";
import JobsNavbar from '@/components/JobsNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';


export default {
  components: { JobsNavbar, TheFooter },
name: "JobView",
props: ["id"],

data(){
  return {
    VueAndMe: "Vue and Me",
    VueTube: "VueTube",
    VueCanDoIt: "Vue Can Do It",
    windowWidth: null,
    mobile:false,
  };
},

computed: {
  ...mapState(useJobsStore, ["jobs"]),
  ...mapState(useUserStore, ["dataFetchedComplete","profileImg"]),
  
  singleJobPage(){
    return this.jobs.filter((job) => job.id === this.id);
  },
        ...mapState(useUserStore, ["user", "profileFirstName","profileLastName","profileInitials", "profileUserName","profileEmail"]), //u can acces this.profilefirstname isntead of ths.userStore.blablabla
       localUser(){
        return this.user ? true : false;
       },
    },

methods: {
  checkScreen(){
    this.windowWidth = window.innerWidth;
    if(this.windowWidth <= 670 ){
      this.mobile = true;
      return;
    }
    this.mobile = false;

  },
 
  ...mapActions(useJobsStore, [FETCH_JOBS]),
  async signOut(){
    await firebase.auth().signOut();
    this.$router.push({name: 'TheLoginPage'});
  }

},

created(){
  this.checkScreen();
  window.addEventListener('resize', this.checkScreen);
},

async mounted(){  //as soon as i moun this and any compontet tnat use the profile img etc, i want to exrtact data from firebase
  await this.FETCH_JOBS();
  if (this.user) {
  await this.GET_USER_PROFILE_IMG();
  }

}
};

</script>
<style scoped>



@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Mouse+Memoirs&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Princess+Sofia&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

.hopefully-this-class-fixes-everything {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

}

.job-header {
  font-family: 'Bebas Neue';

}

.profile-email {
  font-size: 15px;
  margin-bottom:10px;
}
.profile-info {
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-info .profile-button {
  cursor: pointer;
  background: grey;
  margin: 0 5px;
  text-decoration: none;
  color: white;
  font-size: 12px;
  padding: 10px;
  margin-top: 5px;
}

.profile-image-container img {
  border-radius: 90px;
  width: 100%;
  height: 100%;
  margin: 0 15px;
}

.profile-image-container {
  
  width: 70px;
  height: 70px;
  border-radius: 90px;
}



.nav-split {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.name-and-last-name {
  font-weight: 700;
  font-size: 1.3rem;
}

.bottom-box {
  color: white;
  position: absolute;
  top: 80px;
  left: 100px;
  width: 500px;
  height: 400px;
  background: rebeccapurple;
}

.not-what-you-lookin-for {
  margin: 0 auto;
  max-width: 1500px;
  height: 800px;
  position: relative;

}

.image {
  background: url('/src/assets/images/IMG_7933.JPG') no-repeat;
  width: 100%;
  height: 100%;
  background-size: contain;
}
.benefit-img1{
  background: url('/src/assets/images/Untitled_Artwork 68.png') no-repeat;
  background-position: center;
  background-size: contain ;
 
  width: 100px;
  height: 100px;
}
.benefit-img2{
  background: url('/src/assets/images/Untitled_Artwork 69.png') no-repeat;
  background-position: center;
  background-size: contain ;
  width: 90px;
  height: 90px;
}
.benefit-img3{
  background: url('/src/assets/images/Untitled_Artwork 70.png') no-repeat;
  background-position: center;
  background-size: contain ;
  width: 90px;
  height: 90px;
}

.benefit {
  position: relative;
  width: 350px;
}

.benefits {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin-left:70px;

}

img {
  width: 100%;
  height: 100%;
}

.text-and-icon {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.share-this-job {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.share-this-job h4 {
  margin: 10px 0;
  font-size: 18px;
}

.socials {
  display: flex;
  gap: 10px;
  font-size:20px ;
}


.apply-button {
  background: #ff004f;
  padding: 25px;
  margin-top: 20px;

}

.apply-box h3 {
  margin: 10px 0;
}

li {
  list-style: none;

}

.single-job-title {
  font-size: 43px;
  margin: 15px 0;
  font-weight: 700;
}
.apply-box {
  position: sticky;
  top: 0;
  padding: 40px;
  background: white;
  color: black;
  height: 450px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;

}
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
.pimg2 {
  font-family: 'Bebas Neue';
  display: flex;
  align-items: center;
  font-size: 200px;
  letter-spacing: 10px;
  color: white;
  justify-content: center;
  background-image: url('/src/assets/images/Untitled_Artwork 72.png');
  height: 700px;
  position: relative;
  background-position: center;
  background-size:cover;
  background-repeat:no-repeat;
  background-attachment: fixed;

 
}
.pimg3{
  font-family: 'Bebas Neue';
  display: flex;
  align-items: center;
  font-size: 200px;
  letter-spacing: 10px;
  color: white;
  justify-content: center;
  background-image: url('/src/assets/images/Untitled_Artwork 73.png');
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
  border: 2px solid #ff004f;
  padding: 50px 70px;
  border-radius: 20px;
}

.job-description {
  font-size: 60px;
  border-bottom: 2px solid #ff004f;
  padding: 30px 0;
  margin-bottom:30px ;
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


@media(max-width: 670px){
  .pimg1 {
    font-family: 'Bebas Neue';
    display: flex;
    align-items: center;
    font-size: 100px;
    letter-spacing: 10px;
    color: white;
    justify-content: center;
    background-image: url('/src/assets/images/Untitled_Artwork 199.png');
    height: 500px;
    position: relative;
    background-position: center;
    background-size:cover;
    background-repeat:no-repeat;
    background-attachment: fixed;
  
   
  }

  .job-header {
    margin-top: 100px;
  }


  .container-for-job-page {
    grid-template-columns: 1fr;
  }


  .apply-box {
  position: static;
  padding-bottom: 440px;
  
  }

  .container-for-job-page h3 {
    font-size:1.8rem;
  }

  .job-apply-desc {
    font-size: 1.2rem;
  }

  .single-job-title {
    font-size: 3rem;
  }

  .share-this-job {
    width: 350px;
  }

  .share-this-job h4 {
    font-size:1.5rem;
  }
  .socials {
    gap: 30px;
    margin-top: 10px;
  }
  .socials i {
    font-size: 1.7rem;
    
  }

  .apply-button {
    width: 100%;
    border-radius: 200px;
  }
  .benefits {
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   margin-left: 0;
   gap: 50px;
  }

  .benefit {
    width: 240px;
  }

  .text-and-icon {
    text-align: center;
    transform: scale(.9);
  }



  .image {
    background: url('/src/assets/images/IMG_7933.JPG') no-repeat;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center ;
  }
 
}
</style>