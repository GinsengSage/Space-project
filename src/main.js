import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import '@fortawesome/fontawesome-free/css/all.css';

//db
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDVuZxdoAFX4WLL5ZlDLU0qmIP9jAL-9rQ",
    authDomain: "space-project-db.firebaseapp.com",
    projectId: "space-project-db",
    storageBucket: "space-project-db.appspot.com",
    messagingSenderId: "492412878625",
    appId: "1:492412878625:web:423b56e3dcbfb1d43c8860"
};

firebase.initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
