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
          <div class="col-lg-3 col-sm-3">
            <h4>Redes Sociales</h4>

            <img
              @click="getLink('facebook', configuracion.facebook)"
              class="img-width"
              :src="facebook"
              alt="facebook"
            />

            <img
              @click="getLink('Instagram', configuracion.instagram)"
              class="img-width"
              :src="instagram"
              alt="instagram"
            />

            <img
              @click="getLink('whatsapp', configuracion.whatsapp)"
              class="img-width"
              :src="whatsapp"
              alt="whatsapp"
            />

            <img
              @click="getLink('linkedin', configuracion.linkedin)"
              class="img-width"
              :src="linkedin"
              alt="linkedin"
            />
          </div>
        </div>
        <p class="copyright">Copyright 2021. Todos los derechos reservados.</p>
      </div>
    </div>

    <!-- Modal -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      facebook: require("@/assets/images/facebook.png"),
      instagram: require("@/assets/images/instagram.png"),
      whatsapp: require("@/assets/images/whatsapp.png"),
      linkedin: require("@/assets/images/linkedin.png"),
    };
  },
  computed: {
    configuracion() {
      return this.$store.state.home.configuracion;
    },

    userdata() {
      return this.$store.state.home.userdata;
    },
  },

  methods: {
    getLink(red, url) {
      if (red == "whatsapp") {
        window.open(
          `https://api.whatsapp.com/send?phone=+57${this.userdata.celular_whatsapp}&text=Hola me intereso tu perfil`
        );
      } else {
        window.open(url);
      }
    },
  },
};
</script>

<style>
.img-width {
  width: 5rem;
}
</style>