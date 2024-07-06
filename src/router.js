import { createWebHistory, createRouter } from 'vue-router'
import Homepage from './pages/homepage.vue';
import PageNotFound from "./pages/404.vue";

const routes = [
    { path: '/', component: Homepage, name: 'homepage' },
    { path: '/:pathMatch(.*)*', component: PageNotFound },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;