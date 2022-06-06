import Vue from 'vue'
import Router from 'vue-router'
import { trailingSlash } from '../util/helpers'
import { abort, error, redirect, layout, route } from '@/util/routes'

Vue.use(Router)

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior: (to, from, savedPosition) => {
        if (to.hash) return { selector: to.hash }
        if (savedPosition) return savedPosition

        return { x: 0, y: 0 }
    },
    routes: [
        { path: '/', name: 'Home', redirect: '/home' },
        { path: '', name: 'Home', redirect: '/home' },
        // Not authenticated
        layout('empty', [
            // { path: '/', redirect: '/login' },
            route('Login', null, 'login'),
            route('Register', null, 'register'),
            route('Forgot', null, 'forgot'),
            route('Reset', null, 'reset'),
        ]),
        // Authenticated
        layout('Default', [
            redirect('', '/home'),
            redirect('/', '/home'),
            // Pages
            route('Home', null, 'home'),
            route('UserProfile', null, 'profile'),
            route('Scalability', null, 'scalability'),
            route('Notifications', null, 'notifications'),
            route('Quotes', null, 'quotes'),
            route('My Quotes', null, 'myquotes'),
            route('Upgrade', null, 'upgrade'),
            // Error
            abort('Abort'),
            error('Error'),
            route('Error', null, '/404'),
            { path: ':catchAll(.*)', redirect: '/404' },
        ]),
    ],
});

router.beforeEach((to, from, next) => {
    return to.path.endsWith('/') ? next() : next(trailingSlash(to.path))
})

export default router;