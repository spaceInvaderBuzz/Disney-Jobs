<template>
    <div v-for="(movie, index) in activeMovie" :key="index">
        <section class="movie-page-background">
            <div class="mobile-container">
            
                <div :class="{ moviePagHeroBackground1: movie.movieIdentifier === 1, moviePagHeroBackground2: movie.movieIdentifier === 2, moviePagHeroBackground3: movie.movieIdentifier === 3, moviePagHeroBackground4: movie.movieIdentifier === 4, moviePagHeroBackground5: movie.movieIdentifier === 5, moviePagHeroBackground6: movie.movieIdentifier === 6, moviePagHeroBackground2: movie.movieIdentifier === 2, moviePagHeroBackground3: movie.movieIdentifier === 3, moviePagHeroBackground4: movie.movieIdentifier === 4, moviePagHeroBackground5: movie.movieIdentifier === 5, moviePagHeroBackground7: movie.movieIdentifier === 7}">
                <div class="movie-page-container">
                    
                        <div v-if="mobile" class="movie-info">
                            <div class="movie-logo-container">
                                <img :src="`/src/assets/images/${ movie.logo }.png`">
                            </div>
                            <div class="movie-poster">
                                <img :src="`/src/assets/images/${ movie.poster }.png`" alt="">
                            </div>
                            <div class="movie-about-info">
                                <h2>ABOUT</h2>
                                <div class="movie-description">
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quis laborum non laudantium autem inventore nihil asperiores unde nam? Non dignissimos, perspiciatis quos quo obcaecati distinctio consectetur iste ex voluptas!
                                    </div> 
                                    <div>
                                        Lorem ipsum dodfcsx lor sit amet consectetur adipisicing elit. Assumenda quis laborum non laudantium autem inventore nihil asperiores unde nam? Non dignissimos, perspiciatis quos quo obcaecati distinctio consectetur iste ex voluptas!
                                    </div> 
                                    <div>
                                        Lorem ipsum dolosdcwdscwfvfrwesr sit amet consectetur adipisicing elit. Assumenda quis laborum non laudantium autem inventore nihil asperiores unde nam? Non dignissimos, perspiciatis quos quo obcaecati distinctio consectetur iste ex voluptas!
                                    </div> 
                                    <div>
                                        Lorem ipsum dolor sdcit amet consectetur adipisicing elit. Assumenda quis laborum non laudantium autem inventore nihil asperiores unde nam? Non dignissimos, perspiciatis quos quo obcaecati distinctio consectetur iste ex voluptas!
                                    </div> 
                                    <div>
                                        Lorem ipsum dolordfvcedfscx sit amet consectetur adipisicing elit. Assumenda quis laborum non laudantium autem inventore nihil asperiores unde nam? Non dignissimos, perspiciatis quos quo obcaecati distinctio consectetur iste ex voluptas!
                                    </div> 
                
                                </div>
                                <div class="cast">
                                    <h1>CAST</h1>
                                    <div class="cast-names">
                                        <div class="name-container">
                                            <span>Jack Black</span>
                                            is The Little Mermaid
                                        </div>
                                        <div class="name-container">
                                            <span>Jack Black</span>
                                            is The Little Mermaid
                                        </div>
                                        <div class="name-container">
                                            <span>Jack Black</span>
                                            is The Little Mermaid
                                        </div>
                                        <div class="name-container">
                                            <span>Jack Black</span>
                                            is The Little Mermaid
                                        </div>
                                    </div>
                                </div>
                                <div class="directed-by">
                                    <h1>CREW</h1>
                                    <div class="crew">
                                        <div>Written By</div>
                                        <p>Neil Breen</p>
                                    </div>
                                    <div class="crew">
                                        <div>Produced By</div>
                                        <p>Neil Breen</p>
                                    </div>
                                    <div class="crew">
                                        <div>Directed By</div>
                                        <p>Neil Breen</p>
                                    </div>
                                   
                                  
                                </div>
                
                
                            </div>
                        </div>
                       
                 
             
                    <div v-else class="hero-content">
                        <div class="movie-info">
                            <div class="movie-logo-container">
                                <img :src="`/src/assets/images/${ movie.logo }.png`">
                            </div>
                            <div class="movie-about-info">
                                <h2>ABOUT</h2>
                                <div class="movie-description">
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quis laborum non laudantium autem inventore nihil asperiores unde nam? Non dignissimos, perspiciatis quos quo obcaecati distinctio consectetur iste ex voluptas!
                                    </div> 
                                    <div>
                                        Lorem ipsum dodfcsx lor sit amet consectetur adipisicing elit. Assumenda quis laborum non laudantium autem inventore nihil asperiores unde nam? Non dignissimos, perspiciatis quos quo obcaecati distinctio consectetur iste ex voluptas!
                                    </div> 
                                    <div>
                                        Lorem ipsum dolosdcwdscwfvfrwesr sit amet consectetur adipisicing elit. Assumenda quis laborum non laudantium autem inventore nihil asperiores unde nam? Non dignissimos, perspiciatis quos quo obcaecati distinctio consectetur iste ex voluptas!
                                    </div> 
                                    <div>
                                        Lorem ipsum dolor sdcit amet consectetur adipisicing elit. Assumenda quis laborum non laudantium autem inventore nihil asperiores unde nam? Non dignissimos, perspiciatis quos quo obcaecati distinctio consectetur iste ex voluptas!
                                    </div> 
                                    
                
                                </div>
                                <div class="cast">
                                    <h1>CAST</h1>
                                    <div class="cast-names">
                                        <div class="name-container">
                                            <span>Jack Black</span>
                                            is The Little Mermaid
                                        </div>
                                        <div class="name-container">
                                            <span>Jack Black</span>
                                            is The Little Mermaid
                                        </div>
                                        <div class="name-container">
                                            <span>Jack Black</span>
                                            is The Little Mermaid
                                        </div>
                                        <div class="name-container">
                                            <span>Jack Black</span>
                                            is The Little Mermaid
                                        </div>
                                    </div>
                                </div>
                                <div class="directed-by">
                                    <h1>CREW</h1>
                                    <div class="crew">
                                        <div>Written By</div>
                                        <p>Neil Breen</p>
                                    </div>
                                    <div class="crew">
                                        <div>Produced By</div>
                                        <p>Neil Breen</p>
                                    </div>
                                    <div class="crew">
                                        <div>Directed By</div>
                                        <p>Neil Breen</p>
                                    </div>
                                   
                                  
                                </div>
                
                
                            </div>
                        </div>
                        <div class="movie-poster">
                            <img :src="`/src/assets/images/${ movie.poster }.png`" alt="">
                        </div>
                    </div>
             
                   
            
                    
                </div>
                <section class="own-today-section">
                    <div v-if="mobile" class="mobile-own-it-today-bg-container">
                        <div :class="{mobileOwnItTodayBg: movie.movieIdentifier === 1, mobileOwnItTodayBg2: movie.movieIdentifier === 2, mobileOwnItTodayBg3: movie.movieIdentifier === 3, mobileOwnItTodayBg4: movie.movieIdentifier === 4,  mobileOwnItTodayBg5: movie.movieIdentifier === 5 }"></div>
                    </div>
                    <div class="own-it-today">
                       
                        <h1>Own It Today!</h1>
                
                        <div class="img1-container" ref="image">
                            <img :src="`/src/assets/images/${ movie.imageFromLeft }.png`" alt="">
                        </div>
                        <div class="img2-container" ref="image">
                            <img :src="`/src/assets/images/${ movie.imageFromRight}.png`" alt="">
                        </div>
                        <div class="blu-ray-and-4k">
                            
                        <div class="container">
                            <div class="card">
                                <div :class="{front1: movie.movieIdentifier === 1, front3: movie.movieIdentifier === 2, front5: movie.movieIdentifier === 3, front7: movie.movieIdentifier === 4, front9: movie.movieIdentifier === 5, front11: movie.movieIdentifier === 6, front13: movie.movieIdentifier === 7 }"></div>
                                <div class="back">
                                    <div class="blue-ray-logo">
                                        <img src="/src/assets/images/Untitled_Artwork 107.png" alt="">
                                    </div>
                                    <a :href="`https://www.amazon.com/${ movie.amazonLink }`">Buy now</a>
                                </div>
                            </div>
                            <h2>BLU RAY</h2>
                        </div>
                        <div class="container2">
                            <div class="card2">
                                <div :class="{front2: movie.movieIdentifier === 1, front4: movie.movieIdentifier === 2, front6: movie.movieIdentifier === 3, front8: movie.movieIdentifier === 4, front10: movie.movieIdentifier === 5, front12: movie.movieIdentifier === 6, front14: movie.movieIdentifier === 7 }"></div>
                                <div class="back2">
                                    <div class="blue-ray-logo">
                                        <img src="/src/assets/images/Untitled_Artwork 109.png" alt="">
                                    </div>
                                    <a :href="`https://www.amazon.com/${ movie.amazonLink2 }`">Buy now</a>
                                </div>
                            </div>
                            <h2>4K ULTRA HD</h2>
                         
                        </div>
                            
                
                        </div>
                        
                    </div>
                
                </section>
                <section class="trailer">
                    <div class="movie-page-container">
                        
                        <div class="trailer-container">
                            <h1 class="watch-trailer">
                                - WATCH THE TRAILER - 
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia molestiae ratione repellat dolores reprehenderit eum unde laudantium quisquam quo deserunt nulla
                            </p>
                            <iframe class="movie" width="840" height="472" :src="`https://www.youtube.com/embed/${ movie.youTube}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                   
                </section>
                <div class="background-banner">
                    <div class="background-banner-container">
                       <div :class="{pimg1: movie.movieIdentifier === 1, pimg2: movie.movieIdentifier === 2, pimg3: movie.movieIdentifier === 3, pimg4: movie.movieIdentifier === 4, pimg5: movie.movieIdentifier === 5,  pimg6: movie.movieIdentifier === 6, pimg7: movie.movieIdentifier === 7 }">
                        <div class="text">GALLERY</div>
                       </div>
                    </div>
                </div>
                <div class="gallery">
                    <h1>GALLERY</h1>
                    <div v-if="mobile" class="gallery-container">
                        
                            <div v-for="(image,index) in mobileActiveImages" :key="index" @click="addActiveClass(index)" class="panel" :class="{ active: activeSlide[0].id === index }" :style="{ background:`url('/src/assets/images/${image.background}.png') no-repeat center`}">
                                <h3>{{ image.text }}</h3>
                            </div>
                        
                        
                    </div>
                    <div v-else class="gallery-container">
                        
                            <div v-for="(image,index) in activeImages" :key="index" @click="addActiveClass(index)" class="panel" :class="{ active: activeSlide[0].id === index }" :style="{ background:`url('/src/assets/images/${image.background}.png') no-repeat center`}">
                                <h3>{{ image.text }}</h3>
                            </div>
                        
                        
                    </div>
                    
                </div>
                <the-footer></the-footer>
                </div>
            
             

        </div>
    </section>

        
    </div>
  

 
  
  
</template>

<script>
import TheFooter from '@/components/TheFooter.vue';

export default {
name: "MoviePage",
props: ["id"],
components: { TheFooter },

data(){
    return {
        mobile: false,
        windowWidth: false,

        triggerBottom: window.innerHeight / 5 * 4,
        movies: [
            {
                id: "1",
                movieIdentifier: 1,
                logo: "Untitled_Artwork 93",
                poster: "Untitled_Artwork 94",
                imageFromLeft: "Untitled_Artwork 110",
                imageFromRight: "Untitled_Artwork 125",
                amazonLink: "LITTLE-MERMAID-Blu-ray-Rene-Auberjonois/dp/6317645930/ref=asc_df_6317645930/?tag=hyprod-20&linkCode=df0&hvadid=693721130339&hvpos=&hvnetw=g&hvrand=15424383282302633595&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9029499&hvtargid=pla-652838779190&psc=1&mcid=dc0bbe0515993b1d98fc4b2eb2c385fe&gad_source=1&gclid=CjwKCAjw57exBhAsEiwAaIxaZlzLzlr_VNWuP0Tr8EhHZBB_ibm0M9Gq_ZOpdxBckqS-Za1YQJLYzhoC1E0QAvD_BwE",
                amazonLink2: "LITTLE-MERMAID-Blu-ray-Rene-Auberjonois/dp/6317645930/ref=asc_df_6317645930/?tag=hyprod-20&linkCode=df0&hvadid=693721130339&hvpos=&hvnetw=g&hvrand=15424383282302633595&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9029499&hvtargid=pla-652838779190&psc=1&mcid=dc0bbe0515993b1d98fc4b2eb2c385fe&gad_source=1&gclid=CjwKCAjw57exBhAsEiwAaIxaZlzLzlr_VNWuP0Tr8EhHZBB_ibm0M9Gq_ZOpdxBckqS-Za1YQJLYzhoC1E0QAvD_BwE",
                youTube: "nPE0f-MB_bQ?si=XsMg9TvnvNaza-YA",
            },
            {
                
                id: "2",
                movieIdentifier: 2,
                logo: "Untitled_Artwork 112",
                poster: "Untitled_Artwork 114",
                imageFromLeft: "Untitled_Artwork 126",
                imageFromRight: "Untitled_Artwork 127",
                amazonLink: "MULAN-Blu-ray-Ming-Na-Wen/dp/B01N0O94V4/ref=asc_df_B01N0O94V4/?tag=hyprod-20&linkCode=df0&hvadid=312191060363&hvpos=&hvnetw=g&hvrand=17533453218546530152&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9029499&hvtargid=pla-420609057090&psc=1&mcid=8161ac5a7f66396ba56edc6e316d6ccb&gclid=EAIaIQobChMI5PXGyr3rhQMVW2FIAB3A0gLUEAQYASABEgJopPD_BwE",
                amazonLink2: "Mulan-UHD-Blu-ray-Ming-Na-Wen/dp/B08ZDQVN2B/ref=sr_1_7?crid=3R02H4CHKJ2IN&dib=eyJ2IjoiMSJ9.xF_h0u5ElkwVmqEb5WPW9sJP17pJgk2351RikCGzIHwZwK1VULKGxpmrU7Chmc9-XpaHERMKf0onKeVGwFfpIwyebXnxhN5Z3HFQoySJ9vAGWFLRFGyRyrkeH-PLrKtpV2gl7CyWta2eAGWfJvLWBpd_TJWAJ7wxK0Tri-8wiiPZBWegR-_FJF_HzELhwreatjvZdqlh5QS28pMheShdufbAZw9OIefyopLV1plDk9o.NxnxyqQNjLrI5jSX1IXcgABu6eohwRG7wmIgHVvN378&dib_tag=se&keywords=mulan+4k&qid=1714533160&s=movies-tv&sprefix=mulan+4k%2Cmovies-tv%2C132&sr=1-7",
                youTube: "HKH7_n425Ss?si=VuKinN5HJeLNtEoo",
            },
            {
                
                id: "3",
                movieIdentifier: 3,
                logo: "Untitled_Artwork 138",
                poster: "Untitled_Artwork 136",
                imageFromLeft: "Untitled_Artwork 140",
                imageFromRight: "Untitled_Artwork 139",
                amazonLink: "MULAN-Blu-ray-Ming-Na-Wen/dp/B01N0O94V4/ref=asc_df_B01N0O94V4/?tag=hyprod-20&linkCode=df0&hvadid=312191060363&hvpos=&hvnetw=g&hvrand=17533453218546530152&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9029499&hvtargid=pla-420609057090&psc=1&mcid=8161ac5a7f66396ba56edc6e316d6ccb&gclid=EAIaIQobChMI5PXGyr3rhQMVW2FIAB3A0gLUEAQYASABEgJopPD_BwE",
                amazonLink2: "Mulan-UHD-Blu-ray-Ming-Na-Wen/dp/B08ZDQVN2B/ref=sr_1_7?crid=3R02H4CHKJ2IN&dib=eyJ2IjoiMSJ9.xF_h0u5ElkwVmqEb5WPW9sJP17pJgk2351RikCGzIHwZwK1VULKGxpmrU7Chmc9-XpaHERMKf0onKeVGwFfpIwyebXnxhN5Z3HFQoySJ9vAGWFLRFGyRyrkeH-PLrKtpV2gl7CyWta2eAGWfJvLWBpd_TJWAJ7wxK0Tri-8wiiPZBWegR-_FJF_HzELhwreatjvZdqlh5QS28pMheShdufbAZw9OIefyopLV1plDk9o.NxnxyqQNjLrI5jSX1IXcgABu6eohwRG7wmIgHVvN378&dib_tag=se&keywords=mulan+4k&qid=1714533160&s=movies-tv&sprefix=mulan+4k%2Cmovies-tv%2C132&sr=1-7",
                youTube: "ie53R2HEZ6g?si=pykmULhhrTK56PLS",
            },
            {
                
                id: "4",
                movieIdentifier: 4,
                logo: "Untitled_Artwork 151",
                poster: "Untitled_Artwork 150",
                imageFromLeft: "Untitled_Artwork 145",
                imageFromRight: "Untitled_Artwork 146",
                amazonLink: "MULAN-Blu-ray-Ming-Na-Wen/dp/B01N0O94V4/ref=asc_df_B01N0O94V4/?tag=hyprod-20&linkCode=df0&hvadid=312191060363&hvpos=&hvnetw=g&hvrand=17533453218546530152&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9029499&hvtargid=pla-420609057090&psc=1&mcid=8161ac5a7f66396ba56edc6e316d6ccb&gclid=EAIaIQobChMI5PXGyr3rhQMVW2FIAB3A0gLUEAQYASABEgJopPD_BwE",
                amazonLink2: "Mulan-UHD-Blu-ray-Ming-Na-Wen/dp/B08ZDQVN2B/ref=sr_1_7?crid=3R02H4CHKJ2IN&dib=eyJ2IjoiMSJ9.xF_h0u5ElkwVmqEb5WPW9sJP17pJgk2351RikCGzIHwZwK1VULKGxpmrU7Chmc9-XpaHERMKf0onKeVGwFfpIwyebXnxhN5Z3HFQoySJ9vAGWFLRFGyRyrkeH-PLrKtpV2gl7CyWta2eAGWfJvLWBpd_TJWAJ7wxK0Tri-8wiiPZBWegR-_FJF_HzELhwreatjvZdqlh5QS28pMheShdufbAZw9OIefyopLV1plDk9o.NxnxyqQNjLrI5jSX1IXcgABu6eohwRG7wmIgHVvN378&dib_tag=se&keywords=mulan+4k&qid=1714533160&s=movies-tv&sprefix=mulan+4k%2Cmovies-tv%2C132&sr=1-7",
                youTube: "lFzVJEksoDY?si=RJZw5c-Z1RxhCPT0",
            },
            {
                
                id: "5",
                movieIdentifier: 5,
                logo: "Untitled_Artwork 154",
                poster: "Untitled_Artwork 156",
                imageFromLeft: "Untitled_Artwork 160",
                imageFromRight: "Untitled_Artwork 158",
                amazonLink: "MULAN-Blu-ray-Ming-Na-Wen/dp/B01N0O94V4/ref=asc_df_B01N0O94V4/?tag=hyprod-20&linkCode=df0&hvadid=312191060363&hvpos=&hvnetw=g&hvrand=17533453218546530152&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9029499&hvtargid=pla-420609057090&psc=1&mcid=8161ac5a7f66396ba56edc6e316d6ccb&gclid=EAIaIQobChMI5PXGyr3rhQMVW2FIAB3A0gLUEAQYASABEgJopPD_BwE",
                amazonLink2: "Mulan-UHD-Blu-ray-Ming-Na-Wen/dp/B08ZDQVN2B/ref=sr_1_7?crid=3R02H4CHKJ2IN&dib=eyJ2IjoiMSJ9.xF_h0u5ElkwVmqEb5WPW9sJP17pJgk2351RikCGzIHwZwK1VULKGxpmrU7Chmc9-XpaHERMKf0onKeVGwFfpIwyebXnxhN5Z3HFQoySJ9vAGWFLRFGyRyrkeH-PLrKtpV2gl7CyWta2eAGWfJvLWBpd_TJWAJ7wxK0Tri-8wiiPZBWegR-_FJF_HzELhwreatjvZdqlh5QS28pMheShdufbAZw9OIefyopLV1plDk9o.NxnxyqQNjLrI5jSX1IXcgABu6eohwRG7wmIgHVvN378&dib_tag=se&keywords=mulan+4k&qid=1714533160&s=movies-tv&sprefix=mulan+4k%2Cmovies-tv%2C132&sr=1-7",
                youTube: "JX6btxoFhI8?si=GH4liV5qXb9zzdoE",
            },
            {
                
                id: "6",
                movieIdentifier: 6,
                logo: "Untitled_Artwork 168",
                poster: "Untitled_Artwork 166",
                imageFromLeft: "Untitled_Artwork 170",
                imageFromRight: "Untitled_Artwork 171",
                amazonLink: "MULAN-Blu-ray-Ming-Na-Wen/dp/B01N0O94V4/ref=asc_df_B01N0O94V4/?tag=hyprod-20&linkCode=df0&hvadid=312191060363&hvpos=&hvnetw=g&hvrand=17533453218546530152&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9029499&hvtargid=pla-420609057090&psc=1&mcid=8161ac5a7f66396ba56edc6e316d6ccb&gclid=EAIaIQobChMI5PXGyr3rhQMVW2FIAB3A0gLUEAQYASABEgJopPD_BwE",
                amazonLink2: "Mulan-UHD-Blu-ray-Ming-Na-Wen/dp/B08ZDQVN2B/ref=sr_1_7?crid=3R02H4CHKJ2IN&dib=eyJ2IjoiMSJ9.xF_h0u5ElkwVmqEb5WPW9sJP17pJgk2351RikCGzIHwZwK1VULKGxpmrU7Chmc9-XpaHERMKf0onKeVGwFfpIwyebXnxhN5Z3HFQoySJ9vAGWFLRFGyRyrkeH-PLrKtpV2gl7CyWta2eAGWfJvLWBpd_TJWAJ7wxK0Tri-8wiiPZBWegR-_FJF_HzELhwreatjvZdqlh5QS28pMheShdufbAZw9OIefyopLV1plDk9o.NxnxyqQNjLrI5jSX1IXcgABu6eohwRG7wmIgHVvN378&dib_tag=se&keywords=mulan+4k&qid=1714533160&s=movies-tv&sprefix=mulan+4k%2Cmovies-tv%2C132&sr=1-7",
                youTube: "eTjHiQKJUDY?si=Nws-4F0Y-cjoRiDm",
            },
            {
                
                id: "7",
                movieIdentifier: 7,
                logo: "Untitled_Artwork 173",
                poster: "Untitled_Artwork 174",
                imageFromLeft: "Untitled_Artwork 177",
                imageFromRight: "Untitled_Artwork 176",
                amazonLink: "MULAN-Blu-ray-Ming-Na-Wen/dp/B01N0O94V4/ref=asc_df_B01N0O94V4/?tag=hyprod-20&linkCode=df0&hvadid=312191060363&hvpos=&hvnetw=g&hvrand=17533453218546530152&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9029499&hvtargid=pla-420609057090&psc=1&mcid=8161ac5a7f66396ba56edc6e316d6ccb&gclid=EAIaIQobChMI5PXGyr3rhQMVW2FIAB3A0gLUEAQYASABEgJopPD_BwE",
                amazonLink2: "Mulan-UHD-Blu-ray-Ming-Na-Wen/dp/B08ZDQVN2B/ref=sr_1_7?crid=3R02H4CHKJ2IN&dib=eyJ2IjoiMSJ9.xF_h0u5ElkwVmqEb5WPW9sJP17pJgk2351RikCGzIHwZwK1VULKGxpmrU7Chmc9-XpaHERMKf0onKeVGwFfpIwyebXnxhN5Z3HFQoySJ9vAGWFLRFGyRyrkeH-PLrKtpV2gl7CyWta2eAGWfJvLWBpd_TJWAJ7wxK0Tri-8wiiPZBWegR-_FJF_HzELhwreatjvZdqlh5QS28pMheShdufbAZw9OIefyopLV1plDk9o.NxnxyqQNjLrI5jSX1IXcgABu6eohwRG7wmIgHVvN378&dib_tag=se&keywords=mulan+4k&qid=1714533160&s=movies-tv&sprefix=mulan+4k%2Cmovies-tv%2C132&sr=1-7",
                youTube: "vlblxDGoGwo?si=bXWIm-DekMF_NAgl",
            }
        ],
        activeSlide: [{id: 0}],
        images1: [{id: 0, text: 'Explore The World', background: 'Untitled_Artwork 111'}, {id: 1, text: 'Wild Forest', background: 'Untitled_Artwork 111'}, { id: 2, text: 'Crazy Riandown', background: 'Untitled_Artwork 111'}, { id: 3, text: 'pooooop', background: 'Untitled_Artwork 111' },{id: 4, text: 'little mermaid', background: 'Untitled_Artwork 111'}],
        
        images2: [{id: 0, text: 'Explore The World', background: 'Untitled_Artwork 135'}, {id: 1, text: 'Wild Forest', background: 'Untitled_Artwork 135'}, { id: 2, text: 'Crazy Riandown', background: 'Untitled_Artwork 135'}, { id: 3, text: 'pooooop', background: 'Untitled_Artwork 111' },{id: 4, text: 'little mermaid', background: 'Untitled_Artwork 111'}],
        images3: [{id: 0, text: 'Explore The World', background: 'Untitled_Artwork 144'}, {id: 1, text: 'Wild Forest', background: 'Untitled_Artwork 144'}, { id: 2, text: 'Crazy Riandown', background: 'Untitled_Artwork 111'}, { id: 3, text: 'pooooop', background: 'Untitled_Artwork 111' },{id: 4, text: 'little mermaid', background: 'Untitled_Artwork 111'}],
        images4: [{id: 0, text: 'Explore The World', background: 'Untitled_Artwork 144'}, {id: 1, text: 'Wild Forest', background: 'Untitled_Artwork 144'}, { id: 2, text: 'Crazy Riandown', background: 'Untitled_Artwork 111'}, { id: 3, text: 'pooooop', background: 'Untitled_Artwork 111' },{id: 4, text: 'little mermaid', background: 'Untitled_Artwork 111'}],
        images5: [{id: 0, text: 'Explore The World', background: 'Untitled_Artwork 144'}, {id: 1, text: 'Wild Forest', background: 'Untitled_Artwork 144'}, { id: 2, text: 'Crazy Riandown', background: 'Untitled_Artwork 111'}, { id: 3, text: 'pooooop', background: 'Untitled_Artwork 111' },{id: 4, text: 'little mermaid', background: 'Untitled_Artwork 111'}],
        images6: [{id: 0, text: 'Explore The World', background: 'Untitled_Artwork 144'}, {id: 1, text: 'Wild Forest', background: 'Untitled_Artwork 144'}, { id: 2, text: 'Crazy Riandown', background: 'Untitled_Artwork 111'}, { id: 3, text: 'pooooop', background: 'Untitled_Artwork 111' },{id: 4, text: 'little mermaid', background: 'Untitled_Artwork 111'}],
        images7: [{id: 0, text: 'Explore The World', background: 'Untitled_Artwork 144'}, {id: 1, text: 'Wild Forest', background: 'Untitled_Artwork 144'}, { id: 2, text: 'Crazy Riandown', background: 'Untitled_Artwork 111'}, { id: 3, text: 'pooooop', background: 'Untitled_Artwork 111' },{id: 4, text: 'little mermaid', background: 'Untitled_Artwork 111'}],
       
        
        mobileImages1: [{id: 0, text: 'Explore The World', background: 'Untitled_Artwork 111'}, {id: 1, text: 'Wild Forest', background: 'Untitled_Artwork 111'}, { id: 2, text: 'Crazy Riandown', background: 'Untitled_Artwork 111'}, { id: 3, text: 'pooooop', background: 'Untitled_Artwork 111' }],
        mobileImages2: [{id: 0, text: 'Explore The World', background: 'Untitled_Artwork 135'}, {id: 1, text: 'Wild Forest', background: 'Untitled_Artwork 135'}, { id: 2, text: 'Crazy Riandown', background: 'Untitled_Artwork 135'}, { id: 3, text: 'pooooop', background: 'Untitled_Artwork 111' }],
        mobileImages3: [{id: 0, text: 'Explore The World', background: 'Untitled_Artwork 144'}, {id: 1, text: 'Wild Forest', background: 'Untitled_Artwork 144'}, { id: 2, text: 'Crazy Riandown', background: 'Untitled_Artwork 111'}, { id: 3, text: 'pooooop', background: 'Untitled_Artwork 111' }],
        mobileImages4: [{id: 0, text: 'Explore The World', background: 'Untitled_Artwork 144'}, {id: 1, text: 'Wild Forest', background: 'Untitled_Artwork 144'}, { id: 2, text: 'Crazy Riandown', background: 'Untitled_Artwork 111'}, { id: 3, text: 'pooooop', background: 'Untitled_Artwork 111' }],
    };
},
methods: {
    checkScreen(){
        this.windowWidth = window.innerWidth;
        if(this.windowWidth <= 670){
            this.mobile = true;
            return;
        } 
            this.mobile = false;

    },
    addActiveClass(parameter){
        this.images1.forEach((image) => {
            if(image.id === parameter){
                this.activeSlide.pop();
                this.activeSlide.push(image);
                console.log(this.activeSlide);
            };
        });
    },
    scroll(){
        window.addEventListener('scroll', this.runTheBoxes);
    },
    runTheBoxes(){
        this.checkBoxes();
        this.checkBoxes2();
    },
    checkBoxes(){
      const img1 = document.querySelector(".img1-container");
      const boxTop = img1.getBoundingClientRect().top;
      if(boxTop < this.triggerBottom){
        img1.classList.add("active");
        return;
      }
      img1.classList.remove("active");
    },
    checkBoxes2(){
      const img2 = document.querySelector(".img2-container");
      const boxTop2 = img2.getBoundingClientRect().top;
      if(boxTop2 < this.triggerBottom){
        img2.classList.add("active");
        return;
      }
      img2.classList.remove("active");
    },
},
computed: {

    activeImages(){
        if( this.$route.params.id === "1"){
            return this.images1
        };
        if (this.$route.params.id === "2"){
            return this.images2
        };
        if (this.$route.params.id === "3"){
            return this.images3
        };
        if (this.$route.params.id === "4"){
            return this.images4
        };
        if (this.$route.params.id === "5"){
            return this.images5
        };
        if (this.$route.params.id === "6"){
            return this.images6
        };
        if (this.$route.params.id === "7"){
            return this.images7
        };
    },
    mobileActiveImages(){
        if (this.$route.params.id === "1"){
            return this.mobileImages1
        };
        if (this.$route.params.id === "2"){
            return this.mobileImages2
        };
        if (this.$route.params.id === "3"){
            return this.mobileImages3
        };
        if (this.$route.params.id === "4"){
            return this.mobileImages4
        };

    },
    activeMovie(){
        return this.movies.filter((movie) => movie.id === this.$route.params.id);
    },
},
created(){
    window.addEventListener('resize', this.checkScreen);
   this.checkScreen();
this.scroll();
},
};
</script>

<style scoped>



.gallery-container {
    display: flex;
    width: 90vw;
    margin: 0 auto;
    max-width: 1500px;
}

.panel {
    height: 80vh;
    border-radius: 50px;
    cursor: pointer;
    flex: 0.5;
    margin: 10px;
    position: relative;
    transition: flex 0.7s ease-in;
    color: white;


}
.gallery {
    background: black;
    padding: 60px 0;
    color:white;
}


.panel h3 {
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    opacity: 0;
}





.panel.active {
    flex: 5;
}
.panel.active h3 {
    opacity: 1;
    transition: opacity 0.3s ease-in 0.4s;
}






.pimg1 {
    background: url('/src/assets/images/Untitled_Artwork 111.png') no-repeat;
    opacity: 0.70;
    background-size: cover;
    background-attachment: fixed;
    min-height: 400px;
    position: relative;
}

.pimg1 .text {
    font-size: 3rem;
    letter-spacing: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}
.pimg2 {
    background: url('/src/assets/images/Untitled_Artwork 133.png') no-repeat;
    opacity: 0.70;
    background-size: cover;
    background-attachment: fixed;
    min-height: 400px;
    position: relative;
}

.pimg2 .text {
    font-size: 3rem;
    letter-spacing: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}
.pimg3 {
    background: url('/src/assets/images/Untitled_Artwork 143.png') no-repeat;
    opacity: 0.70;
    background-size: cover;
    background-attachment: fixed;
    min-height: 400px;
    position: relative;
}

.pimg3 .text {
    font-size: 3rem;
    letter-spacing: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}
.pimg4 {
    background: url('/src/assets/images/Untitled_Artwork 149.png') no-repeat;
    opacity: 0.70;
    background-size: cover;
    background-attachment: fixed;
    min-height: 400px;
    position: relative;
}

.pimg4 .text {
    font-size: 3rem;
    letter-spacing: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}
.pimg5 {
    background: url('/src/assets/images/Untitled_Artwork 157.png') no-repeat;
    opacity: 0.70;
    background-size: cover;
    background-attachment: fixed;
    min-height: 400px;
    position: relative;
}

.pimg5 .text {
    font-size: 3rem;
    letter-spacing: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}
.pimg6 {
    background: url('/src/assets/images/Untitled_Artwork 169.png') no-repeat;
    opacity: 0.70;
    background-size: cover;
    background-attachment: fixed;
    min-height: 400px;
    position: relative;
}

.pimg6 .text {
    font-size: 3rem;
    letter-spacing: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}
.pimg7 {
    background: url('/src/assets/images/Untitled_Artwork 179.png') no-repeat;
    opacity: 0.70;
    background-size: cover;
    background-attachment: fixed;
    min-height: 400px;
    position: relative;
}

.pimg7 .text {
    font-size: 3rem;
    letter-spacing: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}






.container {
    perspective: 500px;
    width: 280px;
    height: 320px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.card {
    height: 100%;
    width: 100%;
    position: relative;
    transition: transform 0.5s;
    transform-style: preserve-3d;
    margin-bottom: 20px;
}


   

.container:hover > .card {
    cursor: pointer;
    transform: rotateY(180deg);
}







.front1 {
    background: url('/src/assets/images/Untitled_Artwork 105.png') no-repeat;
    background-size: cover;
}

.front2 {
    background: url('/src/assets/images/Untitled_Artwork 106.png') no-repeat;
    background-size: cover;
}



.front3 {
    background: url('/src/assets/images/Untitled_Artwork 128.png') no-repeat;
    background-size: cover;
}

.front4 {
    background: url('/src/assets/images/Untitled_Artwork 129.png') no-repeat;
    background-size: cover;
}
.front5 {
    background: url('/src/assets/images/Untitled_Artwork 141.png') no-repeat;
    background-size: cover;
}

.front6 {
    background: url('/src/assets/images/Untitled_Artwork 142.png') no-repeat;
    background-size: cover;
}
.front7 {
    background: url('/src/assets/images/Untitled_Artwork 153.png') no-repeat;
    background-size: cover;
}

.front8 {
    background: url('/src/assets/images/Untitled_Artwork 152.png') no-repeat;
    background-size: cover;
}
.front9 {
    background: url('/src/assets/images/Untitled_Artwork 162.png') no-repeat;
    background-size: cover;
}

.front10 {
    background: url('/src/assets/images/Untitled_Artwork 161.png') no-repeat;
    background-size: cover;
}
.front11 {
    background: url('/src/assets/images/Untitled_Artwork 163.png') no-repeat;
    background-size: cover;
}

.front12 {
    background: url('/src/assets/images/Untitled_Artwork 165.png') no-repeat;
    background-size: cover;
}
.front13 {
    background: url('/src/assets/images/Untitled_Artwork 180.png') no-repeat;
    background-size: cover;
}

.front14 {
    background: url('/src/assets/images/Untitled_Artwork 181.png') no-repeat;
    background-size: cover;
}





.front1,
.back {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(50,50,50, 0.25);
    position: absolute;
    backface-visibility: hidden;
}
.front2,
.back2 {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(19, 19, 19, 0.25);
    position: absolute;
    backface-visibility: hidden;
}

.front3,
.back {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(50,50,50, 0.25);
    position: absolute;
    backface-visibility: hidden;
}
.front4,
.back2 {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(19, 19, 19, 0.25);
    position: absolute;
    backface-visibility: hidden;
}
.front5,
.back {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(50,50,50, 0.25);
    position: absolute;
    backface-visibility: hidden;
}
.front6,
.back2 {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(19, 19, 19, 0.25);
    position: absolute;
    backface-visibility: hidden;
}
.front7,
.back {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(50,50,50, 0.25);
    position: absolute;
    backface-visibility: hidden;
}
.front8,
.back2 {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(19, 19, 19, 0.25);
    position: absolute;
    backface-visibility: hidden;
}
.front9,
.back {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(50,50,50, 0.25);
    position: absolute;
    backface-visibility: hidden;
}
.front10,
.back2 {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(19, 19, 19, 0.25);
    position: absolute;
    backface-visibility: hidden;
}

.front11,
.back {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(50,50,50, 0.25);
    position: absolute;
    backface-visibility: hidden;
}
.front12,
.back2 {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(19, 19, 19, 0.25);
    position: absolute;
    backface-visibility: hidden;
}
.front13,
.back {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(50,50,50, 0.25);
    position: absolute;
    backface-visibility: hidden;
}
.front14,
.back2 {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(19, 19, 19, 0.25);
    position: absolute;
    backface-visibility: hidden;
}
































.back {
    background: linear-gradient(
        318.68deg,
        #0068b3 0%,
        #0095ff4c 49.72%,
        #bee4ff
    );
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
}




.back2 {
    background: linear-gradient(
        318.68deg,
        #000000 0%,
        rgba(83, 57, 1, 0.286) 9.72%,
        #df9700
    );
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
}























.container2 {
    perspective: 500px;
    width: 280px;
    height: 320px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.card2 {
    height: 100%;
    width: 100%;
    position: relative;
    transition: transform 0.5s;
    transform-style: preserve-3d;
    margin-bottom: 20px;
}


   

.container2:hover > .card2 {
    cursor: pointer;
    transform: rotateY(180deg);
}


.blue-ray-logo {
    width: 150x;
    height: 150px;
}

.back a {
    text-decoration: none;
    color: white;
    letter-spacing: 2px;
   
}
.back2 a {
    text-decoration: none;
    color: white;
    letter-spacing: 2px;
   
}
.blue-ray-logo img {
    width: 100%;
    height: 100%;
}
.fourk-logo {
    width: 100x;
    height: 100px;
    margin: 20px 0;
}
.fourk-logo img {
    width: 100%;
    height: 100%;
}

.own-it-today {
    position: relative;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
}

.img1-container {
    position: absolute;
    transform: translateX(-200%);
    left: 0;
    width:460px;
    height: 500px;
    transition: transform 0.4s ease;
    }

.img1-container.active {
    transform: translateX(0);
}
    
    .img1-container img {
        width: 100%;
        height: 100%;
    }



    .img2-container {
    position: absolute;
    transform: translatex(200%);
    right: 0;
    width:520px;
    height: 550px;
    transition: transform 0.4s ease;
    }

    .img2-container.active {
        transform: translateX(0);
    }
    
    .img2-container img {
        width: 100%;
        height: 100%;
    }



.own-it-today h1 {
    font-size: 3rem;
    border-bottom: 4px solid #ff004f;
    padding-bottom: 20px;
    margin-bottom: 20px;
}
.own-it-today h2 {
    
    max-width: 150px;
    text-align: center;
    font-size: 1.4rem;
    border-bottom: 2px solid #ff004f;
}

.blu-ray-and-4k {
    display: flex;
    gap: 50px;


}
.first-img-container,
.second-img-container {
    position: relative;
    overflow: hidden;
    width: 250px;
    height: 300px;
}

.blu-ray-and-4k img {
    width: 100%;
    height: 100%;
}

.movie-about-info,.cast,.directed-by {
    color: white;
}

.movie-about-info h2 {
    font-size: 2.5rem;
    margin: 20px 0;
    text-align: center;
}
.movie-about-info h1 {
    font-size: 2rem;
    font-weight: 550;
    margin: 20px 0;
    text-align: center;
}

.directed-by {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    align-items: center;
    justify-content: center;
}
.crew {
    color: white;
    font-size: 1.5rem;
    display: flex;
    gap: 5px;
    margin: 10px 0;
}
.crew div {
    color: #ff004f;
    font-weight: 730;
}


.movie-description {
  padding-bottom: 50px;
}

.movie-description div {
    color: white;
    margin: 20px 0;
}


.movie-logo-container {
    width: 600px;
    height: 410px;

}

.movie-logo-container img {
    width: 100%;
    height: 100%;
}

/* main containers */

.movie-page-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 30px;
    background: red;
    
    
 

}

.hero-content {
    padding-top: 200px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom:100px;
   
}

.movie-info {
   background: orange;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
}
.movie-poster {
    width: 2000px;
    height: 1000px;
    border-radius: 800px;
  
}

.movie-poster img {
    width: 100%;
    height: 100%;
    border-radius: 800px;
    box-shadow: 10x 20px 3px black;
}


.movie-page-background {
    background: black;
    
    
}

.moviePagHeroBackground1 {
    background: url('/src/assets/images/Untitled_Artwork 92.png') no-repeat;

   
    
}
.moviePagHeroBackground2 {
    background: url('/src/assets/images/Untitled_Artwork 113.png') no-repeat;
  
}
.moviePagHeroBackground3 {
    background: url('/src/assets/images/Untitled_Artwork 137.png') no-repeat;

}
.moviePagHeroBackground4 {
    background: url('/src/assets/images/Untitled_Artwork 148.png') no-repeat;
    
}
.moviePagHeroBackground5 {
    background: url('/src/assets/images/Untitled_Artwork 155.png') no-repeat;
    
}
.moviePagHeroBackground6 {
    background: url('/src/assets/images/Untitled_Artwork 167.png') no-repeat;
   
}
.moviePagHeroBackground7 {
    background: url('/src/assets/images/Untitled_Artwork 178.png') no-repeat;
 
}


/* .trailer::before {
    content: '';
    position: absolute;
    height: 100px;
    background: #ff004f;
    right: 0;
    left:0;
    top: 1800px;
    width: 100%;
    transform: skewY(-2deg);
} */

.trailer {
    background:linear-gradient(#ff004f, rgb(0, 0, 0) );
    margin-top: 200px;
    padding-bottom: 200px;
}

.trailer-container {
    padding-top: 70px;
    margin: 0 auto;
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.trailer-container h1 {
    font-size: 4rem;
    margin-bottom: 20px;
}
.trailer-container p {
    color: white;
    font-size: 1.2rem;
}
.movie {
    border-radius: 20px;
    margin: 50px 0;
}
div {
    color: black;
}

.cast-names {
    display:flex;
}
.cast-names span {
    font-weight: 700;
}
.cast-names .name-container {
color: white;
gap: 10px;
display: flex;
flex-direction: column;

}



/* @media(max-width: 1068px){
   .movie-logo-container{
    width: 500px;
    height: 300px;
   }
    .movie-info {
        background: yellow;
   width:500px;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        gap: 0;
    }
    .movie-poster {
        height: 1000px;
    }
}  */

@media(max-width: 670px){
    .mobile-container {
        max-width: 670px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .movie-page-background {
        height: 100%;
        background: black;
    }
   

    /* Background hero pics for mobile */ 


    .moviePagHeroBackground1 {
        background: url('/src/assets/images/Untitled_Artwork 92.png') no-repeat;
        
        background-position: center cover;
        width:1000px;
        height: 100%;
        
    }
    .moviePagHeroBackground2 {
        background: url('/src/assets/images/Untitled_Artwork 113.png') no-repeat;
        
        background-position: center cover;
        width:1000px;
        height: 100%;
        
    }
    .moviePagHeroBackground3 {
        background: url('/src/assets/images/Untitled_Artwork 137.png') no-repeat;
        
        background-position: center cover;
        width:1000px;
        height: 100%;
        
    }
    .moviePagHeroBackground4 {
        background: url('/src/assets/images/Untitled_Artwork 148.png') no-repeat;
        
        background-position: center cover;
        width:1000px;
        height: 100%;
        
    }





   .trailer {
    padding-bottom: 65px;
   }

    .movie-about-info {
 
        padding: 20px 200px;
    }
   

    .movie-poster {
        width: 550px;
        height: 700px;
    }
    .movie-info {
       padding-top: 200px;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       text-align: center;
       gap: 30px;
    }
    .cast h1 {
        border-top: 4px solid #ff004f;
        margin-top: 0;
        padding-top: 30px;
    }

 
  

    .blu-ray-and-4k {
        display: flex;
        flex-direction: column;
    }
    .blu-ray-and-4k .container {
        margin-left:300px;
        width: 200px;
        height: 250px;
        margin-bottom: 100px;
        margin-top: 25px;
    }
    .blue-ray-logo {
        width: 120px;
        height: 100px;
    }
    .blu-ray-and-4k .container2 {
        width: 200px;
        height: 250px;
    }
    .img1-container {
        top: 100px;
        transform: translateX(-100%);
        width: 320px;
        height: 320px;
        
    }
    .img1-container.active {

       transform: translateX(200px)
    }
    .img2-container {
        top: 450px;
        transform: translateX(100%);
        width: 450px;
        height: 450px;
    }
    .img2-container.active {

        transform: translateX(-180px)
     }
     .trailer {
        background:linear-gradient(#ff004f, rgb(0, 0, 0) );
        margin-top: 0;
        padding-bottom: 200px;
    }
     .trailer-container {
        padding: 35px 150px;
        text-align: center;
        
     }
     .trailer-container h1 {
        font-size: 2.5rem;
     }
     .movie{
        max-width: 500px;
        max-height: 500px;
     }
     .panel.active {
        flex: 8;
    }



    /* Banner images for mobile */
    .pimg1 {
        background-size: 230%;
         
        background-position: center;
       
    }
    .pimg2 {
        background-size: 230%;
         
        background-position: center;
       
    }
    .pimg3 {
        background-size: 230%;
         
        background-position: center;
       
    }
    .pimg4 {
        background-size: 230%;
         
        background-position: center;
       
    }











    .own-today-section {
        
        position: relative;
        
        padding:30px 0 210px 0;
    }
    .mobile-own-it-today-bg-container {
        position: absolute;
        top: 0;
        left:0;
    
        width:100%;
        height: 100%;
    }
   /* Buy it today bg imaged for mobile */ 
    .mobileOwnItTodayBg2 {
        background: url("/src/assets/images/Untitled_Artwork 208.png") no-repeat;
        height: 100%;
        width: 100%;
        background-position: center;
        background-size: cover;
    }
    .mobileOwnItTodayBg {
        background: url("/src/assets/images/Untitled_Artwork 206.png") no-repeat;
        height: 100%;
        width: 100%;
        background-position: center;
        background-size: cover;
    }
    .mobileOwnItTodayBg3 {
        background: url("/src/assets/images/Untitled_Artwork 210.png") no-repeat;
        height: 100%;
        width: 100%;
        background-position: center;
        background-size: cover;
    }
    .mobileOwnItTodayBg4 {
        background: url("/src/assets/images/Untitled_Artwork 212.png") no-repeat;
        height: 100%;
        width: 100%;
        background-position: center;
        background-size: cover;
    }
    
}
</style>