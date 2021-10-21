<template>
  <div>
    <div class="inside-banner">
      <div class="container">
        <span class="pull-right"><a href="#">Inicio</a> / Comprar</span>
        <h2>Comprar</h2>
      </div>
    </div>
    <!-- banner -->

    <div class="container">
      <div class="properties-listing spacer">
        <div class="row">
          <!--<div class="col-lg-3 col-sm-4 hidden-xs">
           <div class="hot-properties hidden-xs">
              <h4>Hot Properties</h4>
              <div class="row">
                <div class="col-lg-4 col-sm-5">
                  <img
                    src="../assets/images/properties/4.jpg"
                    class="img-responsive img-circle"
                    alt="properties"
                  />
                </div>
                <div class="col-lg-8 col-sm-7">
                  <h5>
                    <a href="property-detail.php">Integer sed porta quam</a>
                  </h5>
                  <p class="price">$300,000</p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 col-sm-5">
                  <img
                    src="../assets/images/properties/1.jpg"
                    class="img-responsive img-circle"
                    alt="properties"
                  />
                </div>
                <div class="col-lg-8 col-sm-7">
                  <h5>
                    <a href="property-detail.php">Integer sed porta quam</a>
                  </h5>
                  <p class="price">$300,000</p>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4 col-sm-5">
                  <img
                    src="../assets/images/properties/3.jpg"
                    class="img-responsive img-circle"
                    alt="properties"
                  />
                </div>
                <div class="col-lg-8 col-sm-7">
                  <h5>
                    <a href="property-detail.php">Integer sed porta quam</a>
                  </h5>
                  <p class="price">$300,000</p>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4 col-sm-5">
                  <img
                    src="../assets/images/properties/2.jpg"
                    class="img-responsive img-circle"
                    alt="properties"
                  />
                </div>
                <div class="col-lg-8 col-sm-7">
                  <h5>
                    <a href="property-detail.php">Integer sed porta quam</a>
                  </h5>
                  <p class="price">$300,000</p>
                </div>
              </div>
            </div>

            <div class="advertisement">
              <h4>Advertisements</h4>
              <img
                src="../assets/images/advertisements.jpg"
                class="img-responsive"
                alt="advertisement"
              />
            </div>
          </div> -->

          <div class="col-lg-9 col-sm-8">
         
            <div class="row">
              <div class="col-lg-8">
                <div class="property-images">
                  <b-carousel
                    id="carousel-1"
                    v-model="slide"
                    :interval="4000"
                    controls
                    indicators
                    background="#ababab"
                    img-width="1024"
                    img-height="480"
                    style="text-shadow: 1px 1px 2px #333"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                  >
                    <!-- Indicators -->
                    <b-carousel-slide
                      style="max-height: 500px"
                      v-for="inm in inmueble.inmueble_imagenes"
                      :key="inm.id"
                    >
                      <template #img>
                        <img
                          class="d-block img-fluid w-100"
                          width="1024"
                          height="480"
                          :src="url + inm.url"
                          alt="image slot"
                        />
                      </template>
                    </b-carousel-slide>
                  </b-carousel>
                  <!-- Slider Starts -->
                  <div
                    id="myCarousel"
                    class="carousel slide"
                    data-ride="carousel"
                  >
                    <!-- <div class="carousel-inner"> -->
                    <!-- Item 1 -->
                    <!-- <div class="item active">
                        <img
                          src="../assets/images/properties/4.jpg"
                          class="properties"
                          alt="properties"
                        />
                      </div> -->
                    <!-- #Item 1 -->

                    <!-- Item 2 -->
                    <!-- <div class="item">
                        <img
                          src="../assets/images/properties/2.jpg"
                          class="properties"
                          alt="properties"
                        />
                      </div> -->
                    <!-- #Item 2 -->

                    <!-- Item 3 -->
                    <!-- <div class="item">
                        <img
                          src="../assets/images/properties/1.jpg"
                          class="properties"
                          alt="properties"
                        />
                      </div> -->
                    <!-- #Item 3 -->

                    <!-- Item 4 -->
                    <!-- <div class="item">
                        <img
                          src="../assets/images/properties/3.jpg"
                          class="properties"
                          alt="properties"
                        />
                      </div> -->
                    <!-- # Item 4 -->
                    <!-- </div> -->
                    <!-- <a
                      class="left carousel-control"
                      href="#myCarousel"
                      data-slide="prev"
                      ><span class="glyphicon glyphicon-chevron-left"></span
                    ></a>
                    <a
                      class="right carousel-control"
                      href="#myCarousel"
                      data-slide="next"
                      ><span class="glyphicon glyphicon-chevron-right"></span
                    ></a> -->
                  </div>
                  <!-- #Slider Ends -->
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
                    Location
                  </h4>
                  <div class="well">
                    <iframe
                      width="100%"
                      height="350"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Pulchowk,+Patan,+Central+Region,+Nepal&amp;aq=0&amp;oq=pulch&amp;sll=37.0625,-95.677068&amp;sspn=39.371738,86.572266&amp;ie=UTF8&amp;hq=&amp;hnear=Pulchowk,+Patan+Dhoka,+Patan,+Bagmati,+Central+Region,+Nepal&amp;ll=27.678236,85.316853&amp;spn=0.001347,0.002642&amp;t=m&amp;z=14&amp;output=embed"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="col-lg-12 col-sm-6">
                  <div class="property-info">
                    <p class="price">$ {{ inmueble.precio_venta}}</p>
                    <p class="area">
                      <span class="glyphicon glyphicon-map-marker"></span>   {{ inmueble.direccion }}
                    </p>

                    <div class="profile">
                      <span class="glyphicon glyphicon-user"></span> Detalle del Agente
                      <p>{{ inmueble.primer_nombre }}<br /> {{ userdata.celular_movil}}</p>
                    </div>
                  </div>

                  <h6>
                    <span class="glyphicon glyphicon-home"></span> Availabilty
                  </h6>
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
                </div>
                <div class="col-lg-12 col-sm-6">
                  <div class="enquiry">
                    <h6>
                      <span class="glyphicon glyphicon-envelope"></span> Post
                      Enquiry
                    </h6>
                    <form role="form">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Full Name"
                      />
                      <input
                        type="text"
                        class="form-control"
                        placeholder="you@yourdomain.com"
                      />
                      <input
                        type="text"
                        class="form-control"
                        placeholder="your number"
                      />
                      <textarea
                        rows="6"
                        class="form-control"
                        placeholder="Whats on your mind?"
                      ></textarea>
                      <button
                        type="submit"
                        class="btn btn-primary"
                        name="Submit"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
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
import { URL_LOCAL } from "../config.js";

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      url: URL_LOCAL + "storage/",
      inmueble: {},
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
        })
        .catch(() => {});
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
