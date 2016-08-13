import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
})

router.map({
    '/': {
        component: App
    }
})

router.redirect({
    '*': '/'
})

router.start(App, '#app')
