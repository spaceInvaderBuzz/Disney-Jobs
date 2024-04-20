<template>
  <div class="black-screen" v-if="modalPropThing">poop</div>
</template>

<script>
export default {
name: "ChangesSavedModal",
props: ["theModalProp"],  //theSuccessModal


computed: {
    modalPropThing(){
        return this.theModalProp === true ? true : null;
    },
},
};
</script>

<style>
.black-screen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
}
</style>