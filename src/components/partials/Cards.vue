<script>
export default {
  props: {
    name: String,
    status: String,
    species: String,
    image: String,

  }
 
}
</script>


<template>
 <div class="col my-5 ">
    <div class="card" style="width: 18rem;">
      <img :src="image" class="card-img-top" :alt="name">
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">{{ status }}</p>
        <p class="card-text">{{ species }}</p>
      </div>
    </div>
  </div>
  
</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/general' as *;
@use '../../assets/scss/partials/variables' as *;

</style>