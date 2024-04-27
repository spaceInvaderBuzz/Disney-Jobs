<template>
    <body>
        <div class="image-container">
            <creative-text-vue></creative-text-vue>
            <img class="image" src="/src/assets/disney_stitch.svg" alt="">
            
            <router-link class="button" :to="{ name: 'FeaturedFilm'}">See More</router-link>
        </div>
        <section class="video-section">
            <video class="video" src="/src/assets/LILOSTITCH.mp4" muted="" loop="" autoplay=""></video>
            </section>
            <section class="main-bar">
                <div class="social-bar">
                    <h3>Follow The Magic</h3>
                    <ul class="social-menu">
                        <li><a href=""><i class="fab fa-facebook"></i></a></li>
                        <li><a href=""><i class="fab fa-instagram"></i></a></li>
                        <li><a href=""><i class="fab fa-twitter"></i></a></li>
                        <li><a href=""><i class="fab fa-facebook"></i></a></li>
                        
                    </ul>
                </div>
            </section>
            <section class="categories">
                <div class="container">
                    <h4>Included in all plans</h4>
                    <div>All The TV you love</div>
                    <div class="sub-text">
                        stream full seasons of exclusive series, etc brfgvedvdfv
                    </div>
                    <div class="work-list">
                      <div class="work">
                        <img src="/src/assets/images/frog.png" alt="">
                        <div class="layer">
                            <h3>Princess And The Frog</h3>
                            <p>A fateful kiss with a frog sends Tiana on a mystical bayou advenutre</p>
                            <a href="#">Go to page</a>
                        </div>
                      </div>
                      <div class="work">
                        <img src="/src/assets/images/mulan.jpeg" alt="">
                        <div class="layer">
                            <h3>Princess And The Frog</h3>
                            <p>A fateful kiss with a frog sends Tiana on a mystical bayou advenutre</p>
                            <a href="#">Go to page</a>
                        </div>
                       
                      </div>
                      <div class="work">
                        <img src="/src/assets/images/groove.jpeg" alt="">
                        <div class="layer">
                            <h3>Princess And The Frog</h3>
                            <p>A fateful kiss with a frog sends Tiana on a mystical bayou advenutre</p>
                            <a href="#">Go to page</a>
                        </div>
                       
                      </div>
                      
                    </div>
                    <a href="#" class="btn">View All Movies</a>
                </div>
               
            </section>
            <section class="careers">
                <div class="container">
                    <div class="images-container">
                        <div class="images"></div>
                    </div>
                    
                    <div class="text">
                        <h1>CAREERS</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repudiandae mollitia voluptates facere obcaecati fugiat.</p>
                        <router-link :to="{name: 'TheLoginPage'}" class="btn">Browse openings </router-link>
                    </div>
                </div>
            </section>
            <section class="faq">
                <div class="container">
                    <h3 class="header-for-faq">
                        Frequently Asked QWuest
                    </h3>
                    <div class="faq-content">
                        <div class="faq-group">

                     
                                <div @click="openQuestion1" class="faq-group-header">

                                    <h4>
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo, nostrum id sapiente porro pariatur.  
                                    </h4>
                                    <i v-if="isOpen1" class="fas fa-minus"></i>
                                    <i v-else class="fas fa-plus"></i>
                                    
                                </div>
                        <transition name="faq">
                            <div v-if="isOpen1" class="faq-group-body">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aliquid, dolore perspiciatis vero voluptatum adipisci! Ab voluptatibus dolorem nemo. Eveniet!
                            </div>
                        </transition>
                            
                        </div>
                    </div>
                    <div class="faq-content">
                        <div class="faq-group">
                            <div @click="openQuestion2" class="faq-group-header1">
                                <h4>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo, nostrum id sapiente porro pariatur.  
                                </h4>
                                <i v-if="isOpen2" class="fas fa-minus"></i>
                                <i v-else class="fas fa-plus"></i>
                                
                            </div>
                            <transition name="faq">
                            <div v-if="isOpen2" class="faq-group-body">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aliquid, dolore perspiciatis vero voluptatum adipisci! Ab voluptatibus dolorem nemo. Eveniet!
                            </div>
                            </transition>
                        </div>
                    </div>
                    <div class="faq-content">
                        <div class="faq-group">
                            <div @click="openQuestion3" class="faq-group-header">
                                <h4>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo, nostrum id sapiente porro pariatur.  
                                </h4>
                                
                                <i v-if="isOpen3" class="fas fa-minus"></i>
                                <i v-else class="fas fa-plus"></i>
                                
                            </div>
                            <transition name="faq">
                            <div v-if="isOpen3" class="faq-group-body">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aliquid, dolore perspiciatis vero voluptatum adipisci! Ab voluptatibus dolorem nemo. Eveniet!
                            </div>
                            </transition>
                        </div>
                    </div>
                    <div class="faq-content">
                        <div class="faq-group">
                            <div @click="openQuestion4" class="faq-group-header1">
                                <h4>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo, nostrum id sapiente porro pariatur.  
                                </h4>
                               
                                <i v-if="isOpen4" class="fas fa-minus"></i>
                                <i v-else class="fas fa-plus"></i>
                               
                                
                            </div>
                            <transition name="faq">
                            <div v-if="isOpen4" class="faq-group-body">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aliquid, dolore perspiciatis vero voluptatum adipisci! Ab voluptatibus dolorem nemo. Eveniet!
                            </div>
                            </transition>
                        </div>
                    </div>
                    <div class="faq-content">
                        <div class="faq-group">
                            <div @click="openQuestion4" class="faq-group-header">
                                <h4>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo, nostrum id sapiente porro pariatur.  
                                </h4>
                               
                                <i v-if="isOpen4" class="fas fa-minus"></i>
                                <i v-else class="fas fa-plus"></i>
                               
                                
                            </div>
                            <transition name="faq">
                            <div v-if="isOpen4" class="faq-group-body">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aliquid, dolore perspiciatis vero voluptatum adipisci! Ab voluptatibus dolorem nemo. Eveniet!
                            </div>
                            </transition>
                        </div>
                    </div>
                    
                </div>
            </section>
            <contact-form-vue></contact-form-vue>
            
            
    </body>
 
  
</template>

<script>
import CreativeTextVue from '@/components/CreativeText.vue';
import ContactFormVue from '@/components/ContactForm.vue';
import TheFooter from '@/components/TheFooter.vue';


export default {
    name: 'Home',
    components: {CreativeTextVue, ContactFormVue, TheFooter},
    mounted(){
        let video = document.querySelector('.video');
window.addEventListener('scroll', function() {
    let value = 1 + window.scrollY/-600;
    video.style.opacity = value;
    console.log(video);
});
    },
    data(){
        return {
            isOpen1: false,
            isOpen2: false,
            isOpen3: false,
            isOpen4: false,
        }
    },
    methods: {
       openQuestion1(){
        this.isOpen1 = !this.isOpen1;
       },
       openQuestion2(){
        this.isOpen2 = !this.isOpen2;
       },
       openQuestion3(){
        this.isOpen3 = !this.isOpen3;
       },
       openQuestion4(){
        this.isOpen4 = !this.isOpen4;
       }
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Mouse+Memoirs&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Princess+Sofia&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');







.faq-content .faq-group-body {
    margin-top: 40px;
}


.header-for-faq {
    margin: 50px 0;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.faq-content i {
    margin-right: 15px ;
}
.faq {
    color: white;
    margin: 100px 0;
}

.faq-group-body {
    border-bottom: 1px solid #ccc;
    padding: 0 20px 20px 20px;
}

.faq .faq-group-header {
    padding: 20px 0;
    margin-bottom: 13px;
    position: relative;
    padding: 20px;
}
.faq .faq-group-header1 {
    padding: 20px 0;
    margin-bottom: 13px;
    position: relative;
}




.faq .faq-group .faq-group-header i {
    position: absolute;
    right: 0;
    top: 10px;
    font-size: 1.3rem;
    cursor: pointer;

}
.faq .faq-group .faq-group-header1 i {
    position: absolute;
    right: 0;
    top: 10px;
    font-size: 1.3rem;
    cursor: pointer;

}


.faq-group-header {
    background: rgb(53, 53, 53);
    cursor: pointer;
    transition: 0.3s ;
}
.faq-group-header1 {
    cursor: pointer;
    transition: 0.3s ;
}


.faq-group-header:hover {
    background: #ff004f;
}
.faq-group-header1:hover {
    background: #ff004f;
}




.careers::before {
    content: '';
    position: absolute;
    height: 100px;
    background: #ff004f;
    top: 1840px;
    right: 0;
    left: 0;
    transform: skewY(-2.5deg);

    
}

.careers {
    background:  #ff004f ;
    margin: 50pxrgb(255, 255, 255)}

.careers .container {
    
    color: white;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    text-align: center;
}

.images-container {
    width: 500px;
    height: 500px;
    position: relative;
    

}
.images {
    background: rebeccapurple;
    display: flex;
    width: 100%;
    height: 100%;
    background: no-repeat;
    background-size: contain;
    animation: change 10s infinite ease-in-out;
}


.btn {
    display: flex;
    justify-content: center;
    margin: 50px auto;
    width: fit-content;
    padding: 14px 50px;
    border: 1px solid;
    border-radius: 6px;
    text-decoration: none;
    color: #fff;
    transition: background 0.5s;

}

.btn:hover{
    background: #ff004f;
}

.layer {
    width: 100%;
    height: 0;
    background: linear-gradient(rgba(0,0,0,0.6), #ff004f);
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    transition: height 0.5s;
}

.layer h3 {
    font-weight: 500;
    margin-bottom: 20px;

}



.categories {
    background: black;
}


.categories .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 90px 40px;
    color: white;
}
.work {
    border-radius: 10px;
    position: relative;
    overflow: hidden;
   
}

.work img {
    width: 100%;
    border-radius: 10px;
    display: block;
    transition: transform 0.5s;
}

.work:hover img {
    transform: scale(1.1);
}

.work:hover .layer {
    height: 100%;
}

.work-list {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 40px;
    margin-top: 50px;
}


.social-bar h3 {
    font-family: 'Mouse Memoirs';
    
}

.social-bar h3 {
    font-size: 30px;

}



.social-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background: linear-gradient(
        318.68deg,
        #ff004f 0%,
        #7f0229 49.72%,
        #2d000f
    );

}


.social-menu {
    list-style: none;
    display: flex;
    justify-content: center;
}

.social-menu a {
    display: flex;
    background: #e3edf700;
    height: 75px;
    width: 75px;
    margin: 0 15px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: 20px;
    transition: 0.5s;
    margin: 10px;
   
}

.social-menu a i {
    font-size: 35px;
    color: #111;
    transition: 0.5s;
}

.social-menu a:hover {
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2), 
    inset -4px -4px 6px -1px rgba(255, 255, 255, 0),
    -0.5px -0.5px 0px rgba(0,0,0,0.15),
    0px 12px 10px -10px rgba(0,0,0,0.05);
    border: 1px solid rgba(0,0,0,0.01);
    transform: translateY(2px);
}
.social-menu a:hover i {
    transform: scale(0.95);
}

a:hover i {
    color: #ffffff;
}

.button {
    font-size: 20px;
    display: block;
    margin: 90px 15px;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;
    padding: 20px 40px;
    margin: 0 15px;
    color: white;
    transition: 0.5s;

}

.button:hover {
    background: #ff004f;
    color: #111;
    box-shadow: 0 0 50px #ff004f;
    transition-delay: 0.5s;
}


.button:hover:before {
    width: 95%;
    height:95%;
}
.button:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-top: 2px solid #ff004f;
    border-left: 2px solid #ff004f;
    transition: 0.5s;
    


}
.button:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid #ff004f;
    border-right: 2px solid #ff004f;
    transition: 0.5s;
    


}

.button:hover:after {
    width: 95%;
    height: 95%;
}

.content {
    color: white;
}

.image-container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(rgba(108, 8, 8, 0.346), rgba(255, 0, 0, 0));
    display: flex;
    align-items: center;
    justify-content: center;
}

.image {
    width: 800px;
    margin-bottom: 40px;


}
body {
    position: absolute;
    z-index: -2;
    background-color: rgb(0, 0, 0);
}

.video-section {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    
}

section video {
    position: fixed;
    margin-top: -20px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

section p {
    position: relative;

}



@keyframes change {
    0% {
        background-image: url('/src/assets/images/Untitled_Artwork 13.png');
    }
    20% {
        background-image: url('/src/assets/images/Untitled_Artwork 14.png');
    }
    40% {
        background-image: url('/src/assets/images/Untitled_Artwork 15.png');
    }
    60% {
        background-image: url('/src/assets/images/Untitled_Artwork 16.png');
    }
    80% {
        background-image: url('/src/assets/images/Untitled_Artwork 17.png');
    }
    100% {
        background-image: url('/src/assets/images/Untitled_Artwork 18.png');
    }
    
};



</style>