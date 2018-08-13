// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from '../node_modules/vue-router';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import VueResource from 'vue-resource';

import './common/stylus/index.styl';

// 告诉vue使用vue-router
Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);

const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller},
  {path: '/', redirect: '/goods'} // 重定向到goods,即首次进入显示的页面
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active' // 在点击事件中添加一个className=active的属性
});

new Vue({
  router, // 注入到根实例中
  render: (h) => h(app)
}).$mount('#app');
