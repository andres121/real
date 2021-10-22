<template>
  <div>
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-3">
            <h4>Contacto</h4>
            <p>
              <b>{{ userdata.primer_nombre }}</b
              ><br />
              <span class="glyphicon glyphicon-map-marker"></span>
              {{ userdata.direccion_persona }} <br />
              <span class="glyphicon glyphicon-envelope"></span>
              {{ userdata.email }}<br />
              <span class="glyphicon glyphicon-earphone"></span>
              {{ userdata.celular_movil }}
            </p>
          </div>
        </div>
        <p class="copyright">Copyright 2013. All rights reserved.</p>
      </div>
    </div>

    <!-- Modal -->
  </div>
</template>

<script>
export default {
  computed: {
    userdata() {
      return this.$store.state.home.userdata;
    },
  },
};
</script>

<style>
</style>