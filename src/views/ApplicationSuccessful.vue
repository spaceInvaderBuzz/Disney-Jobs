<template>
 
  <div class="background">
    <div class="text">
      <h1>APPLICATION SENT!</h1>
      <p>Thank you for applying. Our recrumeitn team will reach out to you
        
      </p>
      <p>if we find that you are qa good fit for the position.</p>
      <router-link :to="{ name: 'Home'}">Back to home page</router-link>
      <router-link :to="{ name: 'JobResults' }">Continue browisng jobs</router-link>
    </div>
  </div>
</template>

<script>
export default {
name: "Success"
}
</script>

<style scoped>
.background {
  background: url("/src/assets/images/Untitled_Artwork\ 102.png") no-repeat;
  background-size: contain;
  position: fixed;
  left: 150px;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  


}
.text {
  position: absolute;
  font-size: 1.3rem;
  right: 500px;
  top: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


}
</style>