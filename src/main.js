// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store'


Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

// import axios
Vue.prototype.axios = axios

Vue.config.productionTip = false

// triggers when rendering route
router.beforeEach((to, from, next) => {
    let isLogin = sessionStorage.getItem('isLogin');

    // logout
    if (to.path == '/logout') {
        // clear state
        sessionStorage.clear();
        // render to login page
        next('/login');
    } else if (to.path == '/login') {
        if (isLogin != null) {
            next('/main');
        }
    } else if (null == isLogin) {
        next('/login');
    }
    next();
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})