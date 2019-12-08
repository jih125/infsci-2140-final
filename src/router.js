import Vue from "vue";
import Router from "vue-router";
import Index from "./components/Index.vue";
import Demo from "./components/Demo.vue";
import Shen from "./components/Shen.vue";
import hofmann from './components/hofman.vue';


Vue.use(Router)

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/demo',
            name: 'Demo',
            component: Demo
        },
        {
            path: '/shen',
            name: 'Shen',
            component: Shen
        },
        {
            path: '/hofmann',
            name: 'Hofmann',
            component: hofmann
        }
    ],
})