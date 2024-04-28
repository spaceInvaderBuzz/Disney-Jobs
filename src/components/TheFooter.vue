<template>

   
  <privacy-policy-modal :privacyModalActive="privacyModalActive" @close="closePrivacyModal">
    PRIVACY STUUUUUFFFFF
  </privacy-policy-modal>
  <do-not-sell-modal :doNotSellModalActive="doNotSellModalActive" @close="closeDoNotSellModalActice">
    DO NOT SELL MY SHIIIIIT
  </do-not-sell-modal>
  <terms-of-use-modal :termsModalActive="termsModalActive" @close="closeTermsModalActive">
    TERMS OF BULLSHITTTT
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

    data(){
        return {
            privacyModalActive: false,
            doNotSellModalActive: false,
            termsModalActive: false,
        };
    },
    methods: {
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
       },
       closeTermsModalActive(){
        this.termsModalActive= !this.termsModalActive;
       },
    }


        };
</script>

<style scoped>
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