<template>
    
  
    <section class="black-bg">
        <section class="hero-main">
            <div class="diamond-grid">
                <ul>
                    <li class="diamond1">
                        <div class="image"></div>
                    </li>
                    <li class="diamond2">
                        <div class="image"></div>
                    </li>
                    <li class="diamond3">
                        <div class="image"></div>
                    </li>
                    <li class="diamond4">
                        <div class="image"></div>
                    </li>
                    <li class="diamond5">
                        <div class="image"></div>
                    </li>
                </ul>
            </div>
            <div class="main-text">
                <div class="wrapper">
                    <div class="content">
                        <ol>
                            <li class="span1"><span>CREATING</span></li>
                            <li class="span2"><span>INSPIRING</span></li>
                            <li class="span3"><span>EXPERIENCING</span></li>
                            <li class="span4"><span>IMAGINING</span></li>
                            <li class="span5"><span>SHARING</span></li>
                            <li class="span6"><span>EMBRACING</span></li>
                        </ol>
                    </div>
                    
                  </div>
                  <div class="rest of text">
                    <div>UNFORGETTABLE</div>
                  </div>
            </div>
            
        </section>
        <div class="main-section">
            <div class="svg-thang">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff004f" fill-opacity="1" d="M0,192L48,165.3C96,139,192,85,288,58.7C384,32,480,32,576,53.3C672,75,768,117,864,160C960,203,1056,245,1152,224C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            <section  class="hero-bullshit">
                <div class="apply-now">
                    <div class="img-container">
                        <img src="/src/assets/images/Untitled_Artwork 85.png" alt="">
                    </div>
                    <div class="text">
                        <h1 class="browse-openings-text">BROWSE OPENINGS</h1>
                        <div class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid voluptatem deleniti cumque dolores, pariatur sint id deserunt. Ducimus, modi iusto natus blanditiis distinctio quasi perspiciatis totam aspernatur, fugiat, quae minus?fvrefverfrefgerf
                            regvrefgvtrebtrhbgrhrthtrhtrghbtygfhnbv
                            rthbrtyhbrytgfhbtyhgfhdtbg
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, a.
                            rgfergregfregregrgregergregergreg
                            rgfergregfregregrgregergregergregrgergrgdf
                            fewfefewkfojewifh
                        </div>
                    </div>
                </div>
            <router-link :to="{ name: 'JobResults' }"></router-link>
                
                
            </section>
        </div>
      
    </section>
  
  
</template>

<script>
export default {
name: 'CareersHeroPage',
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Mouse+Memoirs&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Princess+Sofia&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');





.main-section {
    margin-top: -600px;
}


.hero-bullshit {
    margin-top:  -10px;
    background: #ff004f;
    padding: 100px 10vw;

}

.apply-now {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    justify-content: center;
    align-items: center;

}


.apply-now img {
    margin-left:40px;
    width: 100%;
    border-radius: 50px;
}

.hero-bullshit .text {
    position: relative;
    font-size: 1.1rem;
    height: 400px;
    
}

.text .description {
    margin-top: 120px;
    margin-left: -10px;
}
.browse-openings-text {
    position: absolute;
    color: white;
    top: -36px;
    left:-100px;
    font-size: 90px;
}




* {
    font-family: "Anton";
}

.span1 {
    padding-left:125px;
}
.span2 {
    padding-left: 110px;
}
.span4 {
    padding-left: 80px;
}

.span5 {
    padding-left: 145px ;
}
.span6 {
    padding-left: 60px;
}


.main-text {
    color: white;
    font-size: 70px;
    position: absolute;
    top: 150px;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

} 

.diamond-grid ul {
    position: absolute;
    width: 600px;
    height: 150px;
    margin: 0;
    padding: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


.diamond-grid ul li {
    list-style: none;
    position: absolute;
    width: 200px;
    height: 200px;
    background: orange;
    transform: rotate(45deg);
    margin: -100px;
    overflow: hidden;
}

.diamond-grid ul li.diamond1 {
    top: 0;
    left: 0%;
}
.diamond-grid ul li.diamond2 {
    bottom: 0;
    left: 25%;
}
.diamond-grid ul li.diamond3 {
    top: 0;
    left: 50%;
}
.diamond-grid ul li.diamond4 {
    bottom: 0;
    left: 75%;
}
.diamond-grid ul li.diamond5 {
    top: 0;
    left: 100%;
}


.diamond-grid ul li .image {
    width: 100%;
    height: 100%;
    transform: rotate(-45deg) scale(1.4);
}

.diamond-grid ul li.diamond1 .image {
    background: url("/src/assets/images/Untitled_Artwork 80.png");
    background-size: cover;
}
.diamond-grid ul li.diamond3 .image {
    background: url("/src/assets/images/Untitled_Artwork 84.png");
    background-size: cover;
}

.black-bg {
    background: black;
}

.hero-main {
    background: url("/src/assets/images/Untitled_Artwork 77.png") no-repeat;
    background-size: cover;
    height: 1700px;
   
}



.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
}

.wrapper .content {
    color: black;
}

.wrapper .content ol {
   
    padding: 0 30px;
    list-style: none;
    line-height: 5.5rem;
    height: 6rem;
    overflow: hidden;
}

.wrapper .content ol li {
    animation: slide-up 12s infinite;
}

@keyframes slide-up {
    0%, 10% {
        transform: translateY(0%);
    }
    15%, 25% {
        transform: translateY(-100%);
    }
    30%, 40% {
        transform: translateY(-200%)
    }
    45%, 55% {
        transform: translateY(-300%);
    }
    60%, 70% {
        transform: translateY(-400%);
    }
    75%, 85% {
        transform: translateY(-500%);
    }
}

.wrapper .content ol li span {
    -webkit-text-fill-color: transparent;
    background: linear-gradient(20deg,#ff004f,#690342 );
    -webkit-background-clip: text;
}
</style>