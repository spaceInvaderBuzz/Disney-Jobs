<template>
    <div class="slide">
        <transition :name="transitionEffect">
            <slot>poooooop</slot>
        </transition>
    </div>
</template>

<script>
export default {
    props: ["direction"],   //right
    computed: {
        transitionEffect(){
            return this.direction === 'left' ? 'slide-out' : 'slide-in'; 
        }
    }
}
</script>

<style>
.slide-in-enter-active,
.slide-in-leave-active {
    transition: all .4s ease-in-out;
}

.slide-in-enter-from {
    transform: translateX(-100%);
}
.slide-in-leave-to {
    transform: translateX(100%);
} 



.slide-out-enter-active,
.slide-out-leave-active {
    transition: all .4s ease-in-out;
}

.slide-out-enter-from {
    transform: translateX(100%);
}
.slide-out-leave-to {
    transform: translateX(-100%);
} 
</style>