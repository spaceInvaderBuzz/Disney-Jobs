<template>
    <div class="container">

        <body>


           <div class="image-container"></div>
            <div class="image-container1">
                <creative-text-vue></creative-text-vue>
                <img class="image anim" src="/src/assets/disney_stitch.svg" alt="">
                
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
                            <div class="tv-u-love"> All The TV you love</div>
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
                            <router-link :to="{ name: 'Films'}" class="btn-all-movies">View All Movies</router-link>
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
                            <router-link :to="{name: 'TheLoginPage'}" class="btn-careers">Browse openings </router-link>
                        </div>
                    </div>
                </section>

                <div class="mobile-container">
                      
                    
             <section class="faq">
                   
                    <div class="container-for-faq">
                        <h3 class="header-for-faq">
                            Frequently Asked Questions
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
                                    <div class="z-index-text">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aliquid, dolore perspiciatis vero voluptatum adipisci! Ab voluptatibus dolorem nemo.
                                        Lorem ipsuamet consectecing elit. Quis explicabo, nostrum id sapiente porrom doloetur adipisicing elit. Dolores aliquid, dolore perspiciatis vero voluptatum adipisci! Ab voluptatibus dolorem nemo. Eveniet!
                                    </div>
                                   
                                    
                                    <div class="background-img">
    
                                    </div>
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
                               
                                <div v-if="isOpen2" class="faq-group-body">
                                    <div class="z-index-text">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aliquid, dolore perspiciatis vero voluptatum adipisci! Ab voluptatibus dolorem nemo. Eveniet!
    
                                    </div>
                                    <div class="background-img1">
    
                                    </div>
                                   
                                    
                                </div>
                                
                             
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
                                    <div class="z-index-text">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aliquid, dolore perspiciatis vero voluptatum adipisci! Ab voluptatibus dolorem nemo. Eveniet!
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aliquid, dolore perspiciatis vero voluptatum adipisci! Ab voluptatibus dolorem nemo. Eveniet!
                                        amet consectetur adipisicing elit. Quis explicabo, nostrum id
                                    </div>
                                   
                                    <div class="background-img2">
    
                                    </div>
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
                                    <div class="z-index-text">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aliquid, dolore perspiciatis vero voluptatum adipisci! Ab voluptatibus dolorem nemo. Eveniet!
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aliquid, dolore perspiciatis vero voluptatum adipisci! Ab voluptatibus dolorem nemo. Eveniet!
                                    </div>
                                   
                                    amet consectetur adipisicing elit. Quis explicabo, nost
                               <div class="background-img3"></div>
                                </div>
                                </transition>
                            </div>
                        </div>
                        <div class="faq-content">
                            <div class="faq-group">
                                <div @click="openQuestion5" class="faq-group-header">
                                    <h4>
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo, nostrum id sapiente porro pariatur.  
                                    </h4>
                                   
                                    <i v-if="isOpen5" class="fas fa-minus"></i>
                                    <i v-else class="fas fa-plus"></i>
                                   
                                    
                                </div>
                                <transition name="faq">
                                <div v-if="isOpen5" class="faq-group-body">
                                    <div class="z-index-text">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aliquid, dolore perspiciatis vero voluptatum adipisci! Ab voluptatibus dolorem nemo. Eveniet!
                                        amet consectetur adipisicing elit. Quis explicabo, nostrum id sapiente porro
                                    </div>
                                   <div class="background-img"></div>
                                </div>
                                </transition>
                            </div>
                        </div>
                        
                    </div>
                    
                </section>


                </div>


                


            <div class="this-class-is-to-position-the-bg-as-abs">
                <div class="the-background-tangled-container">
                    <img src="/src/assets/images/Untitled_Artwork 213.png" alt="">
                </div>
                <div class="bull-container">
                    
                    <div class="containeer">
                        <div class="form-text">
                            <h1><i class="fa-solid fa-message">
                                <i class="fa-solid fa-message"></i>
                            </i>Contact Us</h1>
                            <h2>Get In Touch With Us</h2>
                            <p>we would love to hear your thoughts on our brand!</p>
                        </div>
                    </div>
                    <div class="tangled-background">
                      
                        <the-form class="la-form"></the-form>
                       
                            
                             
                                <div class="image-for-form" ref="formImage" :class="{ active: active }">
                                    <img src="/src/assets/images/Untitled_Artwork 193.png" alt="">
                                </div>
        
                        
                        
                    </div>

                </div>

                
            </div>

               
                
                <the-footer></the-footer>
               



    

            


    
        
            
            
    </body>


                
    </div>


   

    
       
   
    
    
 
  
</template>

<script>
import CreativeTextVue from '@/components/CreativeText.vue';
import ContactFormVue from '@/components/ContactForm.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheForm from '@/components/TheForm.vue';


export default {
    name: 'Home',
    components: {CreativeTextVue, ContactFormVue, TheFooter, TheForm},
    mounted(){
        
        let video = document.querySelector('.video');
window.addEventListener('scroll', function() {
    let value = 1 + window.scrollY/-600;
    video.style.opacity = value;
    
    
});
    },
    data(){
        return {
            isOpen1: false,
            isOpen2: false,
            isOpen3: false,
            isOpen4: false,
            isOpen5: false,
            active: false,
            
        };
    },
    methods: {

        reveal(){
           
            const revealed = document.querySelector('.image-for-form');
            
            const revealTop = revealed.getBoundingClientRect().top;
            const windowheight = window.innerHeight;
            const revealpoint = 150;
            if(revealTop <  windowheight - revealpoint){
                this.active = true;
            } else {
                this.active = false;
            };

        },
        scroll(){
            window.addEventListener('scroll', this.reveal);
        },
       openQuestion1(){
        //if(this.isOpen2 === true || this.isOpen3 === true || this.isOpen4 === true || this.isOpen5 === true){

       //     this.isOpen2 = false;
         //   this.isOpen3 = false;
        //    this.isOpen4 = false; 
        //    this.isOpen5 = false;
            
       // }
        this.isOpen1 = !this.isOpen1;
       },
       openQuestion2(){
        //if(this.isOpen1 === true || this.isOpen3 === true || this.isOpen4 === true || this.isOpen5 === true){

//this.isOpen1 = false;
//this.isOpen3 = false;
//this.isOpen4 = false; 
//this.isOpen5 = false;

//}
        this.isOpen2 = !this.isOpen2;
       },
       openQuestion3(){
        //if(this.isOpen1 === true || this.isOpen2 === true || this.isOpen4 === true || this.isOpen5 === true){

//this.isOpen1 = false;
//this.isOpen2 = false;
//this.isOpen4 = false; 
//this.isOpen5 = false;
//}
        this.isOpen3 = !this.isOpen3;
       },
       openQuestion4(){
        //if(this.isOpen1 === true || this.isOpen2 === true || this.isOpen3 === true || this.isOpen5 === true){

//this.isOpen1 = false;
//this.isOpen2 = false;
//this.isOpen3 = false; 
//this.isOpen5 = false;
//}
        this.isOpen4 = !this.isOpen4;
       },
       openQuestion5(){
        //if(this.isOpen1 === true || this.isOpen2 === true || this.isOpen3 === true || this.isOpen4 === true){

//this.isOpen1 = false;
//this.isOpen2 = false;
//this.isOpen3 = false; 
//this.isOpen4 = false;
//}
        this.isOpen5 = !this.isOpen5;
       }
    },
    created(){
        this.scroll();
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Mouse+Memoirs&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Princess+Sofia&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');



.container {
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
max-width: 1400px;
margin: 0 auto;
padding: 0 30px;
    
  
  
  }


.anim  {
opacity: 0;
transform: translateY(30px);
animation: moveup 0.5s linear forwards;

}

@keyframes moveup {
    100% {
        opacity: 1;
        transform: translatey(0);
    }
}



/* .tangled-background .containeer {
    max-width: 1350px;
    margin: 0 auto;
    padding: 0 15px;
    color: white;
    
  
} */


.fa-solid.fa-message {
    margin-right: 10px;
    
    position: relative;
}
.fa-solid.fa-message .fa-solid.fa-message {
    margin-right: 10px;
    position: absolute;
    right:-15px;
    top:-5px;
    color:#ff004f;
    font-size: 30px;
}


/* 
.container {
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
max-width: 1400px;
margin: 0 auto;
padding: 0 30px;
    
  
  
  } */



.tangled-background {
    
    padding-bottom:90px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
   justify-content: center;


  
 



}

.this-class-is-to-position-the-bg-as-abs {
    position: relative;
}
.the-background-tangled-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
 
   
}
.the-background-tangled-container img {
   width: 100%;
   height: 100%;
}





/* .contact-form .containeer {
    display:grid;
    grid-template-columns: 2fr 1fr;
    
    margin: 0 auto;
    gap: 30px;
    margin-top:-40px;
    align-items: center;

} */

.contact-form .containeer .image {
    width: 600px;
    height: 650px;
   

}

.contact-form img {
    width: 100%;
    height: 100%;
}

.background-img {
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/src/assets/images/Untitled_Artwork 198.png') no-repeat;
    opacity:70%;
    background-size: cover;
}
.background-img1 {
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/src/assets/images/Untitled_Artwork 197.png') no-repeat;
    opacity: 70%;
    background-size: cover;
}
.background-img2 {
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/src/assets/images/Untitled_Artwork 196.png') no-repeat;
    opacity: 70%;
    background-size: cover;
}
.background-img3 {
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/src/assets/images/Untitled_Artwork 195.png') no-repeat;
    opacity: 70%;
    background-size: cover;
}
.container-for-faq {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
}

.container-for-faq .faq-group-body {
    margin: 0 auto;
}

.faq-content {
    width: 1000px;
}


.z-index-text {
    position:relative;
    z-index: 3;
}

.faq .container {
    background: pink;
    max-width: 1000px;
    margin: 0 auto;
}








.faq-content .faq-group-body {
    position: relative;
    padding: 30px 20px;
    border-bottom: 1px solid #ccc;

}



.header-for-faq {
    margin: 50px 0;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.faq-content i {
    margin-right: 15px ;
}
.faq {
    color: white;
    margin-top: 100px;
    margin-bottom: 130px;
    
}



.faq .faq-group-header {
    padding: 25px 20px 50px 20px;
    position: relative;
    
}
.faq .faq-group-header h4 {
   padding-right: 40px;
    
}

.faq .faq-group-header1 {
    padding: 25px 20px 50px 20px;
  
    position: relative;
   
}

.faq .faq-group-header1 h4 {
    padding-right: 40px;
     
 }
 




.faq .faq-group .faq-group-header i {
    position: absolute;
    right: 0;
    top: 15px;
    font-size: 1.3rem;
    cursor: pointer;

}
.faq .faq-group .faq-group-header1 i {
    position: absolute;
    right: 0;
    top: 15px;
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
    display: none;
    content: '';
    position: absolute;
    height: 100px;
    background: #ff004f;
    top: 2320px;
    right: 0;
    left: 0;
    transform: skewY(-2.3deg);

    
}

.careers {
    background:  #ff004f ;
    margin: 50pxrgb(255, 255, 255)}

.careers .container {
    margin: 0 auto;
    color: white;
    display: grid;
    gap: 50px;
    padding: 40px 150px 0 150px;
    
    grid-template-columns: repeat(2,1fr);
    align-items: center;
   justify-content: center;
    text-align: center;
}

.careers h1 {
    font-size: 3rem;
    letter-spacing: 8px;
    margin: 15px 0;
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
    border: 2px solid;
    border-radius: 6px;
    text-decoration: none;
    color: #fff;
    transition: background 0.5s;

}
.btn-all-movies {
    font-size: 1.8rem;
    display: flex;
    justify-content: center;
    margin: 50px auto;
    width: fit-content;
    padding: 14px 50px;
    border: 2px solid;
    border-radius: 6px;
    text-decoration: none;
    color: #fff;
    transition: background 0.5s;

}

.btn-careers {
    background: black;
    display: flex;
    justify-content: center;
    margin: 50px auto;
    width: fit-content;
    padding: 14px 50px;
    border: 2px solid;
    border-radius: 6px;
    text-decoration: none;
    color: #fff;
    transition: background 0.5s;

}

.btn:hover{
    background: #ff004f;
}
.btn-careers:hover{
    background: transparent;
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


.categories h4 {
    font-size: 2.5rem;
    margin: 15px 0 25px 0;
}

.categories .tv-u-love,.sub-text {
    margin-top:8px;
font-size: 1.5rem;
}

.sub-text {
    margin-bottom: 20px;
}

.categories .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 90px 40px;
    color: white;
    margin-bottom: 200px;
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
    grid-gap: 30px;
    margin-top: 50px;
}


.social-bar h3 {
    font-family: 'Mouse Memoirs';
    
}

.social-bar h3 {
    font-size: 50px;

}



.social-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    height: 120px;
    background: linear-gradient(
        318.68deg,
        #ff004f 0%,
        #7f0229 49.72%,
        #2d000f
    );

}




.social-menu {
    text-decoration: none;
    list-style: none;
    display: flex;
    justify-content: center;
}

.social-menu a {
    display: flex;
    background: #e3edf700;
    height: 100px;
    width: 100px;
    margin: 0 15px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: 20px;
    transition: 0.5s;
    margin: 10px;
   
}

.social-menu a i {
    font-size: 40px;
    color: #000000;
    transition: 0.5s;
}

.social-menu a:hover {
    
    text-decoration: none;
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


/* MAIN HEADER TEXT */

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
    color: #ffffff;
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
    width: 100vw;
}
.image-container1 {
    display: flex;
    flex-direction: column;
    width: 100%;
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

/* main heaer text end */ 


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


.form-text {
    margin-bottom: 50px;
}

.form-text h1 {
    margin: 30px 0;
    font-size: 2.7rem;
}



.form-text h2 {
    margin: 15px 0 25px 0;
}

.image-for-form {
    opacity: 0;
    transition: all 2s ease;
    transform: translateY(150px);
    width: 650px;
    height: 680px;

}
.image-for-form img {
    width: 100%;
    height: 100%;
}

.image-for-form.active {
    transform: translateY(0px);
    opacity: 1;

}

.containeer {
    
    color: white;
   
    

}

.bull-container {
    margin: 0 auto;
    max-width: 1400px;
    position: relative;
    padding: 0 35px;
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


@media (max-width: 620px){

    .container .main-bar {
        margin-top: -80px;
    }
    .container .image-container1 {
        margin-top: -20px;
    }

   
    .bull-container .tangled-background .la-form {
        width: 450px;
     }

     .bull-container .tangled-background .image-for-form {
        width: 500px;
        margin: 0 auto;
     }

  /* * {
    opacity: .9;
   } */
   
 

    .social-bar h3 {
        font-size: 35px;
    
    }
    .social-bar {
        width: 100%;
       
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
    .social-menu a {
        display: flex;
        background: #e3edf700;
        height: 75px;
        width: 40px;
        margin: 0 15px;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        border-radius: 20px;
        transition: 0.5s;
        margin: 10px;
       
    }
    
    
      .careers .container {
        display: flex;
        flex-direction:column;
        text-align: center;
        align-items: center;
        justify-content: center;
        color: white;
        align-items: center;
        text-align: center;
       
    }
    body .careers .container .images-container {
        margin-top:30px;
        width: 500px;
        height: 500px;
        position: relative;
        
    
    }
    body .careers .container .text {
        
        width: 500px;
        height: 300px;
        position: relative;
        
    
    }
    .faq .faq-group-header {
        padding: 25px 20px 40px 20px;
        position: relative;
        
    }

    .faq-group-header h4 {
        padding-right: 40px;
    }

    .faq-group-header i {
        transform: scale(.9);

    }
    .faq-group-header1 i {
        transform: scale(.9);

    }




.form-text {
  
    text-align: center;
    margin-bottom: 100px;
}
.categories .container {
    padding: 0 15px;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top:50px;

    margin-bottom: 150px;
}
.categories .container h4{
    font-size: 2.5rem;
}
.categories .container .tv-u-love, .sub-text {
    font-size:1.2rem;
}

.btn-all-movies {
    font-size:1rem;
    padding: 12px 20px;
}


.careers::before {
    top: 1800px;
}

.work-list {
    grid-gap: 15px;
}
.container-for-faq .faq-content {
  
    width: 570px;
 }
 .container .image-container1 img {
    width: 500px;
   } 


   .container .main-bar .social-bar {
    gap: 40px;
}
.container .main-bar .social-bar h3 {
 
    font-size: 2.5rem;

}
.container .main-bar .social-bar .social-menu li a {
   
    width:60px;
    margin: 5px;
    height: 50px;

} 
}









@media(max-width: 1068px){

    .categories .container {
        width: 1000px;
    }

    .careers::before{
        top: 2200px;
    }
    .careers .container {
        gap: 100px;
    }
    .images-container {
        width: 450px;
        height: 450px;
    }

    /* .tangled-background {
       
        padding-bottom:90px;
        display: grid;
        grid-template-columns: repeat(2,1fr);
       justify-content: center;
    
       margin: 0 auto;
      
     
    
    
    } */
    

    .tangled-background {
        grid-template-columns: 1fr;
       
        
    }
    .tangled-background .la-form {
        justify-self: center;
        width: 650px;
    }

    .image-for-form {
      
        margin: 0 auto;
    }
    .containeer {
        margin-left: 0;
        display: flex;
        color: white;
        align-items: center;
        justify-content: center;
        text-align: center;
    
    }
    .the-background-tangled-container {
        position: absolute;
        top: 150px;
        left: 0;
        width: 100%;
        height: 50%;
     
       
    }
   
}

@media(max-width: 1027px){
   
   
   /* * {
        color: orange;
    }  */
    .faq  .container-for-faq{
 
    }
    .faq-content {
        width: 930px;
    }
}


/* media queries for careers page */

@media(max-width: 877px){
    
    /*
    * {
       opacity: .85;
    }  */

 .careers .container {
    gap: 20px;
 }

    .careers .container .images-container {
        background: orangered;
        
         width: 350px;
         justify-self: center;
         padding-top: 35px;
    }
    .careers .container .text {
       
        width: 315px;
    }

}

@media(max-width: 771px){

    /*
    * {
        opacity: .7;
    }  */
    .image-container1 img {
     width: 600px;
    } 
    .careers .container {
       background: orange;
    }
    .careers .container .images-container {
       padding-top: 75px;
        
         width: 290px;
    }
    .careers .container .text {
        
     
        width: 260px;
    }
}





/* media queries for contact form section */

@media(max-width: 1295px){

    /*
    * {
        color: gold;
    }   */
    .image-for-form {
        width: 500px;
        height: 600px;
   
       margin: 0 auto;
    }
}
@media(max-width: 1178px){


    .categories .container {
        width: 1120px;
    }
    .containeer {
        align-items: center;
        justify-content: center;
        display: flex;
        text-align: center;
        
    }
    .tangled-background {
        gap: 10px;
    }

    /*
    * {
        color: rgb(143, 0, 143);
    }  */

    .image-for-form {
        width: 550px;
        height: 600px;
        margin: 0 auto;
    }
    .la-form {
        width: 480px;
        margin: 0 auto;
        
    }
}


/* media queries for categories container */

@media(max-width: 1079px){

    /*
    * {
        color: brown;
    }  */
    .categories .container {
        width: 1000px;
    }
}




@media(max-width: 738px){
 
    .tangled-background .la-form {
       width: 550px;
    }
    .tangled-background .image-for-form {
       width: 500px;
    }
}

/* end of quey for contaxt form */

@media(max-width: 972px){
/*
    * {
        color: rgb(255, 110, 221);
    }   */
    .categories .container {
        width: 900px;
    }
    .faq  .container-for-faq{
       
    }
    .faq-content {
        width: 870px;
    }
    .main-bar .social-bar {
        gap: 60px;
    }
    .main-bar .social-bar h3 {
  
        font-size: 2.8rem;

    }
    .main-bar .social-bar .social-menu li a {
       
        width:60px;
        margin: 5px;
        height: 50px;

    }
}
@media(max-width: 890px){
    * {
       
    }
    .categories .container {
     width: 800px;
    }
    .faq  .container-for-faq{
      
    }
    .faq-content {
        width: 780px;
    }
}
@media(max-width: 808px){
    * {
        color: rgb(255, 255, 255);
    }
    .faq  .container-for-faq{
     
    }
    .faq-content {
        width: 680px;
    }


}

@media(max-width: 578px){
    * {
       
    }
    .container-for-faq .faq-content {
  
        width: 480px;
     }
     .categories .container .work-list {
        width: 500px;
        margin-top:0;
    }
    
}

/* max small lenght we can do */


@media(max-width: 507px){
    
    .container .main-bar .social-bar {
        gap: 35px;
    }
    .container .main-bar .social-bar h3 {
       
        font-size: 2.3rem;
    
    }
    .container .main-bar .social-bar .social-menu li a {
      
        width:40px;
        margin: 5px;
        height: 40px;
    
    }
    .categories .container h4 {
        font-size: 2.3rem;
    }
    .categories .container .sub-text {
        width: 80vw;
    }
    .categories .container .work-list {
        width: 450px;
        margin-top:0;
    }

.container .image-container1 img {
 width: 420px;
} 
    

  

}



</style>