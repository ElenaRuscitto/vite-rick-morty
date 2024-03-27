<script>
import {store} from '../data/store';
import Cards from './partials/Cards.vue';

export default {
  components: {
   Cards,
  },
  
  data(){
    return {
      store,
    }
  },
  methods: {
    changePage(isNext) {
      // se this.changePage è true incrementa, se false decrementa
      isNext ? store.queryParams.page++ : store.queryParams.page--
      console.log(store.queryParams);
      this.$emit ('nextPage')

    }
  },


  
}
</script>


<template>
  <div class="container">

    <div class="row row-cols-4 text-center">
      
      <Cards v-for="element in store.cardArray" 
        :key="element.id"
        :image="element.image"
        :name="element.name"
        :status="element.status"
        :species="element.species"
        
        />
        
    </div>

    <div class="d-flex justify-content-center my-3">
      <button @click="changePage(false)" v-if="store.queryParams.page > 0 " type="button" class="btn btn-primary btn-sm"> &#60; </button>

        <span class="my-3">Pagina {{store.queryParams.page }} di {{store.pageInfo.pages }}</span>

      <button @click="changePage(true)" v-if="store.queryParams.page + 1 < store.pageInfo.pages" type="button" class="btn btn-primary btn-sm"> &#62; </button>
    </div>

  </div>
  
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;

.btn {
 background-color: rgb(131, 123, 165);
 border: none;
 margin: 15px;
 color: black;
 &:hover {
  background-color: rgb(116, 92, 223);
 }
}

</style>