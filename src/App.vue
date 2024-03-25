<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import axios from 'axios';
import {store} from './data/store';


export default {
    components: {
      Header,
      Main,
      Footer
    },

    data(){
      return {
        axios,
        store
      }
    },
    method:{
      getApi(){
        console.log(this.store);
        axios.get(this.store.apiURL, {
    
          params: {
       
         
          }
        })
        .then(result => {
          console.log(result);
        
        })
        .catch (error => {
          console.log(error);
        })
      }
    }
  }

</script>




<template>
  <Header />
  <Main />
  <Footer />

</template>



<style lang="scss" scoped>

  @use './assets/scss/main.scss';

</style>