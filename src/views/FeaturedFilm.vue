

<template>
    <div class="loading-text" :style="{ opacity: loadTextOpacity }">
        <div class="dancing">
            <img src="/src/assets/images/stitch_lilo_dance.gif" alt="">
        </div>
        <div class="the-loading-text">{{load}}%</div>
    </div>

    <body class="blur" :style="{ filter: `blur(${loadBlur}px)`}">
       
        <div class="parallax">
          
          <header class="primary-header">
            <div class="wrapper">
              <div class="primary-header__inner">
                <div class="logo">
                  <img src="" alt="" />
                </div>
                <nav class="primary-nav">
                  
                </nav>
                <div class="flex-group" aria-label="social links">
                  <a href="#">X</a>
                  <a href="#">IG</a>
                  <a href="#">YT</a>
                </div>
              </div>
            </div>
          </header>
          <div class="hero">
            <div class="wrapper">
              <h1 class="hero__title">
                <span>Gear up!</span> We're going monster hunting!
              </h1>
              <button class="button">Sign up for beta</button>
            </div>
          </div>
    
          <img class="parallax__bg" src="/src/assets/images/Untitled_Artwork 42.png" alt="" />
          <img class="parallax__dust" src="/src/assets/images/Untitled_Artwork 40.png" alt="" />
          <img
            class="parallax__foreground-back"
            src=""
            alt=""
          />
          <img
            class="parallax__foreground-front"
            src="/src/assets/images/Untitled_Artwork 184.png"
            alt=""
          />
          <img
            class="parallax__foreground-front2"
            src="/src/assets/images/Untitled_Artwork 41.png"
            alt=""
          />
          <img class="parallax__jax" src="/src/assets/images/Untitled_Artwork 36.png" alt="" />
          <img class="parallax__luna" src="/src/assets/images/Untitled_Artwork 39.png" alt="" />
        </div>
    
        <main class="main-content">
            <div class="hero">
                <div class="container">
                    <div class="primary-hero">
                        <div class="image-wrapper">
                            <img src="/src/assets/images/disneys-lilo-stitch-movie-poster.jpg" alt="">
                        </div>
                        <div class="text-content">
                            <h1>About</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto distinctio atque. Illum incidunt, ab deserunt dicta aspernatur minus libero officia quibusdam debitis culpa veritatis blanditiis atque quod id qui harum sunt accusamus dolor hic, magni maxime. Repellendus molestias praesentium vitae laboriosam repellat tenetur at quasi maiores possimus mollitia necessitatibus ducimus corrupti voluptatum officiis exercitationem quos, modi, beatae, reiciendis adipisci. Animi cum et optio temporibus cumque nobis perferendis corporis repellat velit asperiores a dolorum inventore fugit possimus aut reiciendis, nesciunt quos nulla quidem error enim. Ut, optio libero? Eligendi quis reiciendis voluptates veniam provident quod nostrum. Ex eligendi error deserunt officia ab eveniet reprehenderit illum architecto omnis quod excepturi blanditiis ea maiores, placeat eius, iusto magni velit rerum? Rem possimus distinctio mollitia quis ad iure voluptatibus dolore voluptate officiis ea, veniam quod expedita ipsum ipsa, facilis reiciendis ipsam molestiae sint officia culpa corporis. Dolore iusto incidunt excepturi repudiandae magnam delectus commodi, dicta sit quos maiores neque laborum nisi maxime exercitationem quo sapiente aliquam eveniet fugit voluptate ullam dolorem quaerat. Velit sint dolores blanditiis. Tempora, esse in illo itaque dolorem facere qui hic nulla alias quam mollitia, tempore non, eveniet provident. Nemo necessitatibus totam cumque rerum a animi incidunt optio! Voluptate.</p>
                            
                            <a href="#" class="btn">Get Tickets</a>
                        </div>
                     
                    </div>
                    <div class="social-images">
                        <h2>Tell you friends about Lilio and Stitch!</h2>
                        <ul class="social-images-list">
                            <li>
                                <img src="/src/assets/images/Untitled_Artwork 38.png" alt="">
                                <i class="fab fa-facebook"></i>
                            </li>
                            <li>
                                <img src="/src/assets/images/Untitled_Artwork 43.png" alt="">
                                <i class="fab fa-instagram"></i>
                            </li>
                            <li>
                                <img src="/src/assets/images/Untitled_Artwork 44.png" alt="">
                                <i class="fab fa-twitter"></i>
                            </li>
                            <li>
                                <img src="/src/assets/images/Untitled_Artwork 45.png" alt="">
                                <i class="fab fa-tiktok"></i>
                            </li>
                        </ul>
                    </div>
                    
            </div>
            <img class="background-image" src="/src/assets/images/Untitled_Artwork 46.png" alt="">
        </div>

        <div class="background-banner">
            <div class="background-banner-container">
               <div class="pimg1">
                <div class="text">CHARACTERS</div>
               </div>
            </div>
        </div>
        
            <Characters></Characters>
            <div class="gallery-container">
                <h1 class="gallery-text">G A L L E R Y</h1>
                <CharactersCarousel class="carousel" v-slot="{ currentSlide }" @nextSlideClicked="nextSlideClicked" @prevSlideClicked="prevSlideClicked">
                    <CharacterSlide :direction="direction" v-for="(slide, index) in carouselSlides" :key="index">
                        <div v-show="currentSlide === index + 1" class="slide-info">    
                            <img :src="`/src/assets/images/${ slide }.png`">
                        </div>
                        
                    </CharacterSlide>
                </CharactersCarousel>    

            </div>
           
            <the-footer></the-footer>
        </main>
       
        </body>
</template>

<script>

import Characters from '@/components/Characters.vue';
import CharactersCarousel from '@/components/CharactersCarousel.vue';
import CharacterSlide from '@/components/CharacterSlide.vue';
import TheFooter from '@/components/TheFooter.vue';
import { ref } from 'vue';

export default {
name: 'FeaturedFilm',
components: {Characters, CharactersCarousel, CharacterSlide, TheFooter},
data(){
    return {
        load: 0,
        LeInterval: null,
        loadTextOpacity: null,
        loadBlur: null,
    };
},
methods: {
    setTheInterval(){
        this.LeInterval = setInterval(() => {
            if(this.load > 100){
                clearInterval(this.LeInterval);
                return;
            }
            this.load = this.load + 1;
            this.tranformTheTextOpacity(this.load,0,100,1,0);
            this.tranformTheBlur(this.load,0,100,30,0);
        }, 25);
    },
    tranformTheTextOpacity(param1, param2, param3, param4, param5){
        this.loadTextOpacity = (param1 - param2 ) * ( param5 - param4 ) / (param3 - param2) + param4;

    },
    tranformTheBlur(param1, param2, param3, param4, param5){
        this.loadBlur = (param1 - param2 ) * ( param5 - param4 ) / (param3 - param2) + param4;

    },
},
created(){
    this.setTheInterval();
    console.log(this.load);
},

setup(){

    
    
    const carouselSlides = ['Untitled_Artwork 49', 'Untitled_Artwork 50', 'Untitled_Artwork 51', 'Untitled_Artwork 53', 'Untitled_Artwork 54'];

    const direction = ref(null);

    const nextSlideClicked = () => {
        direction.value = 'left';
    };
    const prevSlideClicked = () => {
        direction.value = 'right';
    };

    return { carouselSlides, nextSlideClicked, prevSlideClicked, direction  };
},
};

</script>

<style scoped>

.loading-text {
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index:1000;

}

.the-loading-text {
    font-size: 4rem;
}




.gallery-container {
    background: #ff004f;
    padding: 200px 150px;
    margin-top: 100px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.gallery-text {
    z-index: 2;
    position: absolute;
    top:70px;
    left: 158px;
    font-size: 4rem;


}

.slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(209, 182, 26);
    
}

.slide-info img {
    width: 100%;
    height: 100%;
    object-fit: cover;


}

.carousel {
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    max-height: 600px;
    height: 1000px;
    width: 1400px;
    background: rebeccapurple;
    border-radius: 50px;
    box-shadow: 10px 20px 50px rgba(0, 0, 0, 0.811);
}

.pimg1 {
    background: url('/src/assets/images/stitch_and_i_hula_dance_by_liloandstitchfanclub_d25p9az-fullview.jpg') ;
    min-height: 600px;
    margin-bottom: -85px;
}

.pimg1 {
    
    position: relative;
    opacity: 0.70;
    background-position: center;
    background-size: cover;
    background-repeat:no-repeat;
    background-attachment: fixed;
}

.pimg1 .text {
    color: white;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    letter-spacing: 10px;
    height: 100%;
    width: 100%;
    z-index: 8;
}

.hero {
    position: relative;
    margin-bottom: 50px;
}

.text-content {
    
    text-align: center;
}
.background-image {
    position: absolute;
    top: -250px;
    left: -500px;
    width: 0px;
    height: 1700px;
    width: 2200px;

    z-index: -1;
    
    
}

.main-content {
    position: relative;
    top: 270px;
    z-index: 100;
    color: white;
    background: black;
}


.hero {
    padding: 200px 0;
}

.primary-hero {
    display: flex;
    gap: 100px;
    align-items: center;
    margin-bottom: 100px;
    position: relative;
}

.image-wrapper {
    height: 600px;
    width: 8000px;

}

.image-wrapper img {
    border-radius: 20px;
    height: 100%;
    width: 100%;
}

.social-images-list {
    display: grid;
    grid-template-columns: repeat(4,1fr);
}

.social-images-list li {
    position: relative;
    width: 150px;
    height: 250px;
}

.social-images-list li img {
    
    width: 100%;
    height: 100%;
}

.social-images-list li i {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
        156.82deg,
        rgba(0,0,0,0.6) 4.58%,
        rgba(0,0,0,0) 69.61%
    ),
    linear-gradient(24.5deg,rgba(0,0,0,0.2) 4.71%, rgba(0,0,0,0) 71.49%);
    font-size: 40px;
}



.parallax {
    position: relative;
    z-index: 0;
    min-height: 75vh;
    display: grid;
    grid-template-areas: "stack";
}

.parallax > * {
    grid-area: stack;
    animation: parallax linear;
    animation-timeline: scroll();
}

.parallax__jax {
    --parallax-speed: 40;
   position: absolute;
   z-index: 7;
   right: 100px;
   width: 900px;
   height: 900px;
}

.parallax__dust {
    --parallax-speed: 90;
    position: absolute;
    z-index: 5;
    width: 650px;
    height: 650px;
    left: 150px;
    top: 40px;
}

.parallax__foreground-front {
    --parallax-speed: -25;
    position: absolute;
    z-index: 8;
    top: 40px;
    object-fit: cover;
    width:1670px;
    height: 1000px;
}


.parallax__foreground-front2 {
    --parallax-speed: -50;
    position: absolute;
    z-index: 6;
    width: 850px;
    height: 850px;
    top: 220px;
}


.parallax__luna {
    --parallax-speed: -20;
    position: absolute;
    width: 450px;
    height: 450px;
    top: 200px;

}

.parallax__bg {
    --parallax-speed: -60;
    position: absolute;
    object-fit: cover;
    width: 1670px;
    height: 1000px;
    
}
@keyframes parallax {
    to {
        transform: translateY(calc(var(--parallax-speed) * 15px));
    }
}

</style>