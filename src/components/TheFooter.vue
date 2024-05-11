<template>

   
  <privacy-policy-modal :privacyModalActive="privacyModalActive" @close="closePrivacyModal">
    PRIVACY STUUUUUFFFFF
  </privacy-policy-modal>
  <do-not-sell-modal :doNotSellModalActive="doNotSellModalActive" @close="closeDoNotSellModalActice">
    DO NOT SELL MY SHIIIIIT
  </do-not-sell-modal>
  <terms-of-use-modal :termsModalActive="termsModalActive" @close="closeTermsModalActive">
   <div class="terms-of-service">
    <h1>TERMS OF SERVICE</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod excepturi dolorem et tempora blanditiis quis odio sapiente aut ducimus dignissimos ab nihil, provident mollitia, ipsa nesciunt non nostrum doloribus iusto recusandae aperiam praesentium molestiae dolore? Nostrum fugiat facere dolores non voluptatem aperiam debitis quis, cumque asperiores officia placeat vero, quidem magni excepturi in libero eligendi dolorem iure! Nobis eligendi eaque at dolore, hic vel ut sunt a eius consequuntur illum incidunt qui, adipisci soluta animi, minima optio aliquid possimus dolorem ad. Harum unde cum dolorem! Dicta nisi, quod corrupti velit obcaecati fuga ducimus nulla enim magni, quo cumque, odit laboriosam?</p>
    <h2>1.Introduction</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum temporibus, laudantium blanditiis quasi, sint soluta illo libero obcaecati vero id minima eius voluptates aspernatur beatae sapiente error minus corporis fuga. Vero, unde provident cum ea blanditiis fuga voluptatibus aut magni ratione tempore rem, accusantium velit autem molestiae voluptas deserunt!</p>
    <h2>2. acceptance of this agreement</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, vero illum hic optio doloremque porro deleniti atque corporis nobis voluptates! Maxime libero nam laudantium praesentium voluptate inventore! A aut asperiores quisquam ipsa officiis aliquid ea voluptate, nihil ab perferendis modi rerum reiciendis ducimus nostrum cumque esse soluta, eum reprehenderit iste accusamus. Cum totam provident optio expedita quidem, ratione nobis facilis itaque ullam tempore quia ut modi veritatis necessitatibus odio error culpa minus delectus, voluptates vel tempora adipisci eum ab. Repudiandae ut vitae expedita hic sed voluptatibus cupiditate totam tempore sapiente eligendi, odit excepturi, mollitia, suscipit quod corrupti tenetur voluptate nam?</p>
    <h2>CONDITION OF USE</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, tenetur repudiandae nulla dolorem accusamus ipsa illum quam corrupti dolore eveniet accusantium voluptas facere fugit nostrum magni laborum placeat culpa, beatae, harum rem est. Eveniet dignissimos, impedit consequatur cumque veritatis laborum tempore quisquam. Asperiores, incidunt. Harum magni molestiae voluptatem eligendi suscipit perspiciatis ducimus vel, dolores corrupti rem hic vero, consequuntur obcaecati aut nam error eos eveniet numquam commodi delectus. Eius officia dolorum vitae sapiente, commodi minima? Quod suscipit nam libero commodi beatae ab dolore ut aliquid adipisci. Atque aut inventore quas placeat hic harum itaque adipisci consequatur voluptas mollitia minus, debitis eius facere similique alias fugit fuga aliquam provident. Natus perferendis, officia cumque eligendi sunt reiciendis quis cum reprehenderit, laudantium vel suscipit, dignissimos ipsam deserunt voluptatem! Ratione est numquam cum nemo labore? Distinctio iusto rerum delectus, eveniet explicabo veniam repudiandae numquam tempore pariatur nostrum recusandae dicta expedita voluptatibus, aperiam voluptates impedit.</p>
    
   </div>
  </terms-of-use-modal>



    <div class="footer-main">
        <div class="footer-content">
            <div class="logo">
                <img src="/src/assets/images/Untitled_Artwork 100.png" alt="">
            </div>
            <div class="content">
                <router-link :to="{ name: 'Home'}">Home</router-link>
                <router-link :to="{ name: 'Films'}">Films</router-link>
                <router-link :to="{ name: 'CareersHeroPage' }">Careers</router-link>
                <router-link :to="{ name: 'Home'}">Home</router-link>
            </div>
            <div class="socials">
                <div class="circle">
                    <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div class="circle">
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <div class="circle">
                    <i class="fa-brands fa-twitter"></i>
                </div>
                <div class="circle">
                    <i class="fa-brands fa-tiktok"></i>
                </div>
            </div>
            <div class="legal-text">
                <div @click="toggleModalforPrivacy">Privacy Policy</div>
                <div @click="toggleModalforTerms">Terms of Use</div>
                <div @click="toggleModalforDoNotSell">Do Not Sell or Share My Personal Information</div>
            </div>
            <div class="copyright">  &copy; Disney animatyio studios, a few rights reserved</div>
        </div>

       
    
    </div>
</template> 

<script>
import DoNotSellModal from './DoNotSellModal.vue';
import PrivacyPolicyModal from './PrivacyPolicyModal.vue';
import TermsOfUseModal from './TermsOfUseModal.vue';

export default {
    name: 'TheFooterVue',
    components: { DoNotSellModal, PrivacyPolicyModal, TermsOfUseModal},
props: ["openTermsModal"],   //take it in as true  //false  true 
    data(){
        return {
            privacyModalActive: false,
            doNotSellModalActive: false,
            termsModalActive: false,
        };
    },
    methods: {
        openTermsModalFromJobsPage(){
            if(this.openTermsModal){
                this.termsModalActive= !this.termsModalActive;
            }
        },
       toggleModalforPrivacy(){
        this.privacyModalActive = !this.privacyModalActive;
       },
       closePrivacyModal(){
        this.privacyModalActive = !this.privacyModalActive;
       },
       toggleModalforDoNotSell(){
        this.doNotSellModalActive= !this.doNotSellModalActive;
       },
       closeDoNotSellModalActice(){
        this.doNotSellModalActive= !this.doNotSellModalActive;
       },
       toggleModalforTerms(){
        this.termsModalActive= !this.termsModalActive;
        this.openTermsModal = false;
       },
       closeTermsModalActive(){
        this.termsModalActive= !this.termsModalActive;
       },
    },
  watch: {
    openTermsModal(){
if (this.openTermsModal){
    this.termsModalActive = !this.termsModalActive;

}
    }
  }

        };
</script>

<style scoped>

.terms-of-service {
    margin: 0 auto;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    text-align: center;
    
    
    
}

.footer-main {
    background: rgb(32, 32, 32);
    color: white;
  
}

.footer-content {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.logo {
    width: 150px;
    height:100px;

}
.logo img {
    height: 100%;
    width: 100%;
}

.socials {
    display: flex;
    gap: 20px;
    padding: 20px 0;
    
}

.circle {
    background: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 90px;
}

.circle i {
    color: black;
    font-size: 1.4rem;
}

.legal-text {
    border-top: 1px solid white;
    display: flex;
    padding: 20px 0;

}

.footer-main a {
    text-decoration: none;
    color: white;
}

.content {
    display: flex;
    gap: 20px;
}




    


</style>