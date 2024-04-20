

<template>
    <div class="container">
        <div class="form-text">
            <h1> Contact Us</h1>
            <p>we would love to hear your bullshit And pretend that we care!</p>
        </div>
    </div>
    
    <section class="contact-form">
        <div class="container">
                <form>
                    <div class="input-container">
                        <input type="text" class="input">
                        <label for="">Username</label>
                        <span>Username</span>
                    </div>
                    <div class="input-container">
                        <input type="email" class="input">
                        <label for="">Email</label>
                        <span>Email</span>
                    </div>
                    <div class="input-container">
                        <input type="tel" class="input">
                        <label for="">Phone</label>
                        <span>Phone</span>
                    </div>
                    <div class="input-container">
                       <textarea name="message" class="input"></textarea>
                        <label for="">Message</label>
                        <span>Message</span>
                    </div>
                    <input type="submit" value="send" class="btn">
                </form>
                <div class="image">
                    <img src="/src/assets/images/Untitled_Artwork 20.png" alt="">
                </div>

                   
            
        </div>
    </section>
  
</template>

<script>


export default {
name: "ContactFormVue",
mounted(){
    const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if (this.value === "") {
        parent.classList.remove("focus");
    }
    
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});
}
}
</script>

<style scoped>

form {
    
    padding: 2.3rem 2.2rem;
    z-index: 10;
    position: relative;
    overflow: hidden;
}

.input-container span {
    position: absolute;
    top: 0;
    left: 25px;
    transform: translateY(-50%);
    font-size: 0.8rem;
    padding: 0 0.4rem;
    
    pointer-events: none;
    z-index: 500;
  
    

}

.input-container {
   
    position: relative;
    margin: 1rem 0;


}

.input-container span:before,
.input-container span:after {
    content: '';
    position: absolute;
    width: 10%;
    opacity: 0;
    transition: 0.3s;
    height: 5px;
    
    top: 50%;
    transform: translateY(-50%);


}


.input-container span:before{
    left: 50%;
}

.input-container span:after {
    right: 50%;;
}

.input-container.focus label {
    top: 0;
    transform: translateY(-50%);
    left: 25px;
    font-size: 0.8rem;
}

.input-container.focus span:before,
.input-container.focus span:after {
    width: 50%;
    opacity: 1;
}


.input {
    width: 100%;
    outline: none;
    border: 2px solid white;
    background: none;
    padding: 0.6rem 1.2rem;
    font-weight: 500;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
    border-radius:25px;
    transition: 0.3s;
}

textarea.input{
    padding: 0.8rem 1.2rem;
    min-height: 150px;
    border-radius: 22px;
    overflow-y: auto;
}

.btn {
    padding: 0.6rem 1.3rem;
    border: 2px solid;
    font-size: 0.95rem;
    line-height: 1;
    border-radius: 25px;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
}

.btn:hover {
    background-color: transparent ;
}

.input-container label {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    padding: 0 0.4rem;
    color: white;
    font-size: 0.9rem;
    font-weight: 400;
    pointer-events: none;
    z-index: 1000;
    transition: 0.5s;

}

.input-container label {
    top: 1rem;
    transform: translateY(0);
    
}


.contact-form .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
    align-items: center;

}

.image {

    width: 400px;
    height: 400px;

}

img {
    width: 100%;
}

.form-text {
    margin: 40px 0;
}
</style>