<template>
  <div class="container">
    <div id="carouselExampleIndicators" class="carousel slide py-3" data-bs-ride="carousel">
      <div id="fondo_carrousel" class="carousel-inner">
        <div class="carousel-item active">
          <img :src="mejoresvinos[0]['imagen']" class="imgCarr d-block mx-auto" :alt="mejoresvinos[0]['titulo']">
        </div>
        <div class="carousel-item">
          <img :src="mejoresvinos[1]['imagen']" class="imgCarr d-block mx-auto" :alt="mejoresvinos[1]['titulo']">
        </div>
        <div class="carousel-item">
          <img :src="mejoresvinos[2]['imagen']" class="imgCarr d-block mx-auto" :alt="mejoresvinos[2]['titulo']">
        </div>
        <div class="carousel-item">
          <img :src="mejoresvinos[3]['imagen']" class="imgCarr d-block mx-auto" :alt="mejoresvinos[3]['titulo']">
        </div>
        <div class="carousel-item">
          <img :src="mejoresvinos[4]['imagen']" class="imgCarr d-block mx-auto" :alt="mejoresvinos[4]['titulo']">
        </div>
        <div class="carousel-item">
          <img :src="mejoresvinos[5]['imagen']" class="imgCarr d-block mx-auto" :alt="mejoresvinos[5]['titulo']">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "Carrousel",
    computed: {
      ...mapState(['mejoresvinos'])
    },
  }
</script>

<style scoped>
#fondo_carrousel {
  background-image: url("../assets/slide_fondo.png");
  background-repeat: no-repeat;
}

.imgCarr {
  height: 350px;
}

#titulo_vino {
  background-color: rgba(0, 0, 0, 0.5);
  text-shadow: 1px 2px black;
}
</style>