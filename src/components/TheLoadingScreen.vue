<template>
    <div class="loading">
        <div class="loading-img-container">
           <div class="loading-img">
            <div class="spinner"></div>
           </div>
          
        </div>
        <h1>L o a d i n g ...</h1>
    </div>
</template>

<script>
export default {
name: "TheLoadingScreen",
}
</script>

<style scoped>

.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.831);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    
}

.loading h1 {
    position: absolute;
    bottom: 30%;
}

.loading-img-container {
    width: 500px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.spinner {
    content: "";
    position: absolute;
    width: 250px;
    height: 250px;
    top: 0;
    left:0;
    border: 8px solid transparent;
    border-radius: 50%;
    border-top-color: #ff004f;
    animation: button-loading-spinner 1s ease infinite;
    

}

@keyframes button-loading-spinner {
    from {
        transform: rotate(0turn);
    }
    to {
        transform: rotate(1turn);
    }
}

.loading-img {
    position: relative;
    background: url("/src/assets/images/200w.gif") no-repeat;
    background-size: cover;
    width: 50%;
    height: 50%;
    border-radius: 500px;
}


</style>