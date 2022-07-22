<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img class="logo img-fluid" src="../assets/logo_b.png" alt="logo">
        Vinos Mi Chile
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/vinos">Vinos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/promocion">Vinos en Promoción</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/accesorios">Accesorios</router-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
.logo {
  height: 40px;
}
</style>