<template>

  <div v-if="carroproductos.length" class="">
    <div v-for="(carro, index) in carroproductos" :key="index" class="p-1">
      <div class="card">
        <div class="row">
          <div class="col-3">
            <img class="img-fluid" :src="carro.imagen" :alt="carro.nombre">
          </div>
          <div class="col-9 my-auto">
            <p class="m-0 p-0">{{ carro.nombre }}<br>
              $ {{ carro.precio_promo.toLocaleString() }}
            </p>
            <span class="btn" @click="remove(carro.id)">
              <i class="fa-solid fa-xmark"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <!--  valores-->
    <div class="row">
      <div class="col-6 text-start">
        Subtotal productos
      </div>
      <div class="col-6 text-end">
        $ {{ total.toLocaleString() }}
      </div>
    </div>
    <div class="row">
      <div class="col-6 text-start">
        Descuentos
      </div>
      <div class="col-6 text-end">
        $ {{ descuento.toLocaleString() }}
      </div>
    </div>
    <div class="row fw-bold">
      <div class="col-6 text-start">
        Total
      </div>
      <div class="col-6 text-primary text-end">
        $ {{ totalfinal.toLocaleString() }}
      </div>
    </div>
    <div class="d-grid gap-2 pt-3">
      <p>Total Productos en el <i class="fa-solid fa-cart-shopping fa-2x text-primary"></i>
        <span class="border border-success px-2 py-1 ms-2 rounded-circle">
          {{ carroProductos.length + carroPromociones.length + carroAccesorios.length }}
        </span>
      </p>
      <button @click="pagar" class="btn btn-primary d-inline-block">Pagar</button>
    </div>
  </div>

  <div v-else-if="carroProductos.length || carroPromociones.length || carroAccesorios.length" class="">
    <div class="d-grid gap-2 pt-3">
      <p>Productos en el <i class="fa-solid fa-cart-shopping fa-2x text-primary"></i>
        <span class="border border-success px-2 py-1 ms-2 rounded-circle">
          {{ carroProductos.length + carroPromociones.length + carroAccesorios.length }}
        </span>
      </p>
      <button @click="pagar" class="btn btn-primary d-inline-block">Pagar</button>
    </div>
  </div>

  <div v-else class="">
    No hay productos seleccionados
  </div>


</template>

<script>

  import {mapState} from "vuex";

  export default {
    name: "CarroCompra",
    props: {
      productos: Array,
      carroproductos: Array,
      tipo: String, // producto, promocion, accesorio
      total: 0,
      descuento: 0,
      totalfinal: 0,
    },
    methods: {
      remove(id){
        this.$store.commit('removeCarro', [id, this.tipo])
      },
      pagar() {
        this.$store.commit('pagar')
        this.$router.push('checkout')
      }
    },
    computed: {
      ...mapState(['carroProductos', 'carroPromociones', 'carroAccesorios'])
    }
  }
</script>

<style scoped>

</style>