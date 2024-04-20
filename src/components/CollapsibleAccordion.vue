<template>
  <div>
    <div @click="open">
        <h3>{{ header }}</h3>
        <div :icon="caretIcon"/>
    </div>
    <div v-if="isOpen">
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
        return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
    }
}
};
</script>

<style>

</style>