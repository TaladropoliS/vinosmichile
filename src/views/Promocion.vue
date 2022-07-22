<template>
  <div class="pt-3 px-3 pb-5">
    <div class="d-flex justify-content-center pb-3">
      <img class="logo img-fluid" alt="Vue logo" src="../assets/logo_n.png">
      <h2 class="pt-1">Promociones</h2>
    </div>

    <div class="row">

      <div class="col-md-4">
        <i class="fa-solid fa-bag-shopping"></i> Compras Promociones
        <hr>
        <CarroCompra
            :carroproductos="carroPromociones"
            tipo="promocion"
            :total="totalPromociones"
            :descuento="totalDescuentoPromociones"
            :totalfinal="totalFinalPromociones"
        />
        <hr>
      </div>

      <div class="col-md-8">

        <!--        Productos-->
        <div class="row justify-content-center">
          <Producto :productos="promocion" tipo="promocion"/>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import Producto from "@/components/Producto";
  import {mapState} from "vuex";
  import CarroCompra from "@/components/CarroCompra";

  export default {
    name: "Promocion",
    components:{Producto, CarroCompra},
    computed:{
      ...mapState(['promocion', 'carroPromociones', 'totalPromociones', 'totalDescuentoPromociones', 'totalFinalPromociones'])
    }
  }
</script>

<style scoped>
.logo {
  height: 40px;
}
</style>