<template>
  <div>
    <div class="inside-banner">
      <div class="container">
        <h2>Detalle inmueble</h2>
      </div>
    </div>
    <!-- banner -->

    <b-container>
      <div class="properties-listing spacer">
        <VueSlickCarousel :arrows="true" :dots="true">
          <div v-for="img in inmueble.inmueble_imagenes" :key="img.id">
            <b-img :src="url + img.url" class="img-width-detalle"></b-img>
          </div>
         
        </VueSlickCarousel>
        <!-- <vue-flux
          :options="fluxOptions"
          :images="fluxImages"
          :transitions="fluxTransitions"
          ref="slider"
        >
          <flux-pagination slot="pagination"></flux-pagination>
        </vue-flux> -->
      </div>
      <div class="properties-listing spacer">
        <div class="row">
          <div class="col-lg-12 col-sm-8">
            <div class="row">
              <div class="col-lg-8">
                <div class="property-images">
                  <!-- Slider Starts -->
                </div>
                <div class="spacer">
                  <h4>
                    <span class="glyphicon glyphicon-th-list"></span>
                    {{ inmueble.titulo_inmueble }}
                  </h4>
                  <p v-html="inmueble.descripcion"></p>
                </div>
                <div></div>
              </div>

              <div class="col-lg-4">
                <div class="col-lg-12 col-sm-6">
                  <div class="property-info">
                    <strong>
                      <span v-if="inmueble.tipo_negocio.tipo == 'Venta'">
                        <p class="price-1">
                          ${{ inmueble.precio_venta | priceFormattin }}
                        </p>
                      </span>
                      <p v-else class="price-1">
                        ${{ inmueble.precio_alquiler | priceFormattin }}
                      </p></strong
                    >

                    <p class="area">
                      <span class="glyphicon glyphicon-map-marker"></span>
                      {{ inmueble.direccion }}
                    </p>

                    <div class="profile">
                      <span class="glyphicon glyphicon-user"></span> Detalle del
                      Agente
                      <p>
                        {{ userdata.primer_nombre }}<br />
                        {{ userdata.celular_movil }}<br />
                        {{ userdata.email }}
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
    </b-container>
    <b-container>
      <h4>
        <span class="glyphicon glyphicon-map-marker"></span>
        Localizacion
      </h4>
      <GmapMap :center="center" :zoom="18" style="width: 100%; height: 400px">
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="center = m.position"
        />
      </GmapMap>
    </b-container>
    <hr />
  </div>
</template>

<script>
// import { BCarousel } from "bootstrap-vue";
import { URL_LOCAL } from "../config.js";
import "hooper/dist/hooper.css";
// import { VueFlux, FluxPagination, Transitions } from "vue-flux";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: {
    // BCarousel,

    // VueFlux,
    // FluxPagination,
    VueSlickCarousel,
  },
  data() {
    return {
      // fluxOptions: {
      //   autoplay: true,
      // },
      // fluxImages: [],
      // fluxTransitions: {
      //   transitionBook: Transitions.transitionBook,
      // },
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

  filters: {
    priceFormattin: function(value) {
      let format = parseInt(value);
      let dollarUSLocale = Intl.NumberFormat("es-CO");
      let price = dollarUSLocale.format(format);
      return price;
    },
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
          // for (let i = 0; i < res.inmueble_imagenes.length; i++) {
          //   this.fluxImages.push(this.url + res.inmueble_imagenes[i].url);
          // }

          this.inmueble = res;

          this.addMarker();
        })
        .catch(() => {});
    },

    whatsappLink() {
      console.log(this.userdata);
      var url =
        "https://api.whatsapp.com/send?phone=" +
        "+57" +
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
  color: #272726;
  padding: 0;
  border-radius: 5px;
}
.img-width-detalle{
  width: 100%;
  min-width: 100%;
  max-height: 45em;
}
</style>
