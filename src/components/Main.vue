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
      
    }
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
      <button type="button" class="btn btn-primary btn-sm"><<</button>
        <span class="my-3">Pagina ... di ...</span>
      <button type="button" class="btn btn-primary btn-sm">>></button>
    </div>
  </div>
  
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;

.btn {
 background-color: rgb(131, 123, 165);
 border: none;
 margin: 5px;
 color: black;
 &:hover {
  background-color: rgb(116, 92, 223);
 }
}

</style>