import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/home.vue';
import Search from '../views/search/search.vue';
import Item from '../views/item/item.vue';
import LoginCenter from '../views/login-center/login-center.vue';
import Personalcenter from '../views/personal-center/personal-center.vue';

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
    name: 'LoginCenter',
    component: LoginCenter
  },
  {
    path: '/personal',
    name: 'Personalcenter',
    component: Personalcenter
  }
];

const router = new VueRouter({
  routes
});

export default router;
