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


.outside-of-container-gallery {
    position: relative;
}
.divider {
  overflow: hidden;
    background: url("/src/assets/images/Untitled_Artwork 189.png") no-repeat;
    position: absolute;
   
    left: 10px;
    top:-300px;
    width: 1650px;
    height: 500px;
    background-size: cover;

    
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
    margin-left: 50px;

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
    .divider {
       
          background: url("/src/assets/images/Untitled_Artwork 189.png") no-repeat;
          position: absolute;
          
          left: 0px;
          top:-90px;
          width:650px;
          height: 300px;
         background-size: contain;
      
          
      }
      .container-gallery {
       grid-template-columns: 1fr;
       max-width: 850px;
       justify-content: center;
       margin-top: -50px;
       
       

      }
      .card {
        top: 45px;
        left:50px;
        position: relative;
        width: 560px;
        height: 350px;
        border-radius: 20px;
        transition: 0.5s;
       
    
    }
      .card2 {
        
        position: relative;
        width: 560px;
        height: 350px;
        border-radius: 20px;
        margin-top: 50px;
        transition: 0.5s;
       
    
    }
      .gallery {
        padding: 0 50px;
      }
}
</style>