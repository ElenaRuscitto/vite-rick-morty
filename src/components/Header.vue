<script>
import {store} from '../data/store';
import axios from 'axios';
export default {
  data(){
      return {
        store,
        name: ''
      }
  },

  methods: {
    startSearch (){
      this.store.queryParams= {
        name: this.name
      }
      console.log('ricercaaaaa');
      this.$emit('startSearch')
      // reset campo input dopo aver fatto enter
      this.name = ''
    },

    // reset card e pag
    resetCard(){
      this.store.queryParams= {
        name: '',
        page: 1,
      }
      this.$emit('resetCard')
    }
    
  }
    
  
}
</script>


<template>
  <div>
    <h1 class="text-center my-4"> - Rick&Morty - </h1>

    <div class="reserch d-flex justify-content-center my-5"> 

      <!-- <input type="text" class="form-control w-25 mx-3" placeholder="Search Character"> -->
    
          <input 
            v-model.trim="name"
            @keyup.enter="startSearch()"
            class="form-control w-25 mx-3" 
            list="datalistOptions" 
            id="exampleDataList" 
            placeholder="Search Character">

            <datalist id="datalistOptions">
              <option 
                v-for="card in this.store.cardArray"
                :key="card.id"
                :value="card.name">
            </option>
            </datalist>

        <select class="form-select w-25 mx-3" aria-label="Default select example">
          <option selected> Select Status</option>
          <option value="1">Alive</option>
          <option value="2">Dead</option>
          <option value="3">Unknown</option>
        </select>

      <button @click="startSearch()" type="button" class="btn btn-info mx-3">Search</button>

      <button @click="resetCard()" type="button" class="btn btn-warning mx-3">Resect</button>

    </div>

      <div class="text-center my-5">
        <p>Risultati trovati: {{ this.store.cardArray.length }} </p>
      </div>

  </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;


</style>