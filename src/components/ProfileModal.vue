<template>
    <transition name="modal-animation">
      <div v-show="profileModalActive" class="modal">
          <transition name="modal-animation-inner">
              <div v-show="profileModalActive" class="modal-inner">
                
                  <slot/>
                  
              </div>
          </transition>
      </div>
  
    </transition>
  </template>
  
  <script>
  export default {
      name: "ProfileModalActive",
      props: ["profileModalActive"],
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

  .modal-close-btn {
    cursor: pointer;
    background: #ff004f;
    border: none;
    color: white;
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

  }
  
  
  .modal {
      position: fixed;
      z-index: 6;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.495);
      display: flex;
      align-items: center;
      justify-content: center;
      overscroll-behavior: contain;
      overflow: auto;

      
  
  
  }
  
  .modal-inner {
      background: white;
      padding: 30px;
      border-radius: 20px;
      box-shadow: 10px 20px 30px black;
     
      
     
      
  
  
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