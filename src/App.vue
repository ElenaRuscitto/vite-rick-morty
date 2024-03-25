<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import axios from 'axios';


export default {
    components: {
      Header,
      Main,
      Footer
    },

    data(){
      return {

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

</style>