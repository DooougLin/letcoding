import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import app from './app.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  preLoad: 1.5,
  error: require('@/static/img/public/loding.png'),   //请求失败后显示的图片
  loading: require('@/static/img/public/loding.png'),   //加载的loading过渡图片
  attempt: 1     // 加载图片数量
});

new Vue({
  router,
  store,
  render: (h) => h(app)
}).$mount('#app');
