import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './modules/auth'
import { newProject } from './modules/newProject';
Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        auth,
        newProject
    },
    state: {
        project_counter: 0,
        currentTab: 0,
    },
    getters: {

    },
    mutations: {
        PROJECT_INCR(state) {
            state.project_counter++;
        }
    },
    actions: {
        PROJECT_INCR(context){
            context.commit('PROJECT_INCR')
        }
    }
})