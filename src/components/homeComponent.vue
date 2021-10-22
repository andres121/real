<template>
  <div>
    <!-- banner -->
    <div class="inside-banner">
      <div class="container">
        <h2>Inmuebles</h2>
      </div>
    </div>
    <!-- banner -->

    <div class="container">
      <div class="properties-listing spacer">
        <div class="row">
          <div class="col-lg-9 col-sm-8">
            <!-- <div class="sortby clearfix">
              <div class="pull-left result">Showing: 12 of 100</div>
              <div class="pull-right">
                <select class="form-control">
                  <option>Sort by</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div> -->
            <div class="row">
              <!-- properties -->
              <div
                class="col-lg-4 col-sm-6"
                v-for="inm in inmuebles"
                :key="inm.id"
              >
                <div class="properties">
                  <div class="image-holder">
                    <img
                      :src="url + inm.inmueble_imagenes[0].url"
                      class="img-responsive"
                      alt="properties"
                    />
                    <div class="status sold">Venta</div>
                  </div>
                  <h4>
                    <a href="property-detail.php">{{ inm.titulo_inmueble }}</a>
                  </h4>
                  <p class="price">Price: ${{ inm.precio_venta }}</p>
                  <div class="listing-detail">
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Bed Room"
                      >5</span
                    >
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Living Room"
                      >2</span
                    >
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Parking"
                      >2</span
                    >
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Kitchen"
                      >1</span
                    >
                  </div>

                  <router-link
                    :to="{
                      name: 'detalle',
                      params: { code: userdata.referral_code, id: inm.id },
                    }"
                    class="btn btn-primary"
                    >Detalle</router-link
                  >
                </div>
              </div>
              <!-- properties -->

              <!-- properties -->
              <!-- <div class="center">
                <ul class="pagination">
                  <li><a href="#">«</a></li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">»</a></li>
                </ul>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { URL_LOCAL } from "../config.js";

export default {
  name: "homeComponent",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      url: URL_LOCAL + "storage/",
    };
  },

  computed: {
    inmuebles() {
      return this.$store.state.home.inmuebles;
    },

    userdata() {
      return this.$store.state.home.userdata;
    },
  },
  created() {
    let data = null;

    if (this.$route.params.code) {
      localStorage.setItem("code", this.$route.params.code);
    } else {
      data = localStorage.setItem("code", this.$route.params.code);
    }

    this.buscarInfo(data);
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
        .then(() => {})
        .catch(() => {});
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
