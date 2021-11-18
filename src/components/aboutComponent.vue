<template>
  <div>
    <div
      class="hero-wrap"
      style="background-image: url('./assets/images/bg_1.jpg')"
    >
      <div class="overlay"></div>
      <div class="container">
        <div
          class="
            row
            no-gutters
            slider-text
            align-items-center
            justify-content-center
          "
        >
          <div class="col-md-9 ftco-animate text-center">
            <h1 style="color: black" class="mb-3 bread">Quiene somos?</h1>
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-section ftc-no-pb">
      <div class="container">
        <div class="row no-gutters">
          <div
            class="
              col-md-5
              p-md-5
              img img-2
              d-flex
              justify-content-center
              align-items-center
            "
            style="background-image: url()"
          >
            <b-img class="width-img" :src="url + configuracion.logo"></b-img>
          </div>
          <div class="col-md-7 wrap-about pb-md-5 ftco-animate">
            <div class="heading-section heading-section-wo-line mb-5 pl-md-5">
              <div class="pl-md-5 ml-md-5">
                <span class="subheading"> Resumen de la empresa</span>
                <h2 class="mb-4">{{ configuracion.nombre }}</h2>
              </div>
            </div>
            <div class="pl-md-5 ml-md-5 mb-5">
              <p v-html="userdata.descripcion"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { BImg } from "bootstrap-vue";
import { URL_LOCAL } from "../config.js";

export default {
  name: "aboutComponent",
  data() {
    return {
      search: "",
      msg: "Welcome to Your Vue.js App",
      url: URL_LOCAL + "storage/",
    };
  },
  components: {
    BImg,
  },

  created() {
    let data = null;

    if (this.$route.params.code) {
      localStorage.setItem("code", this.$route.params.code);
    } else {
      data = localStorage.setItem("code", this.$route.params.code);
    }

    this.buscarInfo(data)
  },

  methods: {
    buscarInfo(data) {
      let code = null;
      if (data == null) {
        code = localStorage.getItem("code");
      } else {
        code = data;
      }

      this.$store
        .dispatch("home/getInmuebles", code)
        .then((data) => {
          let response = data.inmuebles;
          for (let i = 0; i < response.length; i++) {
            if (response[i].estado_id != null) {
              this.departamentos.push(response[i].estado_id);
            }
            if (response[i].ciudad_id != null) {
              this.ciudades.push(response[i].ciudad_id);
            }
            if (response[i].tipo_negocio != null) {
              this.tipo_negocio.push(response[i].tipo_negocio);
            }
            if (response[i].tipo_inmueble != null) {
              this.tipo_inmueble.push(response[i].tipo_inmueble);
            }
          }

          this.departamentos = this.deleteDuplicate(this.departamentos);
          this.ciudades = this.deleteDuplicate(this.ciudades);
          this.tipo_negocio = this.deleteDuplicate(this.tipo_negocio);
          this.tipo_inmueble = this.deleteDuplicate(this.tipo_inmueble);
        })
        .catch(() => {});
    },
  },

  computed: {
    userdata() {
      return this.$store.state.home.userdata;
    },
    configuracion() {
      return this.$store.state.home.configuracion;
    },
  },
};
</script>
<style scoped>
.width-img {
  max-width: 100%;
}
</style>