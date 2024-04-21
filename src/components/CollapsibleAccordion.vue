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
    display: flex;
    align-items: center;
    gap: 150px;
    background: green;
    padding: 15px;
}

.accordion:hover {
    background: aliceblue;
}
.active {
    color: orange;
}


</style>