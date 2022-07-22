<template>
  <div class="container">
    <div id="carouselExampleIndicators" class="carousel slide py-3" data-bs-ride="carousel">
      <div id="fondo_carrousel" class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/img_carrousel/castillo_san_simon.jpg" class="imgCarr d-block mx-auto" alt="san simon">
        </div>
        <div class="carousel-item">
          <img src="../assets/img_carrousel/chablis-louis-latour.jpg" class="imgCarr d-block mx-auto" alt="chablis">
        </div>
        <div class="carousel-item">
          <img src="../assets/img_carrousel/vino_de_oporto_barros_tawny.jpg" class="imgCarr d-block mx-auto" alt="oporto">
        </div>
        <div class="carousel-item">
          <img src="../assets/img_carrousel/vino-bardolino-tommasi-1w.jpg" class="imgCarr d-block mx-auto" alt="bardolino">
        </div>
        <div class="carousel-item">
          <img src="../assets/img_carrousel/vino-cousino-macul-don-luis-chardonnay-1q.jpg" class="imgCarr d-block mx-auto"
               alt="chardonnay">
        </div>
        <div class="carousel-item">
          <img src="../assets/img_carrousel/vino-finca-moras-pinot-grigio-1w.jpg" class="imgCarr d-block mx-auto"
               alt="pinot">
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
    data() {
      return {
        mostrar: false
      }
    },
    computed: {
      ...mapState(['mejoresvinos']),
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

</style>