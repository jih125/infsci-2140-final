import Vue from "vue";
import Router from "vue-router";
import Index from "./components/Index.vue";
import Kwon from "./components/kwon.vue";
import Cambre from "./components/cambre.vue";
import Westlund from './components/westlund.vue';


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
            path: '/cambre',
            name: 'Cambre',
            component: Cambre
        },
        {
            path: '/kwon',
            name: 'Kwon',
            component: Kwon
        },
        {
            path: '/westlund',
            name: 'Westlund',
            component: Westlund
        }
    ],
})