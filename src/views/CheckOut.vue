<template>
  <div class="pt-3 px-3 pb-5">
    <div class="d-flex justify-content-center pb-3">
      <img class="logo img-fluid" alt="Vue logo" src="../assets/logo_n.png">
      <h2 class="pt-1">CheckOut</h2>
    </div>

    <div class="row">

      <div class="col-md-8">
        <!--        Formulario-->
        <div class="row justify-content-center p-3">
          <div class="card">
            <form>
              <h3>Datos del Comprador</h3>
              <hr>
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input v-model.trim="nombre" type="text" class="form-control" id="nombre" placeholder="Nombre" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model.trim="email" type="email" class="form-control" id="email" placeholder="Email" required>
              </div>
              <div class="mb-3">
                <label for="reemail" class="form-label">Repetir Email</label>
                <input v-model.trim="reemail" type="email" class="form-control" id="reemail" placeholder="Reingresar Email"
                       required>
              </div>
              <div class="mb-3">
                <label for="telefono" class="form-label">Teléfono</label>
                <input v-model.trim="telefono" type="text" class="form-control" id="telefono" placeholder="Teléfono"
                       required>
              </div>

              <h3>Datos de Despacho</h3>
              <hr>
              <div class="mb-3">
                <label for="direccion" class="form-label">Dirección</label>
                <input v-model.trim="direccion" type="text" class="form-control" id="direccion" placeholder="Dirección"
                       required>
              </div>
              <div class="mb-3">
                <label for="comuna" class="form-label">Comuna</label>
                <input v-model.trim="comuna" type="text" class="form-control" id="comuna" placeholder="Comuna" required>
              </div>

              <h3>Forma de Pago</h3>
              <hr>
              <div class="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 mx-auto">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="transferencia" checked>
                  <label class="form-check-label" for="transferencia">
                    Transferencia
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="servipag">
                  <label class="form-check-label" for="servipag">
                    Servipag
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="webpay">
                  <label class="form-check-label" for="webpay">
                    Webpay
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="alaentrega">
                  <label class="form-check-label" for="alaentrega">
                    Contra entrega
                  </label>
                </div>
              </div>
              <hr>
              <div class="col-3 mx-auto py-3">
                <button @click.prevent="submit()" class="btn btn-primary">Confirmar</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <i class="fa-solid fa-bag-shopping"></i> <b>Todos Los Productos</b>
        <hr>
        <div v-for="(carro, index) in carroFinal" :key="index" class="p-1">
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
            $ {{ totalDescuentos.toLocaleString() }}
          </div>
        </div>
        <div class="row fw-bold">
          <div class="col-6 text-start">
            Total
          </div>
          <div class="col-6 text-primary text-end">
            $ {{ totalAPagar.toLocaleString() }}
          </div>
        </div>
        <hr>
      </div>

    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "CheckOut",
    data() {
      return {
        nombre: '',
        email: '',
        reemail: '',
        telefono: '',
        direccion: '',
        comuna: '',
        expression: /\w+@\w+\.+[a-z]/
      }
    },
    computed: {
      ...mapState((['carroFinal', 'total', 'totalDescuentos', 'totalAPagar']))
    },
    methods: {
      submit() {
        if (!this.nombre.length || !this.email.length || !this.reemail.length ||
            !this.telefono.length || !this.direccion.length || !this.comuna.length) {
          alert('Todos los campos son obligatorios.')
        } else if (this.email !== this.reemail) {
          alert('Los email ingresados no coinciden.')
        } else if (!this.expression.test(this.email)) {
          alert('Ingresa un email válido.')
        } else {
          this.$router.push('/confirmacion')
        }
      }
    }
  }
</script>

<style scoped>
.logo {
  height: 40px;
}
</style>