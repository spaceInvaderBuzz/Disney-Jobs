<template>
    <section class="characters">

        <div class="outside-of-container-gallery">

            <div class="divider"></div>
            <div class="container-gallery">
                
                <h1 class="character-name">S T I T C H</h1>
                <div class="card">
                    <div class="circle"></div>
                    <div class="content">
                        <h2>Stitch</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea veniam similique esse eveniet ipsa sequi vitae eaque deserunt reiciendis!</p>
                    </div>
                    <img src="/src/assets/images/Untitled_Artwork 47.png" alt="">
                </div>
                <div class="gallery">
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                </div>
            </div>

        </div>

        <div class="outside-of-container-gallery">
            <div class="divider"></div>
            <h1 class="character-name">L I L O</h1>
            <div class="container-gallery">
              
                <div class="gallery1">
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                </div>
                <div class="card2">
                    <div class="circle"></div>
                    <div class="content">
                        <h2>Stitch</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea veniam similique esse eveniet ipsa sequi vitae eaque deserunt reiciendis!</p>
                    </div>
                    <img src="/src/assets/images/Untitled_Artwork 48.png" alt="">
                </div>
            </div>


            
        </div>

        <div class="outside-of-container-gallery">

            <div class="divider"></div>
            <div class="container-gallery">
                <div class="card">
                    <div class="circle"></div>
                    <div class="content">
                        <h2>Stitch</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea veniam similique esse eveniet ipsa sequi vitae eaque deserunt reiciendis!</p>
                    </div>
                    <img src="/src/assets/images/Untitled_Artwork 47.png" alt="">
                </div>
                <div class="gallery2">
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                    <a href="/src/assets/images/stitch.webp">
                        <img src="/src/assets/images/stitch.webp" alt="">
                    </a>
                </div>
            </div>

        </div>
       
    </section>
</template>

<script>


export default {
name: 'Characters',

mounted(){
    lightGallery(document.querySelector('.gallery'));
    lightGallery(document.querySelector('.gallery1'));
    lightGallery(document.querySelector('.gallery2'));
}

};
</script>

<style scoped>


.card {
    top: 45px;
    left:50px;
    position: relative;
    width: 600px;
    height: 350px;
    border-radius: 20px;
    transition: 0.5s;
   

}

.card .circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
 
    border-radius: 20px;
    overflow: hidden;
}

.card .circle::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        318.68deg,
        #ff004f 0%,
        #7f0229 49.72%,
        #2d000f
    );
    clip-path: circle(120px at center);
    transition: 0.5s;
}


.card:hover .circle:before {
    background: linear-gradient(
        318.68deg,
        #ff004f 0%,
        #7f0229 49.72%,
        #2d000f
    );

    clip-path: circle(400px at center);
}


.outside-of-container-gallery {
    position: relative;
   

}
.divider {
  overflow: hidden;
    background: url("/src/assets/images/Untitled_Artwork 216.png") no-repeat;
    position: absolute;
bottom: 0;
    left: 5vw;
    top:-10px;
    width: 90%;
    transform: scale(1.12);
    height: 500px;
    background-size: contain;
  
    

    
}
.character-name {

    position: absolute;
    top: 85px;
    font-size: 3rem;
    letter-spacing: 20px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

}
.card2 {
    position: relative;
    width: 600px;
    height: 350px;
    border-radius: 20px;
    transition: 0.5s;
    margin-left: 20px;

}

.card2 .circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
 
    border-radius: 20px;
    overflow: hidden;
}

.card2 .circle::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        318.68deg,
        #ff004f 0%,
        #7f0229 49.72%,
        #2d000f
    );
    clip-path: circle(120px at center);
    transition: 0.5s;
}


.card2:hover .circle:before {
    background: linear-gradient(
        318.68deg,
        #ff004f 0%,
        #7f0229 49.72%,
        #2d000f
    );
    clip-path: circle(400px at center);
}
.container-gallery {
    
    position: relative;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1500px;
    margin: 0 auto;
    border-bottom: 5px fade #ff004f;
    padding: 150px 0;
    
}
.container-gallery {
    
    align-items: center;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    max-width: 1500px;
    margin: 0 auto;
    
}

.card2 img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 300px;
    height: 400px;
    pointer-events: none;
    transition: 0.5s;
    
}

.card2:hover img {
    left:72%;
    height: 500px;
    width: 350px;
}


.card2 .content {
    position: relative;
    width: 50%;
    padding: 20px 20px 20px 40px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
}

.card:hover .content {
    left: 0;
    opacity: 1;
    visibility:visible;
}
.gallery {

    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap:30px;
    margin-top: 100px;
}

.gallery img {
    width: 100%;
}
.gallery1 {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap:30px;
    margin-top: 100px;
}

.gallery1 img {
    width: 100%;
}
.gallery2 {
    
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap:30px;
    margin-top: 100px;
}

.gallery2 img {
    width: 100%;
}


.card img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 300px;
    height: 400px;
    pointer-events: none;
    transition: 0.5s;
    
}

.card:hover img {
    left:72%;
    height: 500px;
    width: 350px;
}


.card .content {
    position: relative;
    width: 50%;
    padding: 20px 20px 20px 40px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
}

.card:hover .content {
    left: 0;
    opacity: 1;
    visibility:visible;
}

@media(max-width: 670px){


.outside-of-container-gallery .divider {
    overflow: hidden;
    background: url("/src/assets/images/Untitled_Artwork 217.png") no-repeat;
    position: absolute;
bottom: 0;
    left: 5vw;
    top:60px;
    width: 90%;
    transform: scale(1.12);
    height: 500px;
    background-size: contain;
}
   

   
     /* .gallery {
        padding: 0 500px;
      }  */

      .container-gallery {
        grid-template-columns: 1fr;
        max-width: 850px;
        justify-content: center;
        align-items: center;
        margin-top: -50px;
        
        
 
       }


      /* GALLERY CONTAINERS */ 
    .container-gallery .gallery {

        padding: 20px;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-gap:30px;
        margin-top: 100px;
        background: orange;
        width: 95%;
        margin: 0 auto;
        
        
    }
    .container-gallery .gallery img {
        width: 100%;
    }
    .container-gallery .gallery1 {

        padding: 20px;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-gap:30px;
        margin-top: 100px;
        background: orange;
        width: 95%;
        margin: 0 auto;
        
        
    }
    .container-gallery .gallery1 img {
        width: 100%;
    }
    .container-gallery .gallery2 {

        padding: 20px;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-gap:30px;
        margin-top: 100px;
        background: orange;
        width: 95%;
        margin: 0 auto;
        
        
    }
    .container-gallery .gallery2 img {
        width: 100%;
    }


    /* GELLRY CONTAINERS END*/ 


    /*CARD QUERIES START*/ 

    .container-gallery .card img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 300px;
        height: 400px;
        pointer-events: none;
        transition: 0.5s;
        
    }
    .card:hover img {
        left:72%;
        height: 500px;
        width: 350px;
    }
    .container-gallery .card {
        top: 45px;
        left:0px;
        position: relative;
        width: 600px;
        height: 350px;
        border-radius: 20px;
        transition: 0.5s;
        
    
       
    
    }
    .container-gallery .card2 img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 300px;
        height: 400px;
        pointer-events: none;
        transition: 0.5s;
        
    }
    .container-gallery .card2:hover img {
        left:72%;
        height: 500px;
        width: 350px;
    }
    .container-gallery .card2 {
        top: 45px;
        left:0px;
        position: relative;
        width: 600px;
        height: 350px;
        border-radius: 20px;
        transition: 0.5s;
        
    
       
    
    }
    
}


@media(max-width: 1208px){
    * {
       color: pink;
    }

    .container-gallery {
        gap:50px;
    }
    .gallery {
        grid-template-columns: repeat(3,1fr);
        width: 550px;
    }
    .gallery1 {
        grid-template-columns: repeat(3,1fr);
        width: 550px;
    }
    .gallery2 {
        grid-template-columns: repeat(3,1fr);
        width: 550px;
    }
    .card {
        width: 500px;
    }
    .card2 {
        width: 500px;
    }
}

@media(max-width: 1106px){
    * {
        color: green;
    }
    .gallery {
        width: 500px;
        background: pink;
    }
    .gallery1 {
        width: 500px;
        background: pink;
    }
    .gallery2 {
        width: 500px;
        background: pink;
    }
 
    /* CARD QUERIES START */ 
    .card {
        width: 400px;
        margin: 0 auto;
        background: orange;
    }
    .card img {
        width: 250px;
        height: 350px;
    }
    .card:hover img {
        width: 300px;
        height: 450px;
    }
 
    .card2 {
        width: 400px;
        margin: 0 auto;
        background: orange;
    }
    .card2 img {
        width: 250px;
        height: 350px;
    }
    .card2:hover img {
        width: 300px;
        height: 450px;
    }

    /* CARD QUERIES END */

    .container-gallery {
        justify-content: center;
    }

}

@media(max-width: 866px ){
    * {
       opacity: .9;
    }
    
    .gallery {
        background: none;
        width: 360px;
        grid-template-columns: repeat(2,1fr);
    }
    .gallery1 {
        background: none;
        width: 360px;
        grid-template-columns: repeat(2,1fr);
    }
    
    .gallery2 {
        background: none;
        width: 360px;
        grid-template-columns: repeat(2,1fr);
    }
    .card {
        background: none;
        width: 350px;
        height: 500px;
    }
    .card2 {
        background: none;
        width: 350px;
        height: 500px;
    }
}

/* query to keep dividir in check */
@media(max-width: 1202px){
    * {
        color: blue;
    }
   .divider {
    top:20px;
   }
}
@media(max-width: 922px){
    * {
        color: orange;
    }
    .divider {
        overflow: hidden;
        background: url("/src/assets/images/Untitled_Artwork 217.png") no-repeat;
        position: absolute;
    bottom: 0;
        left: 5vw;
        top:60px;
        width: 90%;
        transform: scale(1.12);
        height: 500px;
        background-size: contain;
    }
       
}
@media(max-width: 610px){
    * {
        color: aqua;
    }
    .container-gallery .card {
        width: 80vw;
    }
    .container-gallery .card2 {
        width: 80vw;
    }
    .container-gallery .gallery {
        grid-template-columns: repeat(3,1fr);
        width: 80vw;
    }
    .container-gallery .gallery1 {
        grid-template-columns: repeat(3,1fr);
        width: 80vw;
    }
    .container-gallery .gallery2 {
        grid-template-columns: repeat(3,1fr);
        width: 80vw;
    }
}

/* card query for card2 reize */

@media(max-width: 1274px){
   * {
    color: rgb(255, 234, 0)
   }
   .container-gallery .card2{
    margin-left: 0;
   }
   .container-gallery {
    gap:50px;
   }
  
}
</style>