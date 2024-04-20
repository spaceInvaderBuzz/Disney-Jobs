<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide"></slot>
    <div class="navigate">
        <div class="toggle-page left">
            <i @click="prevSlide" direction="right" class="fas fa-chevron-left"></i>
        </div>
        <div class="toggle-page right">
            <i @click="nextSlide" direction="left" class="fas fa-chevron-right"></i>
        </div>
    </div>
  </div>
</template>

<script>

import { ref, onMounted, defineEmits } from 'vue';
export default {
    emits: ["nextSlideClicked","prevSlideClicked"],

setup(props,context){
    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    const direction = ref(null);


   // const nextSlideClicked = () => {
   //     context.emit(nextSlideClicked);
   // };
   
    //const prevSlideClicked = () => {
    //    context.emit(prevSlideClicked);
    //};
   

    const nextSlide = () => {
        if (currentSlide.value === getSlideCount.value) {    //
            currentSlide.value = 1;
            return;
        } currentSlide.value = currentSlide.value + 1;
        direction.value = 'right';
        context.emit("nextSlideClicked");
    };

    const prevSlide = () => {
        if (currentSlide.value === 1) {
            currentSlide.value = 1;
            return;
        } currentSlide.value = currentSlide.value - 1;
        direction.value = 'left';
        context.emit("prevSlideClicked");
    };

    onMounted(() => {
        getSlideCount.value = document.querySelectorAll('.slide').length;
    });

    return { currentSlide, nextSlide, prevSlide };
},




};
</script>

<style scoped>

.navigate {
    color: black;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    left: 70px;
    bottom: 40px;
    height: 80px;
    width: 80px;
}

.navigate .toggle-page {
    width: 100%;
}

.navigate .toggle-page i {
    font-size: 50px;
    cursor: pointer;
    opacity: .8;
    
}
</style>