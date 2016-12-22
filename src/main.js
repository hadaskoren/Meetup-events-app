import style from './style.scss';
import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'

import Home from './pages/home/home.vue';
import About from './pages/about/about.vue';
import MainNav from './pages/main-nav/main-nav.vue';
import Places from './pages/places/places-center.vue';
Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = 'http://localhost:3003';


const routes = [{
    path: '/',
    component: Home
}, {
    path: '/places',
    component: Places
}, {
    path: '/about',
    component: About
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    router,
    components: {
        'main-nav': MainNav
    }
}).$mount('#app')