<template>
  

<div class="real-bg">

    <div class="test-bg">
        <div class="test-class">
            <div class="testing">
                <h1>POOP</h1>
                <h1>BIKINI</h1>
            </div>
            <h1>POOPSSS</h1>

        </div>
        <div class="container2">
            <h1>COOOOOOL</h1>
            <h1>COOOOOOL</h1>
            <h1>COOOOOOL</h1>
        </div>
    </div>
</div>
    
</template>

<script>
export default {

}
</script>

<style scoped>
.test-bg {
    max-width: 900px;
    margin: 0 auto;
}

/* .test-class {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: red;
} */ 

.test-class {
    background: red;
    display: grid;
    grid-template-columns: repeat(2,1fr);

}

.testing {
    display: flex;
    border-left: 5px solid green;
}
h1 {
border-right: 3px solid green;
}
.real-bg {
    background: black;
    height: 100%;
}
.container2{
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    background: pink;


}
</style>