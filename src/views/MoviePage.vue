<template>
  <section class="movie-page-background">
    <div class="movie-page-hero-background">
        <div class="movie-page-container">
        <div class="hero-content">
            <div class="movie-info">
                <div class="movie-logo-container">
                    <img src="/src/assets/images/Untitled_Artwork 93.png" alt="">
                </div>
                <div class="movie-about-info">
                    <h2>ABOUT</h2>
                    <p class="movie-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui aliquid eligendi, similique corporis impedit nulla maiores voluptates rem repellat architecto aperiam quo beatae perferendis voluptatibus expedita quod vero numquam natus? Necessitatibus ipsam assumenda adipisci quod quas tempora optio, architecto velit aperiam quisquam mollitia quos provident perferendis explicabo debitis reiciendis voluptatem totam ex recusandae accusamus sunt sequi sint obcaecati consequuntur. Delectus accusamus officiis totam exercitationem? Quos ducimus, voluptatum ipsam temporibus consectetur quo et excepturi, optio amet explicabo soluta sit molestias iure tenetur provident voluptatem aperiam reiciendis nemo? Maiores, exercitationem magni, officia sequi ipsa perspiciatis numquam aspernatur error id asperiores dolorum, qui at voluptatem recusandae quo sit nostrum! Dolor obcaecati ab enim ullam voluptates, doloribus velit aperiam voluptatem consequuntur! Quis neque veniam, quia repudiandae, eum accusantium nesciunt eos id explicabo, voluptatem doloribus saepe aspernatur blanditiis labore nemo similique. Unde veritatis libero laborum nam itaque. Hic inventore, placeat numquam molestias, blanditiis ducimus eaque temporibus tempora ratione ex, illo repellat tempore? Ex voluptatibus inventore quod molestiae impedit. Reprehenderit commodi quia aspernatur ex, possimus tenetur dignissimos explicabo nisi quam nam maxime veniam distinctio quis vitae laborum repellendus odio. Sit excepturi adipisci impedit itaque asperiores ipsam repellat, dolor dignissimos maxime doloremque obcaecati culpa velit ex.
    
                    </p>
                    <div class="cast">
                        <h1>CAST</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo obcaecati officiis consequatur error maxime, culpa voluptatem consectetur reprehenderit possimus quis soluta fugit praesentium, animi voluptatibus.
                        </p> 
                    </div>
                    <div class="directed-by">
                        <h1>DIRECTED BY</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, numquam.</p>
                    </div>
    
    
                </div>
            </div>
            <div class="movie-poster">
                <img src="/src/assets/images/Untitled_Artwork 94.png" alt="">
            </div>
        </div>
        </div>
    </div>
    
  </section>
  <the-footer></the-footer>
  
</template>

<script>
import TheFooter from '@/components/TheFooter.vue';

export default {
name: "MoviePage",
props: ["id"],
components: { TheFooter },
}
</script>

<style scoped>

.movie-about-info {
    color: white;
}

.movie-poster {
    width: 800px;
    height: 1000px;
    border-radius: 800px;
  
}

.movie-poster img {
    width: 100%;
    height: 100%;
    border-radius: 800px;
    box-shadow: 10x 20px 3px black;
}


.movie-logo-container {
    width: 600px;
    height: 410px;

}

.movie-logo-container img {
    width: 100%;
    height: 100%;
}

.movie-page-container {
    max-width: 1300px;
    margin: 0 auto;
    
    
 

}

.hero-content {
    padding-top: 200px;
   display: grid;
   grid-template-columns: 1fr 2fr;
   align-items: center;
   justify-content: center;
   gap: 30px;
}


.movie-page-background {
    background: black;
    
}

.movie-page-hero-background {
    background: url('/src/assets/images/Untitled_Artwork 92.png') no-repeat;
    background-size: contain;
    width:1660px;
    height: 2000px;
    
}

div {
    color: black;
}

</style>