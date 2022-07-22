<template>
  <div class="pt-3 px-3 pb-5">
    <div class="d-flex justify-content-center pb-3">
      <img class="logo img-fluid" alt="Vue logo" src="../assets/logo_n.png">
      <h2 class="pt-1">Vinos</h2>
    </div>

    <div class="row">

      <div class="col-md-4">
        <i class="fa-solid fa-bag-shopping"></i> Compras Vinos
        <hr>
        <CarroCompra
            :carroproductos="carroProductos"
            tipo="producto"
            :total="totalProductos"
            :descuento="totalDescuentoProductos"
            :totalfinal="totalFinalProductos"
        />
        <hr>
      </div>

      <div class="col-md-8">

        <!--        Productos-->
        <div class="row justify-content-center">
          <Producto :productos="productos" tipo="producto"/>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  import Producto from "@/components/Producto";
  import CarroCompra from "@/components/CarroCompra";

  export default {
    name: "Vinos",
    components: {CarroCompra, Producto},
    computed: {
      ...mapState((['productos', 'carroProductos', 'totalProductos', 'totalDescuentoProductos', 'totalFinalProductos']))
    }
  }
</script>

<style scoped>
.logo {
  height: 40px;
}
</style>