import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

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
