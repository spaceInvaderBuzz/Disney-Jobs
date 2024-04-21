<template>
      <div class="wrapper">
        <header>
            <nav>
                <div class="logo" @click="toggleVsible">Pixar</div>
                <div class="menu">
                    <ul>
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
                       
                    </ul>
                </div>
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
    position: fixed;
    float: left;
    margin: 16px 36px;
    font-weight: bold;
    font-size: 24px;
    color: white;
    top: -5px;

}

nav {
    position: fixed;
    width: 100%;
    z-index: 7;

}

nav ul {

    list-style: none;
    overflow: hidden;
    padding: 0;
    text-align: center;
    margin: 0;
    transition: 1s;
    padding: 15px;

}

nav ul li {
    display: inline-block;
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