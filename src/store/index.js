// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './modules/auth'
Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        auth
    },
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
})