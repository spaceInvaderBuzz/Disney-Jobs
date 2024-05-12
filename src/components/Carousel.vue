<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <div v-if="navEnabled" class="navigate">
        <div class="toggle-page left">
            <i @click="prevSlide" class="fas fa-chevron-left"></i>
        </div>
        <div class="toggle-page right">
            <i @click="nextSlide" class="fas fa-chevron-right"></i>
        </div>
    </div>

    <div v-if="paginationEnabled" class="pagination">
        <span @click="goToSlide(index)" v-for="(slide, index) in getSlideCount" :key="index" :class="{active: index + 1 === currentSlide}">
            
            
        </span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
    props: ["startAutoPlay", "timeout", "navigation", "pagination"],
    setup(props){
        const currentSlide = ref(1); 
        const getSlideCount = ref(null);
        const autoPlayEnabled = ref(props.startAutoPlay === undefined ? true : props.startAutoPlay);
        const timeoutDuration = ref(props.timeout === undefined ? 7000 : props.timeout);
        const paginationEnabled = ref(props.pagination === undefined ? true : props.pagination );
        const navEnabled = ref(props.navigation === undefined ? true : props.navigation );


        const nextSlide = () => {
            if (currentSlide.value === getSlideCount.value) {
                currentSlide.value = 1;
                return;
            }
            currentSlide.value += 1;
        };

        const prevSlide = () => {
            if (currentSlide.value === 1){
                currentSlide.value = getSlideCount.value;
                return;
            }
            currentSlide.value -= 1;
        };

        const autoPlay = () => {
            setInterval(() => {
                nextSlide()
            }, timeoutDuration.value);
        };

        if (autoPlayEnabled.value){
            autoPlay();
        }



        const goToSlide = (parameter) => {
            currentSlide.value = parameter + 1
        }
        onMounted(() => {
            getSlideCount.value = document.querySelectorAll(".slide").length; 
        });

        return { currentSlide, nextSlide, prevSlide, getSlideCount, goToSlide, paginationEnabled, navEnabled };
    },
}
</script>

<style scoped>

.pagination {
    position: absolute;
    bottom: 24px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
}

span {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background: url('/src/assets/images/Untitled_Artwork 33.png') no-repeat;
    background-size: 25px;
    
}

.active {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background: url('/src/assets/images/Untitled_Artwork 34.png') no-repeat;
    background-size: 25px;
    
    
}
.navigate {
    
    padding: 0 16px;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

}

.toggle-page {
    cursor: pointer;
    display: flex;
    flex: 1;
}
.right {
    justify-content: flex-end;
}

i {
    font-size: 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    background: rgba(255, 255, 255, 0.603);

    

}


@media(max-width: 1068px){
    .pagination {
        position: absolute;
        gap: 40px;
        bottom: 24px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3;
        border-top: rgb(0, 0, 0) 15px solid;
    padding-top: 20px;
    background: black;
 
    }
    span {
        cursor: pointer;
        width: 35px;
        height: 40px;
        background: url('/src/assets/images/Untitled_Artwork 33.png') no-repeat;
        background-size: 40px;
        
    }
    
    .active {
        cursor: pointer;
        width: 35px;
        height: 40px;
        background: url('/src/assets/images/Untitled_Artwork 34.png') no-repeat;
        background-size: 40px;
        
        
    }
}

@media (max-width: 670px){
    span {
        cursor: pointer;
        width: 70px;
        height: 70px;
        background: url('/src/assets/images/Untitled_Artwork 33.png') no-repeat;
        background-size: 40px;
        
    }
    
    .active {
        cursor: pointer;
        width: 70px;
        height: 70px;
        background: url('/src/assets/images/Untitled_Artwork 34.png') no-repeat;
        background-size: 40px;
        
        
    }
    i {
        font-size: 20px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background: rgba(255, 255, 255, 0.603);
    
        
    
    }
    .pagination {
        position: absolute;
        bottom: 110px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 18px;
        z-index: 3;
    }
}


</style>