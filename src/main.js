

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import './index.css';
import App from './App.vue'
import router from './router'

let app;
firebase.auth().onAuthStateChanged(() => {
    if(!app){
        const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
    }
})






//const app = createApp(App)

//app.use(createPinia())
//app.use(router)

//app.mount('#app')
  