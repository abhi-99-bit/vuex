import shop from '@/api/shop'
export default {

    namespaced:true,
    state:{
        products:[],
    },
    getters:{
        // = computed
        availableProducts(state, getters) {
            return state.products.filter(product => product.inventory > 0)
        },
        
        productIsInStock(){
            return (product)=>{
                return product.inventory > 0;
            }
        }

    },
    actions:{ 
        // = methods or calling of api is done here
        fetchProducts({ commit }) {
            return new Promise((resolve, reject) => {
                // make the call
                // call  setProducts mutations
                shop.getProducts(products => {
                    commit('setProducts', products);
                    resolve();
                })
            })
        },
        
    },
    mutations: {
        // = use for  setting and updating the state (use by actions)
        setProducts(state, products) {
            // update products
            state.products = products
        },

        decrementProductInventory(state, product) {
            product.inventory--;
        },
    }
}