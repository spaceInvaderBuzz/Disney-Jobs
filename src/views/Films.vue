<template>
  <div class="films-page">
    <carousel :navigation="true" :pagination="true" class="carousel" v-slot="{ currentSlide }">
        <h3 class="cool-text anim" v-if="currentSlide === 1">
            <div class="banner-text">Lilo and Stitch </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quo?frvedfvdfv</p>
            <a href="#" class="btn">Go to page</a>
        </h3>
        <h3 class="cool-text anim" v-if="currentSlide === 2">
            <div class="banner-text">The Little Mermaid</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quo?frvedfvdfv</p>
            <a href="#" class="btn">Go to page</a>
        </h3>
        <h3 class="cool-text anim" v-if="currentSlide === 3">
            <div class="banner-text">The Iron Giant</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quo?frvedfvdfv</p>
            <a href="#" class="btn">Go to page</a>
        </h3>
        
        <slide v-for="(slide,index) in carouselSlides" :key="index">
            <div v-if="currentSlide === index + 1" class="slide-info">
                <img :src="(`/src/assets/images/${slide}.png`)" alt="">
                
               
                
               
            </div>
        </slide>
    </carousel>
   
        <div class="films-container">
            <div class="title">
                <h1>Browse our films</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laboriosam repudiandae at, voluptatem saepe rerum. Sed inventore saepe dolorum repellat!</p>
            </div>
            <div class="portfolio reveal">
                <div class="item">
                    <img src="/src/assets/images/Untitled_Artwork 27.png" alt="">
                    <div class="layer"></div>
                    <div class="action">
                        <router-link :to="{ path: '/films/results/1' }">Launch</router-link>
                    </div>
                </div>
                <div class="item">
                    <img src="/src/assets/images/Untitled_Artwork 26.png" alt="">
                    <div class="layer"></div>
                    <div class="action">
                        <router-link :to="{ path: '/films/results/2' }">Launch</router-link>
                    </div>
                </div>
                <div class="item">
                    <img src="/src/assets/images/Untitled_Artwork 25.png" alt="">
                    <div class="layer"></div>
                    <div class="action">
                        <router-link :to="{ path: '/films/results/3' }">Launch</router-link>
                    </div>
                </div>
                <div class="item">
                    <img src="/src/assets/images/Untitled_Artwork 28.png" alt="">
                    <div class="layer"></div>
                    <div class="action">
                        <router-link :to="{ path: '/films/results/4' }">Launch</router-link>
                    </div>
                </div>
                <div class="item">
                    <img src="/src/assets/images/Untitled_Artwork 115.png" alt="">
                    <div class="layer"></div>
                    <div class="action">
                        <router-link :to="{ path: '/films/results/5' }">Launch</router-link>
                    </div>
                </div>
                <div class="item">
                    <img src="/src/assets/images/Untitled_Artwork 118.png" alt="">
                    <div class="layer"></div>
                    <div class="action">
                        <router-link :to="{ path: '/films/results/6' }">Launch</router-link>
                    </div>
                </div>
                <div class="item">
                    <img src="/src/assets/images/Untitled_Artwork 119.png" alt="">
                    <div class="layer"></div>
                    <div class="action">
                        <router-link :to="{ path: '/films/results/7' }">Launch</router-link>
                    </div>
                </div>
                <div class="item">
                    <img src="/src/assets/images/Untitled_Artwork 120.png" alt="">
                    <div class="layer"></div>
                    <div class="action">
                        <router-link :to="{ path: '/films/results/8' }">Launch</router-link>
                    </div>
                </div>
                <div class="item">
                    <img src="/src/assets/images/Untitled_Artwork 121.png" alt="">
                    <div class="layer"></div>
                    <div class="action">
                        <router-link :to="{ path: '/films/results/9' }">Launch</router-link>
                    </div>
                </div>
                <div class="item">
                    <img src="/src/assets/images/Untitled_Artwork 122.png" alt="">
                    <div class="layer"></div>
                    <div class="action">
                        <router-link :to="{ path: '/films/results/10' }">Launch</router-link>
                    </div>
                </div>
                <div class="item">
                    <img src="/src/assets/images/Untitled_Artwork 123.png" alt="">
                    <div class="layer"></div>
                    <div class="action">
                        <router-link :to="{ path: '/films/results/11' }">Launch</router-link>
                    </div>
                </div>
                <div class="item">
                    <img src="/src/assets/images/Untitled_Artwork 124.png" alt="">
                    <div class="layer"></div>
                    <div class="action">
                        <router-link :to="{ path: '/films/results/12' }">Launch</router-link>
                    </div>
                </div>
            </div>
        </div>
        
        
            
           

       
   
    
  </div>
  <the-footer></the-footer>
</template>

<script>


import Carousel from "@/components/Carousel.vue";
import Slide from "@/components/TheSlide.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
name: 'Filmvue',
components: {Carousel, Slide, TheFooter },

mounted(){
    window.addEventListener('scroll', reveal);

    function reveal(){
        const reveals = document.querySelectorAll('.reveal');
        for(let i = 0; i < reveals. length; i++){
            const windowheight = window.innerHeight;
            const revealTop = reveals[i].getBoundingClientRect().top;
            const revealpoint = 150;

            if(revealTop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }
    }
},
setup(){
    const carouselSlides = ["bg-1","bg-2","bg-3"];



    return { carouselSlides};
},
};
</script>

<style scoped>

.films-page::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        360deg,
        rgba(0,0,0,0.76) 1.54%,
        rgba(0,0,0,0.192) 60.23%,
        rgba(0,0,0,8e-5) 100%
    );
    z-index: 1;
    
}

.reveal {
    position: relative;
    transform: translateY(150px);
    opacity: 0;
    transition: all 2s ease;
}

.reveal.active {
    transform: translateY(0px);
    opacity: 1;
}

.btn {
    text-transform: uppercase;
    color: white;
    text-decoration: none;
    font-weight: 40;
    font-size: .3em;
    padding: 10px 15px;
    margin: 20px;
    border: 1px solid white;
}

.films-page {
    background: black;
    padding-bottom:100px;
}

.films-container {
    max-width: 1250px;
    margin: 0 auto;
    padding: 0 15px;
    color: white;
    overflow: hidden;
  
  
  }

.title {
    border-radius: 20px;
    border: 2px solid #ff004f;
    padding: 50px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px;
}

.title h1 {
    font-size: 4rem;
    margin-bottom: 20px;
}

.title p {
    font-size: 1.3rem;
    margin: 20px;

}

.portfolio {
   
    display: grid;
    grid-template-columns: repeat(4,1fr);

}

.portfolio .item {
    position: relative;
    width: 250px;
    height: 350px;
    margin: 5px;
    margin-top:70px;


}

.portfolio img {
    width: 100%;
    height: 100%;
}

.portfolio .layer {
    background: linear-gradient(
        156.82deg,
        rgba(0,0,0,0.6) 4.58%,
        rgba(0,0,0,0) 69.61%
    ),
    linear-gradient(24.5deg,rgba(0,0,0,0.2) 4.71%, rgba(0,0,0,0) 71.49%);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
}

.portfolio .item .action {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.3s;

}

.portfolio .item .action a {
    display: inline-block;
    color: white;
    text-decoration: none;
    border: 1px solid white;
    padding: 5px 15px;
    

}

.portfolio .item:hover .action {
    opacity: 1;
}

.portfolio:hover > .item:not(:hover){
    filter: blur(5px);
}

.portfolio .item {
    transition: 0.5s;
}

.portfolio .item:hover
{
    transform: scale(1.1);
}



.carousel {
    position: relative;
    max-height: 100vh;
    height: 100vh;
}

.carousel .slide-info {
position: absolute;
top: 0;
left: 0;
width: 100%;
max-height: 100%;
height: 100%;
}

.carousel .slide-info img {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
}



.cool-text {
    position: absolute;
    font-size: 50px;
    bottom: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 4;
    margin-bottom: 20px;
    
    
}


.cool-text p {
    margin-top: 20px;
    font-size: .4em;
    font-weight: 50;
    text-align: center;
    color: white;
}

.banner-text {
    text-transform: uppercase;
    color: white;
    letter-spacing: 3px;
    font-weight: 4;
    border-bottom: 1.5px solid rgb(255, 255, 255);
   
}



.anim {
    position: absolute;
    opacity: 0;
    transform: translateY(30px);
    animation: moveup 0.5s linear forwards;
    
}


@keyframes moveup{
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}

@media (max-width: 670px){

    .title h1 {
        font-size: 3rem;
    }
    .title p {
        font-size: 1.2rem;
    }


.films-page {
    background: black;
    padding-bottom:100px;

}

.films-container {
   z-index: 2;
   position: relative;
    margin-top: -120px;
}
    .carousel .slide-info img {
        width: 95vw;
        height: 100vh;
        object-fit: contain;
    }

    .cool-text {
       
        position: absolute;
        font-size: 30px;
        bottom: 210px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        z-index: 4;
        margin-bottom: 20px;
        
        
    }
    
    
    .cool-text p {
        margin-top: 20px;
        font-size: .4em;
        font-weight: 50;
        text-align: center;
        color: white;
    }
    
    .banner-text {
        text-transform: uppercase;
        color: white;
        letter-spacing: 3px;
        font-weight: 4;
        border-bottom: 1.5px solid rgb(255, 255, 255);
       
    }
    .title {
        border-radius: 20px;
        border: 2px solid #ff004f;
        padding: 50px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 50px;
        text-align: center;
    }
    .portfolio {
   
        
        display: flex;
   flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap:30px;

    
    }
    .portfolio .item {
        position: relative;
        width: 250px;
        height: 350px;
        margin: 5px;
    
    
    }
    
}


</style>