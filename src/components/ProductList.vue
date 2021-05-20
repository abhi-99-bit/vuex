<template>
  <div>
    <h1>Product List</h1>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="" />
    <ul v-else>
      <li v-for="product in products" :key="product.key">
        {{ product.title }} - {{ product.price | currency }} -
        {{ product.inventory }}
        <button
          :disabled="!productIsInStock(product)"
          @click="addProductToCart(product)"
        >
          Add to cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState , mapGetters , mapActions } from "vuex";

export default{
       data(){
        return {
            loading : false,
        }
    },
    methods:{
      ...mapActions({
          fetchProducts:'products/fetchProducts',
          addProductToCart:'cart/addProductToCart'
      }),
    },
    computed:{
        ...mapState({
                 products:state => state.products.products
         }),
        ...mapGetters('products',{
            productIsInStock:'productIsInStock'
        }),
    },
    created(){
        this.loading = true,
        this.fetchProducts().then(()=> this.loading = false)
    }
}
</script>

<style scoped>
</style>