import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login'
import TutorRank from '../views/tutor/TutorRank'
import TutorList from '../views/tutor/TutorList'
import NotFound from '../views/NotFound.vue'


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        // login component
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        // main page component
        {
            path: '/main',
            name: 'Main',
            component: Main,

            // nested route
            children: [{
                    path: '/tutor/rank/:id',
                    name: 'TutorRank',
                    component: TutorRank,
                    props: true
                },
                {
                    path: '/tutor/list',
                    name: 'TutorList',
                    component: TutorList
                }
            ]
        },
        {
            path: '/goMain',
            redirect: '/main'
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})