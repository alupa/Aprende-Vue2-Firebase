import Vue from 'vue'
import Vuex from 'vuex'
import productos from './modules/productos'
import {getters} from './getters'
import {mutations} from './mutations'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        // productos = [
        //     {nombre: 'Steam Link', precio: 50},
        //     {nombre: 'Steam Controller', precio: 59},
        //     {nombre: 'Axiom Verge', precio: 17},
        // ],
        carro: [],
    },
    getters,
    mutations,
    modules: {
        productos,
    }
})