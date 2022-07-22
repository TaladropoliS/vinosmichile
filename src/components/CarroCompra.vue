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
      <button @click="pagar" class="btn btn-primary d-inline-block">Pagar</button>
    </div>
  </div>
  <div v-else class="">
    No hay productos seleccionados
  </div>
</template>

<script>

  export default {
    name: "CarroCompra",
    props: {
      productos: Array,
      carroproductos: Array,
      tipo: String,
      total: 0,
      descuento: 0,
      totalfinal: 0,
    },
    methods: {
      pagar() {
        this.$store.commit('pagar')
        this.$router.push('checkout')
      }
    }
  }
</script>

<style scoped>

</style>