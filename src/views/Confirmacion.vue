<template>
  <div class="pt-3 px-3 pb-5">
    <div class="d-flex justify-content-center pb-3">
      <img class="logo img-fluid" alt="Vue logo" src="../assets/logo_n.png">
      <h2 class="pt-1">Confirmación</h2>
    </div>
    <div class="col-md-6 mx-auto">
      <div class="card p-5 my-5">
        <h3>La orden N°{{ nro }} ha sido confirmada y ya la estamos procesando.</h3>
      </div>
    </div>
    <div class="col-md-6 mx-auto">
      <div class="p-5 my-5">
        <router-link to="/" class="btn btn-primary px-5">Ir al Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Confirmacion",
    data() {
      return {
        nro: 0
      }
    },
    methods: {
      generarNro() {
        this.nro = Math.floor(Math.random() * 1111111)
      },
      limpiarDatos() {
        this.$store.commit('limpiarDatos')
      }
    },
    created() {
      this.generarNro()
      this.limpiarDatos()
    }
  }
</script>

<style scoped>
.logo {
  height: 40px;
}
</style>