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
    <div class="reserch d-flex justify-content-center my-5"> 

      <input type="text" class="form-control w-25 mx-3" placeholder="Search Character">

        <select class="form-select w-25 mx-3" aria-label="Default select example">
          <option selected> Select Status</option>
          <option value="1">Alive</option>
          <option value="2">Dead</option>
          <option value="3">Unknown</option>
        </select>

        <button type="button" class="btn btn-info mx-3">Search</button>

        <button type="button" class="btn btn-warning mx-3">Resect</button>

    </div>
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