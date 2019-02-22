import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        cantidad: 0
    },
    mutations: {
        // aumentar: (state) => state.cantidad++,
        // reducir: (state) => state.cantidad--,
        aumentar: (state, cantidad) => state.cantidad += cantidad,
        reducir: (state, cantidad) => state.cantidad -= cantidad,
    },
    actions: {
        aumentarAsync: (context, cantidad) => {
            setTimeout(() => context.commit('aumentar', cantidad), 2000)
        },
        // reducirAsync: (context, valor) => {
        //     setTimeout(() => context.commit('reducir', valor.cantidad), 2000)
        // },
        reducirAsync: ({commit}, {cantidad}) => {
            setTimeout(() => commit('reducir', cantidad), 2000)
        },

    }
})