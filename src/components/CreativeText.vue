<template>
  <div class="container">
    <p class="text">Now Playing</p>
  </div>
</template>

<script>
export default {
name: "CreativeTextVue",
};
</script>

<style scoped>


.container {
    margin-bottom: 40px ;
}

.text {
    margin-bottom: 10px;
    font-size: 1.5em;
    letter-spacing: 10px;
    border-right: 2px solid;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation: 
    typing 2s steps(11),
    cursor .4s step-end infinite alternate;
    color: white;
}

@keyframes cursor {
    50% {
        border-color: transparent;
    }
}

@keyframes typing {
    from { width: 0 }
}
</style>