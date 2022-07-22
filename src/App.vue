<template>
  <NavBar id="nav"/>
  <router-view/>
</template>

<script>
  import {mapActions} from "vuex";
  import NavBar from "@/components/NavBar";

  export default {
    components: {NavBar},
    methods: {
      ...mapActions([
        'fetchVinosHome',
        'fetchPromocion',
        'fetchProductos',
        'fetchAccesorios'
      ])
    },
    created() {
      this.fetchVinosHome()
      this.fetchPromocion()
      this.fetchProductos()
      this.fetchAccesorios()
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 5px;

  a {
    font-weight: bold;
    color: rgba(255, 255, 255, 0.7);

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
