<template>
    <section class="characters">

            <div class="container-gallery">
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
            <div class="container-gallery">
              
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
                <div class="card2">
                    <div class="circle"></div>
                    <div class="content">
                        <h2>Stitch</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea veniam similique esse eveniet ipsa sequi vitae eaque deserunt reiciendis!</p>
                    </div>
                    <img src="/src/assets/images/Untitled_Artwork 48.png" alt="">
                </div>
            </div>
            <div class="container-gallery">
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
    </section>
</template>

<script>


export default {
name: 'Characters',

mounted(){
    lightGallery(document.querySelector('.gallery'));
}

};
</script>

<style scoped>
.card {
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
    background: orange;
    clip-path: circle(120px at center);
    transition: 0.5s;
}


.card:hover .circle:before {
    background: green;
    clip-path: circle(400px at center);
}
.container-gallery {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1500px;
    margin: 0 auto;
    
}
.card2 {
    position: relative;
    width: 600px;
    height: 350px;
    border-radius: 20px;
    transition: 0.5s;

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
    background: orange;
    clip-path: circle(120px at center);
    transition: 0.5s;
}


.card2:hover .circle:before {
    background: green;
    clip-path: circle(400px at center);
}
.container-gallery {
    align-items: center;
    display: grid;
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
    
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap:30px;
    margin-top: 100px;
}

.gallery img {
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
</style>