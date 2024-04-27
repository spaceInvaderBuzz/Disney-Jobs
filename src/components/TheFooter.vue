<template>
  
    <footer class="footer-main">
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
                <router-link>Privacy Policy</router-link>
                <router-link>Terms of Use</router-link>
                <router-link>Do Not Sell or Share My Personal Information</router-link>
            </div>
            <div class="copyright"> &copy; Disney animatyio studios, a few rights reserved</div>
        </div>

       
    
  </footer>
</template>

<script>
export default {
    name: 'TheFooterVue',

};
</script>

<style scoped>
.footer-main {
    background: rgb(32, 32, 32);
}





    


</style>