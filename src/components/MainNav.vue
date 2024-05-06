<template>
      <div class="wrapper">
        <header>
            <nav>
               
                <div v-if="mobile" class="menu">
                    <ul>
                        <div class="logo" @click="toggleVsible">
                            <img src="/src/assets/images/Untitled_Artwork 100.png" alt="">
                        </div>
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
                        
                       
                    </ul>
                </div>
                <transition name="mobile-nav">
                    <ul v-if="!mobile" class="dropdown-nav">
                        <div class="logo" @click="toggleVsible">
                            <img src="/src/assets/images/Untitled_Artwork 100.png" alt="">
                        </div>
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
        visible: true,
    }
},
methods:{
    toggleVsible() {
        this.visible = !this.visible
    }
}
};
</script>

<style scoped>

.dropdown-nav {
    gap:20px;
    max-width: 250px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 0 20px;
    flex-direction: column;
    background: rebeccapurple;
    height: 100vh;
}

.dropdown-nav li {
    display: block;
    margin: 30px 0;
}

.dropdown-nav .logo {
    margin-top: 30px;
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

nav ul {
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