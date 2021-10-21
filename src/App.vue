<template>
  <div id="app" style="background-color: #f7f7f7">
    <nav-component></nav-component>

    <router-view />
    <footer-component />
  </div>
</template>
<script src="./assets/script.js"></script>
<script>
import navComponent from "./layout/navComponent.vue";
import footerComponent from "./layout/footerComponent.vue";

export default {
  name: "App",

  components: {
    "nav-component": navComponent,
    footerComponent,
  },

  
};
</script>

<style scoped>
@import "assets/slitslider/css/style.css";

@import "assets/slitslider/css/custom.css";
@import "assets/bootstrap/css/bootstrap.css";
@import "assets/style.css";
</style>
