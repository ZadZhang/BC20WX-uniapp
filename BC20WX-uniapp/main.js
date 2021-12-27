import Vue from 'vue'
import App from './App'

import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import manage from './pages/manage/home.vue'
Vue.component('manage',manage)

import update from './pages/update/home.vue'
Vue.component('update',update)

import about from './pages/about/home.vue'
Vue.component('about',about)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 

