<template>
  <div>
    <div :class="active">
        <div class="accordion" @click="open" >
            <h3>{{ header }}</h3>
            <div :class="caretIcon"></div>
        </div>
    </div>
    
    <div class="accordion-parent" v-if="isOpen">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
name: "CollapsibleAccordion",
props: ['header'],
data(){
    return {
        isOpen: false,
    };
},
methods: {
    open(){
        this.isOpen = !this.isOpen;
    },
},
computed: {
    caretIcon() {
        return this.isOpen ? ["fa-solid", "fa-caret-down","rotate"] : ["fa-solid", "fa-caret-down", "unrotate"];
    },
    active(){
        return this.isOpen ? ["active"] : false; 
    }
}
};
</script>

<style scoped>

.fa-solid.fa-caret-down.rotate {
    
    width: 10px;
    height: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    transform: rotate(180deg);
    transition: 0.3s;

}
.fa-solid.fa-caret-down.unrotate {
    
    width: 10px;
    height: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    display: flex;
    transform: rotate(0deg);
    transition: 0.3s;

}


.accordion-parent {
    position: relative;
    
}
.accordion {
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;
    gap: 150px;
    background: rgb(18, 18, 18);
    padding: 15px;
    transition: .3s;
}

.accordion:hover {
    background: rgb(27, 27, 27);
}
.active {
    border: 1px solid #ff004f;
    box-shadow: 0 0 15px #ff0051ad;
    transition: .2s;
}


</style>