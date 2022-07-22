<template>
  <div class="container-fluid mt-3">
    <div class="row justify-content-center">
      <h3>Nuesros Vinos</h3>
      <div v-for="(tipo, index) in tiposvino" :key="index" class="col-sm-4 p-1 p-sm-2">
        <div class="card">
          <div class="card-img-top pt-2">
            <img id="imagentipo" :src="tipo.imagen" :alt="tipo.nombre" class="img-fluid rounded-3">
          </div>
          <div class="card-title fw-bold pt-2 mb-0">
            {{ tipo.nombre }}
          </div>
          <div class="card-body pt-2">
            {{ truncate(tipo.texto) }}...
            <span class="fw-bold btn btn-outline-success" data-bs-toggle="modal" :data-bs-target="`#exampleModal${index}`">
              ver <i class="fas fa-plus"></i>
            </span>
          </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" :id="`exampleModal${index}`" tabindex="-1" :aria-labelledby="`exampleModalLabel${index}`" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" :id="`exampleModalLabel${index}`">{{tipo.nombre}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                {{tipo.texto}}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success" data-bs-dismiss="modal">cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "TiposVino",
    methods: {
      truncate(texto) {
        return texto.slice(0, 100)
      }
    },
    computed: {
      ...mapState(['tiposvino'])
    }
  }

</script>

<style scoped>
#imagentipo {
  max-height: 120px;
}
</style>