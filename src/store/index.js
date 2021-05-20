import Vuex from 'Vuex';
import Vue from 'vue';
import actions from './actions'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex);

export default new Vuex.Store({

    modules:{
        cart,
        products
    },

    state: { // = data
       
        
    },
    getters: { // as computed

    },
    // actions are asyncronous 
    actions: actions,

    mutations: { 
         // = use for  setting and updating the state (use by actions)
        
    }
})