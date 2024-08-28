<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import axios from 'axios';
import {store} from './data/store';


export default {

    components: {
      Header,
      Main,
    },

    data(){
      return {
        store
      }
    },
    methods:{
      getApi(){
        
        //console.log(this.store);
        axios.get(this.store.apiURL, {
          // queryparams per la ricerca nomi
          params:this.store.queryParams
        })
        .then(response => {
          console.log(response.data.results);
          //  associo cardArray     
          this.store.cardArray = response.data.results;
          // associo pages
          this.store.pageInfo.pages = response.data.info.pages
          console.log(this.store.pageInfo.pages);
        
        })
        .catch (error => {
          console.log(error);
        })
      }

    },

    mounted() {
      this.getApi();

    }

  }

</script>




<template>
  <Header @startSearch="getApi"  @resetCard="getApi"/>
  <Main @nextPage="getApi"/>
  <Footer />

</template>



<style lang="scss" scoped>

  @use './assets/scss/main.scss';

</style>