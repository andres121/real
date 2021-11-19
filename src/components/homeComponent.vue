

<template>
  <div>
    <!-- banner -->

    <!-- banner -->

    <b-container>
      <div class="properties-listing spacer">
        <div class="row">
          <div class="col-lg-3 col-sm-4">
            <div class="search-form">
              <!-- <h4>
                <span class="glyphicon glyphicon-search"></span> Search for
              </h4> -->
              <!-- <input
                type="text"
                class="form-control"
                placeholder="Search of Properties"s
              /> -->

              <!-- banner -->
              <h3>Buscar inmuebles</h3>
              <div class="searchbar">
                <div class="row">
                  <div class="col-lg-12 col-sm-12">
                    <input
                      type="text"
                      v-model="inmueble.search"
                      @input="buscarFilter"
                      class="form-control"
                      placeholder="Busca tus inmuebles"
                    />

                    <div class="row">
                      <!-- <div class="col-lg-4 col-sm-3">
                    <select class="form-control">
                      <option selected>tipo negocio</option>

                      <option></option>
                      <option>Alquiler</option>
                    </select>
                  </div> -->

                      <!-- <option>Departamento</option>
                      <option
                        v-for="dep in departamentos"
                        @input="buscarFilter(dep.id)"
                        :key="dep.id"
                        :value="dep.id"
                      >
                        {{ dep.name }}
                      </option> -->

                      <!-- <div class="col-lg-4 col-sm-4">
                    <select class="form-control">
                      <option>Ciudad</option>
                      <option>Apartment</option>
                      <option>Building</option>
                      <option>Office Space</option>
                    </select>
                  </div> -->
                    </div>
                  </div>
                </div>

                <!-- <b-row>
              <b-col lg="4">
                deparatamentos:
                <v-select
                  class="style-chooser"
                  v-model="inmueble.selected_dep"
                  :options="departamentos"
                  label="name"
                  input-id="tipo_inmueble"
                  @input="buscarFilter"
                  placeholder="Seleccionar"
                />
              </b-col>
              <b-col lg="4">
                Ciudades:
                <v-select
                  class="style-chooser"
                  v-model="inmueble.selected_ciu"
                  :options="ciudades"
                  label="name"
                  input-id="ciudades"
                  @input="buscarFilter"
                  placeholder="Seleccionar"
                />
              </b-col>
              <b-col lg="4">
                Tipos de negocio:
                <v-select
                  class="style-chooser"
                  v-model="inmueble.selected_tn"
                  :options="tipo_negocio"
                  label="tipo"
                  input-id="ciudades"
                  @input="buscarFilter"
                  placeholder="Seleccionar"
                />
              </b-col>
            </b-row> -->
                <!-- <b-row>
              <b-col lg="4">
                Tipos de inmueble:
                <v-select
                  class="style-chooser"
                  v-model="inmueble.selected_tinm"
                  :options="tipo_inmueble"
                  label="tipo"
                  input-id="ciudades"
                  @input="buscarFilter"
                  placeholder="Seleccionar"
                />
              </b-col>
            </b-row> -->
              </div>

              <h3 style="color: #000000"><strong>Filtro</strong></h3>
              <v-select
                class="style-chooser"
                v-model="inmueble.selected_dep"
                :options="departamentos"
                label="name"
                input-id="tipo_inmueble"
                @input="buscarFilter"
                placeholder="Departamento"
              />

              <v-select
                class="style-chooser"
                v-model="inmueble.selected_ciu"
                :options="ciudades"
                label="name"
                input-id="ciudades"
                @input="buscarFilter"
                placeholder="Ciudades"
              />

              <v-select
                class="style-chooser"
                v-model="inmueble.selected_tn"
                :options="tipo_negocio"
                label="tipo"
                input-id="ciudades"
                @input="buscarFilter"
                placeholder="Tipo negocio"
              />

              <v-select
                class="style-chooser"
                v-model="inmueble.selected_tinm"
                :options="tipo_inmueble"
                label="tipo"
                input-id="tipo_inmueble"
                @input="buscarFilter"
                placeholder="Ciudades"
              />

              <!-- <button class="btn btn-primary">Find Now</button> -->
            </div>
          </div>

          <div class="col-lg-9 col-sm-8">
            <div class="row">
              <!-- properties -->
              <div
                class="col-lg-4 col-sm-5"
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
                    <div class="status sold">{{ inm.tipo_negocio.tipo }}</div>
                  </div>
                  <h4>
                    <strong>{{ inm.titulo_inmueble }}</strong>
                  </h4>
                  <strong>
                    <span v-if="inm.tipo_negocio.tipo == 'Venta'">
                      <p class="price">
                        Precio: ${{ inm.precio_venta | priceFormattin }}
                      </p>
                    </span>
                    <p
                      v-else-if="inm.tipo_negocio.tipo == 'Alquiler'"
                      class="price"
                    >
                      Precio Alquiler: ${{
                        inm.precio_alquiler | priceFormattin
                      }}
                    </p> </strong
                  ><strong v-if="inm.tipo_negocio.tipo == 'Vender - Alquiler'">
                    <p class="price">
                      Precio Alquiler: ${{
                        inm.precio_alquiler | priceFormattin
                      }}
                    </p>
                    <p class="price">
                      Precio: ${{ inm.precio_venta | priceFormattin }}
                    </p>
                  </strong>

                  <b-button
                    :to="{
                      name: 'detalle',
                      params: { code: userdata.referral_code, id: inm.id },
                    }"
                    class="boton-color"
                    >Detalle</b-button
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
    </b-container>
  </div>
</template>

<script>
import { URL_LOCAL } from "../config.js";

export default {
  name: "homeComponent",
  data() {
    return {
      search: "",
      msg: "Welcome to Your Vue.js App",
      url: URL_LOCAL + "storage/",
      data: null,
      inmueble: {
        selected_dep: null,
        selected_ciu: null,
        selected_tinm: null,
        selected_tn: null,
        search: "",
      },
      departamentos: [],
      tipo_negocio: [],
      tipo_inmueble: [],
      ciudades: [],
      selected: null,
      options: [
        { value: null, text: "Please select some item" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Default Selected Option" },
        { value: "c", text: "This is another option" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },

  computed: {
    inmuebles() {
      return this.$store.state.home.inmuebles;
    },

    userdata() {
      return this.$store.state.home.userdata;
    },

    filteredList() {
      return this.inmuebles.filter((post) => {
        return post.titulo_inmueble
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
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

  filters: {
    priceFormattin: function (value) {
      let format = parseInt(value);
      let dollarUSLocale = Intl.NumberFormat("es-CO");
      let price = dollarUSLocale.format(format);
      return price;
    },
  },

  methods: {
    buscarFilter() {
      let inmueble = { data: this.inmueble, code: this.$route.params.code };
      this.$store
        .dispatch("home/filterInmueble", inmueble)
        .then((response) => {
          this.$store.commit("home/GET_INMUEBLES", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
          this.data = data.response;
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
    deleteDuplicate(arr = []) {
      let array = arr.filter(
        (thing, index, self) =>
          index === self.findIndex((t) => t.id === thing.id)
      );
      return array;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.style-chooser {
  margin-top: 1em;
}
.container-code {
  text-align: center;
  width: 100%;
}
.boton-color {
  background-color: #353535;
  color: aliceblue;
  opacity: 0.7;
}
.img-responsive{
  min-width: 100%;
  min-height: 20rem;
  max-width: 100%;
}
</style>

<style lang="scss">
</style>
