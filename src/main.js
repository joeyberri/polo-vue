import { createApp } from 'vue'
import '../styles/index.css'
import App from './App.vue'
import router from "./router"

// import "./scripts/jquery.js";
// import "./scripts/plugins.js";
// import "./scripts/functions.js";
const app = createApp(App);


app.use(router).mount('#app')


