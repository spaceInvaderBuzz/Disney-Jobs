<template>
  
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
                <div>Privacy Policy</div>
                <div>Terms of Use</div>
                <div>Do Not Sell or Share My Personal Information</div>
            </div>
            <div class="copyright">  &copy; Disney animatyio studios, a few rights reserved</div>
        </div>

       
    
    </div>
</template>

<script>
export default {
    name: 'TheFooterVue',

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