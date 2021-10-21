/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import store from './store/index';
import routes from './routes'

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    store,
    router
});
