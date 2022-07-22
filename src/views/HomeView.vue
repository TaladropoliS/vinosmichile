<template>
  <div class="home pt-3 mb-5">
    <div class="d-flex justify-content-center">
      <img class="logo img-fluid" alt="Vue logo" src="../assets/logo_n.png">
      <h2 class="pt-3">Vinos Mi Chile</h2>
    </div>
    <Carrousel/>
    <TiposVino/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Carrousel from "@/components/Carrousel";
  import TiposVino from "@/components/TiposVino";

  export default {
    name: 'HomeView',
    components: {TiposVino, Carrousel},
  }
</script>
<style scoped>
.logo {
  height: 60px;
}
</style>
