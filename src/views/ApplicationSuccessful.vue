<template>
 
  <div class="background">
    <div class="text">
      <h1>APPLICATION SENT!</h1>
      <p>Thank you for applying. Our recrumeitn team will reach out to you
        
      </p>
      <p>if we find that you are qa good fit for the position.</p>
     
      <div class="buttons">

        <div class="buttonthing">

          <router-link  :to="{ name: 'Home'}">Back to home page <i class="fas fa-long-arrow-right"></i> </router-link>
        </div>
        
      <div class="buttonthing">
        <router-link :to="{ name: 'JobResults' }">Continue browisng jobs <i class="fas fa-long-arrow-right"></i> </router-link>
  
      </div>
      </div>
      


     
    </div>
    <div class="mobile-background"></div>
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
  
  


}
.text {
  position: absolute;
  font-size: 1.3rem;
  right: 500px;
  top: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


}

.text .buttonthing {
  font-size: 1rem;
}

.buttons {
  margin-top: 10px;
  display: flex;
  gap: 25px;
}
.text h1 {
  margin: 30px 0;
}




.buttonthing {
  margin: 15px 0;
  background: black;
  padding: 20px 25px;
  border-radius: 50px;
  text-align: center;
  border: #ff004f 1px solid;
}

.buttonthing a {
  text-decoration: none;
  color: white;
}

.buttonthing i {
  margin-left: 8px;
  width: 0;
  overflow: hidden;
  transition: 0.5s;
}

.buttonthing:hover i {
  width: 20px;
}


@media(max-width: 670px){
  .background {
    background: url("/src/assets/images/Untitled_Artwork\ 204.png") no-repeat;
    background-size: contain;
    background-position: center;
    position: static;

  
    
    
  
  
  }
.text {
  position:static;
  display:flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
 

}
.mobile-background {
  background: url("/src/assets/images/Untitled_Artwork\ 102.png") no-repeat;
  background-size: cover;
}
}
</style>