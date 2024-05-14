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
         

            <div class="about-company">
              <div class="about-company-header">
                <h1>About Us</h1>
                <div>
                  At  Disney, we're all about creating unforgettble films that will imapct people's lives for the better. 
                  Out mission with every film we produce is to uplfit the viewer.
                </div>
                <div class="about-company-filmography">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nemo, rem dicta voluptatem repellat voluptate debitis autem neque velit quidem odio veritatis, praesentium eum ad quos! Tempore accusantium minus consequatur.
                  To name some of them: <span>The Little Mermaid, </span> <span>Beauty And The Beast,  </span><span>Mulan</span>
                </div>

              </div>
             
              <h1>Your Tasks:</h1>
              <ul class="job-tasks">
                <li v-for="description in singleJob.description" :key="description">
                  {{ description  }}
                </li>
              </ul>

              <h1 class="apply-if-you">Apply if you:</h1>
              <ul class="qualifications">
                <li v-for="qualification in singleJob.minimumQualifications" :key="qualification">
                  {{ qualification }}
                </li>

              </ul>
              <h1>We Would love If You</h1>
              <ul class="traits">

                <div>
                  <span>Honesty:      </span>     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolore n
                </div>
                <div>
                  <span>Communication:</span>     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, neque.

                </div>
                <div>
                  <span>Passion:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias praesentium tempora quasi nesciunt soluta?
                </div>
                <div>
                  <span>Teamwork:   </span>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab deserunt harum. Expli
                </div>
                
              </ul>
              
        
            </div>

           
            
            
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
            <div class="about-company">
              <div class="about-company-header">
                <h1>About Us</h1>
                <div>
                  At  Disney, we're all about creating unforgettble films that will imapct people's lives for the better. 
                  Out mission with every film we produce is to uplfit the viewer.
                </div>
                <div class="about-company-filmography">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nemo, rem dicta voluptatem repellat voluptate debitis autem neque velit quidem odio veritatis, praesentium eum ad quos! Tempore accusantium minus consequatur.
                  To name some of them: <span>The Little Mermaid, </span> <span>Beauty And The Beast,  </span><span>Mulan</span>
                </div>

              </div>
             
              <h1>Your Tasks:</h1>
              <ul class="job-tasks">
                <li v-for="description in singleJob.description" :key="description">
                  {{ description  }}
                </li>
              </ul>

              <h1 class="apply-if-you">Apply if you:</h1>
              <ul class="qualifications">
                <li v-for="qualification in singleJob.minimumQualifications" :key="qualification">
                  {{ qualification }}
                </li>

              </ul>
              <h1>We Would love If You</h1>
              <ul class="traits">

                <div>
                  <span>Honesty:      </span>     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolore n
                </div>
                <div>
                  <span>Communication:</span>     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, neque.

                </div>
                <div>
                  <span>Passion:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias praesentium tempora quasi nesciunt soluta?
                </div>
                <div>
                  <span>Teamwork:   </span>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab deserunt harum. Expli
                </div>
                
              </ul>
              
        
            </div>
          </li>
              
         </ul>
      </div>
      <div class="apply-box">
        <div class="disney-careers-logo-container">
          <img src="/src/assets/images/IMG_8108.png" alt="">
          <h1>CAREERS</h1>
        </div>
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
      <div class="image"></div>
      <div class="bottom-box">
        <div class="top-content">

          <h1>Dont find a good fit?</h1>
        <div>We are always looking for talent to join our team.
          if you dont find a position you are looking for join our newsletter 
          and be ntiifed of new openings! 
        </div>

        </div>


        <div class="email-send-container">
          <div v-if="pageloaded" class="thank-you">
            <h3>Thank you!</h3>
            <p>Be on the lookout for new openings</p>
          </div>
          <div v-else class="input-container">

            <label for="email">EMAIL</label>
            <input type="email">
  
          </div>
          <div class="sign-up">
            <p>Sign Up</p>
          </div>
        </div>
        

        <div class="small-text-container">
          <p>By subscribing to our newseltter you agree to our 
            <div class="agreement-policy" @click="openTermsModal">
              agreement policy
            </div>
        
          </p>
        </div>
        
      </div>
      
   
    </div>
    
     
  </div>
  </div>



</div>
   
   <the-footer :openTermsModal="openTermsModal"></the-footer>
 



 


 
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
    openTermsModal: false,
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
  openTermsModal(){
    this.openTermsModal = !this.openTermsModal;
  },
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
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: white;
  position: absolute;
  top: 80px;
  left: 100px;
  width: 500px;
  
  background: rgb(0, 0, 0);
  padding: 50px;

}

.not-what-you-lookin-for {
  margin: 0 auto;
  max-width: 1500px;
  height: 800px;
  position: relative;


}
.image {
  background: url("/src/assets/images/IMG_7933.jpg") no-repeat;
  width: 100%;
  height: 100%;
  background-size: contain;
}

.top-content {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  align-items: center;
}

.sign-up {
  display: flex;
  align-items: center;
  justify-content: center;
  

 

}
.sign-up p {

  background: #ff004f;
  padding: 10px 20px;
  margin-top: 25px;
}

.small-text-container {
  font-size: .9rem;
  text-align: center;
}

.input-container label {
  display:block;

}
.input-container input {
  margin-top:10px;
  width: 100%;
  border: none;
  background: rgb(67, 67, 67);
  height: 40px;
  color: white;
  padding:20px;
  border-bottom: white 1px solid;
}
.input-container input:focus {
  outline: none;
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
.job-tasks li {
  list-style-type: disc;
}
.qualifications li {
  list-style-type: disc;
}

.about-company div, li {
  margin: 20px 0 20px 0;
}

.about-company span {
  font-weight: 700;
  border-bottom: 1px solid white;
}

.about-company-header {
  padding: 50px 0 50px 0;
}
.apply-if-you {
  margin-top: 50px;
}
.traits span {
  border-bottom: none;
}
.traits {
  display: inline;
}

.apply-box {
  position: sticky;
  top: 0;
  padding: 40px;
  background: white;
  color: black;
  height: 500px;
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
  
 
  
  color: white;
  background: black;
  margin: 100px auto;
  max-width: 1500px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;

}
.main-content-stuff {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
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

/* undisplay Disney careers logo unles at media of 1068px */

.disney-careers-logo-container {
  display: none;
  margin-top: 40px;
  width: 230px;
  height: 130px;

}

.disney-careers-logo-container img {
  width: 100%;
  height: 100%;
}


@media(max-width: 1068px){

.image {
  background-size:  cover;
}
.not-what-you-lookin-for {

 
  height: 800px;
  padding-bottom: 100px;
  


}


  .disney-careers-logo-container {
    display: block;
  }

  .apply-box {
    position: sticky;
    top: 0;
    padding: 20px;
    background: white;
    color: black;
    height: 1000px;
    border-radius: 10px;
    display: flex;
    
    align-items: center;
    text-align: center;
    flex-direction: column;
    
  
  }
  .share-this-job {
    margin-top: 50px;
  
  }
  .share-this-job h4 {
font-size: 1.5rem;
  }
  .share-this-job i {
font-size: 1.7rem;
margin-left: 8px;

  }
  .apply-button {
    width: 100%;
    margin-top: 110px;
  }

  .single-job-title {
    margin-top: 100px;
    margin-bottom: 50px;
  }

  .benefits {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-left:90px;
 
  
  }

  .benefit {
    width: 230px;
  }
  
  .container-for-job-page {


    padding: 10px 30px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 25px;
    color: white;
    background: black;
    margin: 100px auto;
    max-width: 1500px;
  
  }
}

@media(max-width: 670px){

  .disney-careers-logo-container {
    display: none;
  }

  .pimg1 {
    font-family: "Bebas Neue";
    display: flex;
    align-items: center;
    font-size: 100px;
    letter-spacing: 10px;
    color: white;
    justify-content: center;
    background-image: url("/src/assets/images/Untitled_Artwork 199.png");
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
    margin: 100px auto;
    max-width: 1500px;
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
    width: 220px;
  }

  .text-and-icon {
    text-align: center;
    transform: scale(.9);
  }



  .image {
    background: url("/src/assets/images/IMG_7933.jpg") no-repeat; 
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center ;
  }

  .bottom-box {
    top: 160px;
  }
  


}

@media(max-width: 915px){ 
  * {
    color: pink;
  }
  /*.container-for-job-page {


    padding: 10px 30px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 25px;
    color: white;
    background: black;
    margin: 100px auto;
    max-width: 1500px;
  
  } */
.container-for-job-page {
  justify-content: center;
  
}


  .info-box {
    width: 500px;
  }
  .apply-box {

    width: 250px;
  }


}

@media(max-width: 800px){
  * {
    color: orange;
  }

  .info-box {
    width: 440px;
  }
  .apply-box {
    width: 230px;
  }
  .info-box .job-description {
    font-size: 1rem;
  }
}
</style>