import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import store from './store/store'
import Home from './components/Home.vue'
import News from './components/News.vue'
import UserInfo from './components/UserInfo.vue'
import './assets/css/base.css'


Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
        path: '/home', component: Home
    }, {
        path: '/news', component: News
    }, {
        path: '/user', component: UserInfo
    }]
});

Vue.prototype.$http = Axios;

new Vue({
    router,
    el: '#app',
    store,
    render: h => h(App)
});