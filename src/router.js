import Vue from "vue";
import Router from "vue-router";
import Index from "./components/Index.vue";
import Reader from "./components/Reader.vue";

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
            path: '/reader',
            name: 'Reader',
            component: Reader
        }
    ]
})