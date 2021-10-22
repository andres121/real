<template>
  <div>
    <div class="inside-banner">
      <div class="container">
        <h2>Detalle inmueble</h2>
      </div>
    </div>
    <!-- banner -->

    <div class="container">
      <div class="properties-listing spacer">
        <div class="row">
          <div class="col-lg-9 col-sm-8">
            <div class="row">
              <div class="col-lg-8">
                <div class="property-images">
                  <hooper :progress="true" :autoPlay="true" :playSpeed="2000">
                    <slide
                      v-for="inm in inmueble.inmueble_imagenes"
                      :key="inm.id"
                    >
                      <img
                        class="d-block img-fluid w-100"
                        width="1024"
                        height="480"
                        :src="url + inm.url"
                        alt="image slot"
                      />
                    </slide>
                    <hooper-pagination slot="hooper-addons"></hooper-pagination>
                  </hooper>

                  <!-- Slider Starts -->
                </div>
                <div class="spacer">
                  <h4>
                    <span class="glyphicon glyphicon-th-list"></span>
                    {{ inmueble.titulo_inmueble }}
                  </h4>
                  <p v-html="inmueble.descripcion"></p>
                </div>
                <div>
                  <h4>
                    <span class="glyphicon glyphicon-map-marker"></span>
                    Localizacion
                  </h4>
                  <div class="well">
                    <b-container>
                      <GmapMap
                        :center="center"
                        :zoom="18"
                        style="width: 45%; height: 400px"
                      >
                        <GmapMarker
                          :key="index"
                          v-for="(m, index) in markers"
                          :position="m.position"
                          @click="center = m.position"
                        />
                      </GmapMap>
                    </b-container>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="col-lg-12 col-sm-6">
                  <div class="property-info">
                    <p class="price">$ {{ inmueble.precio_venta }}</p>
                    <p class="area">
                      <span class="glyphicon glyphicon-map-marker"></span>
                      {{ inmueble.direccion }}
                    </p>

                    <div class="profile">
                      <span class="glyphicon glyphicon-user"></span> Detalle del
                      Agente
                      <p>
                        {{ userdata.primer_nombre }}<br />
                        {{ userdata.celular_movil }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-6">
                  <b-button @click="whatsappLink()">
                    <div class="text-center col-6">
                      WhatsApp:
                      <img
                        src="@/assets/images/whatsapp.png"
                        alt="${row.item.celular_whatsapp}"
                        title="WhatsApp"
                        variant="outline-primary"
                        style="max-width: 10%"
                      />
                    </div>
                  </b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { BCarousel } from "bootstrap-vue";
import { URL_LOCAL } from "../config.js";
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";

export default {
  components: {
    // BCarousel,
    Hooper,
    Slide,
    HooperPagination,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      url: URL_LOCAL + "storage/",
      inmueble: null,
      markers: [],
      center: null,

      currentPlace: null,
    };
  },

  computed: {
    userdata() {
      return this.$store.state.home.userdata;
    },
  },

  created() {
    this.buscarInfo();
  },

  methods: {
    addMarker() {
      const marker = {
        lat: parseFloat(this.inmueble.latitud),
        lng: parseFloat(this.inmueble.longitud),
      };
      this.markers.push({ position: marker, title: this.inmueble.direccion });
      this.center = marker;
    },

    onSlideStart(slide) {
      this.sliding = true;
    },

    onSlideEnd(slide) {
      this.sliding = false;
    },

    buscarInfo() {
      this.$store
        .dispatch("home/getInmueble", this.$route.params.id)
        .then((res) => {
          this.inmueble = res;
          this.addMarker();
        })
        .catch(() => {});
    },

    whatsappLink() {
      console.log("hola");
      var url =
        "https://api.whatsapp.com/send?phone=" +
        this.userdata.celular_whatsapp +
        "&text=" +
        "";
      window.open(url);
    },
  },
};
</script>

<style>
.price-1 {
  font-size: 28px;
  color: #72b70f;
  padding: 0;
  border-radius: 5px;
}
</style>
