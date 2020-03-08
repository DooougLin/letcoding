import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';
import Item from '../views/Item.vue';
import Login from '../views/Login.vue';
import AdminCenter from '../views/AdminCenter.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/item',
        name: 'Item',
        component: Item
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/admin',
        name: 'AdminCenter',
        component: AdminCenter
    }
];

const router = new VueRouter({
    routes
});

export default router;
