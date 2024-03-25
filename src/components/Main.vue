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
  </div>
  
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;



</style>