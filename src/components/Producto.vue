<template>

  <div v-for="(prod, index) in productos" :key="index" class="col-md-6 col-lg-4 mb-3">
    <div class="card">
      <div class="card-img-top">
        <img :src="prod.imagen" class="img_prod img-fluid" :alt="prod.nombre">
      </div>
      <div class="card-title fw-bold">{{ prod.nombre }}</div>
      <div class="card-body">
        <p class="text-start">{{ prod.descripcion }}.</p>
        <ul v-if="prod.caracteristicas">
          <li v-for="(carac, index) in prod.caracteristicas" :key="index" class="text-start">
            {{ carac }}
          </li>
        </ul>
        <div class="row">
          <div class="col-6">
            <p class="mb-0">Antes</p>
            <p class="text-secondary">$ {{ prod.precio_normal.toLocaleString() }}</p>
          </div>
          <div class="col-6 fw-bold">
            <p class="mb-0">Ahora</p>
            <p class="text-primary fw-bold">$ {{ prod.precio_promo.toLocaleString() }}</p>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button @click="addCarro(prod.id)" class="btn btn-outline-primary">Agregar</button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Producto",
    props: {
      productos: Array,
      tipo: String
    },
    methods: {
      addCarro(id) {
        this.$store.commit('addCarro', [id, this.tipo])
      }
    },
  }
</script>

<style scoped>
.img_prod {
  height: 150px;
}
</style>