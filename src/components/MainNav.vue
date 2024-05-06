<template>
      <div class="wrapper">
        <header>
            <nav>
               
                <div v-if="!mobile" class="menu">
                    <ul>
                        <div class="logo" @click="toggleVsible">
                            <img src="/src/assets/images/Untitled_Artwork 100.png" alt="">
                        </div>
                        <div v-if="!mobile" class="da-menu">
                            <li>
                                <router-link :to="{ name: 'Home'}">Home</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'Films'}">Films</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'FeaturedFilm'}">Now Playing</router-link>
                            </li>
                            <li><router-link :to="{ name: 'CareersHeroPage' }">Careers</router-link></li>
                        </div>
                       
                        
                       
                    </ul>
                </div>
                <div v-if="mobile" class="menu">
                    <ul>
                        <div class="logo" @click="toggleVsible">
                            <img src="/src/assets/images/Untitled_Artwork 100.png" alt="">
                        </div>
                        <div class="da-menu">
                            <div @click="toggleMobileNav">
                                <div class="burger-menu">
                                    <div>
                                        <span class="line-1"></span>
                                        <span class="line-2"></span>
                                        <span class="line-3"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        
                       
                    </ul>
                </div>
                <transition name="mobile-nav">
                    <ul v-if="mobileNav" class="dropdown-nav">
                        
                        <div class="da-menu">
                            <li>
                                <router-link :to="{ name: 'Home'}">Home</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'Films'}">Films</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'FeaturedFilm'}">Now Playing</router-link>
                            </li>
                            <li><router-link :to="{ name: 'CareersHeroPage' }">Careers</router-link></li>
                        </div>
                        <div class="logo" @click="toggleVsible">
                            <img src="/src/assets/images/Untitled_Artwork 100.png" alt="">
                        </div>
                        
                       
                    </ul>
                </transition>
            </nav>
        </header>

      </div>
</template>

<script>
import { data } from 'autoprefixer';

$(window).scroll(function(){
    if($(window).scrollTop()){
        $("nav").addClass("black");
    }
    else {
        $("nav").removeClass("black");
    }
});

export default {
name: "MainNav",


data(){
    return{
       
        mobile: false,
        mobileNav: false,
        windowWidth: false
    }
},
methods:{
    toggleMobileNav(){
        this.mobileNav = !this.mobileNav;
    },

    checkScreen(){
        this.windowWidth = window.innerWidth;
        if (this.windowWidth <= 670 ){
            this.mobile = true;
            return;
        }
        this.mobile = false;
        this.mobileNav = false;
    },
},
created(){
    this.checkScreen();
    window.addEventListener('resize', this.checkScreen);
}

};
</script>

<style scoped>

.burger-menu {
    background: rebeccapurple;
    position: relative;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.burger-menu span {
    background: orange;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    display: block;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);


}

.line-1 {
    transform: translate(-50%, -50px);
}




.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: 1s ease transform;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(-400px);
}

.mobile-nav-enter-to {
    transform: translateX(0);
}


.dropdown-nav {
    top:0;
    position: absolute;
    z-index: 20;
    gap:20px;
    max-width: 250px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 0 50px;
    flex-direction: column;
    background: rgb(0, 0, 0);
    height: 100vh;
}

.dropdown-nav li {
    display: block;
    margin: 30px 0;
}

.dropdown-nav .logo {
    margin-top: 30px;
    margin-left: -10px;
}
.dropdown-nav .da-menu {
    padding-top: 50px;
}




nav ul li a {
    position: relative;
}

nav ul li a::after{
    content: '';
    width: 0;
    height: 3px;
    background: #ff004f;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: 0.5s;
}

nav ul li a:hover::after {
    width: 100%;
}

.logo {
    width: 150px;
    height: 90px;
}

.logo img {
    width: 100%;
    height: 100%;
}

nav {
    position: fixed;
    width: 100%;
    z-index: 7;

}

nav .menu ul {
display: flex;
    list-style: none;
    overflow: hidden;
    padding: 0;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    transition: 1s;
    padding:3px 50px;

}

nav ul li {
    display: flex;
   display: inline-block;
    justify-content: center;
    align-items: center;
    margin-left:30px;
}

nav ul li a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;

}

nav.black ul {
    background: black;
}

.hidden {
    display: none;
}
</style>