<template>
    <transition name="modal-animation">
      <div v-show="doNotSellModalActive" class="modal">
          <transition name="modal-animation-inner">
              <div v-show="doNotSellModalActive" class="modal-inner">
                  <i class="far fa-times-circle"></i>
                  <slot/>
                  <button @click="close">Close</button>
              </div>
          </transition>
      </div>
  
    </transition>
  </template>
  
  <script>
  export default {
      name: "DoNotSellModal",
      props: ["doNotSellModalActive"],
      data(){
          return {
  
          };
      },
      methods: {
          close(){
              this.$emit('close');
          }
      }
  }
  </script>
  
  <style scoped>
  
  
  .modal {
      position: fixed;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: orange;
      display: flex;
      align-items: center;
      justify-content: center;
  
  
  }
  
  .modal-inner {
      background: white;
      padding: 200px;
      border-radius: 20px;
  
  
  }
  
  
  
  .modal-animation-enter-active,
  .modal-animation-leave-active {
      transition: opacity 0.3s cubic-bezier(0.52,0.02,0.19,1.02);
  }
  
  .modal-animation-enter-from,
  .modal-animation-leave-to  {
      opacity: 0;
  }
  
  .modal-animation-inner-enter-active {
      transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
  }
  
  .modal-animation-inner-leave-active {
      transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  
  .modal-animation-inner-enter-from {
      opacity: 0;
      transform: scale(0.8);
  }
  
  .modal-animation-inner-leave-to {
      transform: scale(0.8);
  }
  
  
  
  </style> 