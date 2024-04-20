<template>
  
    <footer>
   
        <div>
            <h1>Loruki</h1>
            <p>Coyright &copy; 2020</p>
        </div>
        <nav>
            <ul class="not-main-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Films</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
        </nav>
        <div class="social">
            <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
            <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
            <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
            <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
        </div>
    
  </footer>
</template>

<script>
export default {
    name: 'TheFooterVue'

};
</script>

<style scoped>



.not-main-nav {
    display: flex;
    list-style: none;
}
.not-main-nav a {
    text-decoration: none;
}

footer {
    
    margin-top: auto;
    background: rebeccapurple;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 100px;
    
    
}

</style>