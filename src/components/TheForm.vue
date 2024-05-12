

<template>
    <form>
        <h1>Send Message</h1>
        <div class="input-container">
            <input type="text" class="input" placeholder=" ">
            <label for=""><div class="label-word" v-for="(letter,index) in name" :key="index" :style="{ TransitionDelay: `${index * 50 }ms` }">{{ letter }}</div></label>
            
        </div>
        <div class="input-container">
            <input type="text" class="input" placeholder=" ">
            <label for=""><div class="label-word" v-for="(letter,index) in email" :key="index" :style="{ TransitionDelay: `${index * 50 }ms` }">{{ letter }}</div></label>
            
        </div>
        <div class="input-container">
            <input type="text" class="input" placeholder=" ">
            <label for=""><div class="label-word" v-for="(letter,index) in phone" :key="index" :style="{ TransitionDelay: `${index * 50 }ms` }">{{ letter }}</div></label>
            
        </div>
      
        <div class="input-container">
           <textarea name="message" class="input" placeholder=" "></textarea>
           <label for="">
            
                <div v-for="(letter,index) in message" :key="index" :style="{ TransitionDelay: `${index * 50 }ms` }">{{ letter }}</div>
           
           
        </label>
           
        </div>
        <input type="submit" value="SEND" class="btn">
    </form>
   
  
</template>

<script>


export default {
name: "TheForm",

data(){
    return {
        name: ["N","a","m","e"],
        email: ["E","m","a","i","l"],
        phone: ["P","h","o","n","e"],
        message: ["M","e","s","s","a","g","e"]
    };
},
methods: {

}
}
</script>

<style scoped>

form h1 {
    margin-top: 20px;
}


.background {
    background: url("/src/assets/images/Untitled_Artwork 98.png") no-repeat;
    background-position: center;
    background-size: cover;



}

form {
    font-size: 1rem;
    font-weight: 500;
    background: linear-gradient(135deg,rgba(255,255,255,0.1), rgba(255,255,255,0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 20px 45px;
    z-index: 2;
    position: relative;
 
    overflow: hidden;
    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.6);
}



.input-container {
   
    position: relative;
    margin: 2.5rem 0;


}





.input {
    padding-bottom: 10px;
    background: none;
    color: white;
    display: block;
    width: 100%;
    outline: none;
    border: 0;
    border-bottom: 2px solid white;
    
    font-size: 1rem;
    letter-spacing: 0.5px;
    transition: 0.3s;
}


.input-container label {
    pointer-events: none;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
}



.input-container input:focus,
.input-container input:not(:placeholder-shown) {
    outline: 0;
    border-bottom-color: #ff004f;
}



.input-container input:focus + label div,
.input-container input:not(:placeholder-shown) + label div {
    color: #ff004f;
    transform: translateY(-30px);
}


.input-container label div {
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}



.input-container textarea:focus,
.input-container textarea:not(:placeholder-shown) {
    outline: 0;
    border-bottom-color: #ff004f;
}



.input-container textarea:focus + label div,
.input-container textarea:not(:placeholder-shown) + label div {
    color: #ff004f;
    transform: translateY(-30px);
}


textarea.input{
  
    min-height: 120px;
    
    overflow-y: auto;
    resize: none;
}

.input-container .textarea-label {
    display: none;
    pointer-events: none;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
   
}


.btn {
    color: white;
    background: transparent;
    padding: 13px 25px;
    border: 2px solid #ff004f;
    font-size: 1rem;
    letter-spacing: 5px;
    font-weight: 700;
    line-height: 1;
    border-radius: 25px;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
    margin-bottom: 10px;
}

.btn:hover {
    background-color: #ff004f;
    border-color: white;
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