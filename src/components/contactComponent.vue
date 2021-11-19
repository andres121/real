<template>
  <div class="container">
    <div class="spacer">
      <div class="row contact">
        <div class="col-lg-6 col-sm-6">
          <b-input
            type="text"
            v-model="data.full_name"
            class="form-control"
            placeholder="Nombre completo"
          />
          <input
            type="text"
            v-model="data.email"
            class="form-control"
            placeholder="Correo electronico"
          />
          <input
            type="text"
            v-model="data.celular"
            class="form-control"
            placeholder="Numero de celular"
          />
          <textarea
            rows="6"
            v-model="data.message"
            class="form-control"
            placeholder="Mensage"
          ></textarea>
          <b-button @click="addContact()" class="btn btn-info" name="Submit">
            Enviar
          </b-button>
        </div>
        <div class="col-lg-6 col-sm-6">
          <div class="well">
            <GmapMap
              :center="center"
              :zoom="18"
              style="width: 100%; height: 34rem"
            >
              <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                @click="center = m.position"
              />
            </GmapMap>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactComponent",

  data() {
    return {
      markers: [],
      center: null,
      data: {
        user_id: null,
        full_name: null,
        email: null,
        celular: null,
        message: null,
      },
      currentPlace: null,
    };
  },

  computed: {
    userdata() {
      return this.$store.state.home.userdata;
    },

    configuracion() {
      return this.$store.state.home.configuracion;
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

    this.addMarker();
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
    addMarker() {
      const marker = {
        lat: parseFloat(this.configuracion.latitud),
        lng: parseFloat(this.configuracion.longitud),
      };
      this.markers.push({
        position: marker,
        title: this.configuracion.direccion,
      });
      this.center = marker;
    },

    addContact() {
      this.data.user_id = this.userdata.id;
      if (this.data.email == null) {
        this.messageAlert("Correo es obligatorio");
      }
      if (this.data.celular == null) {
        this.messageAlert("El Celular es obligatorio");
      }
      if (this.data.message == null) {
        this.messageAlert("El mensaje es obligatorio");
      }
      if (this.data.full_name == null) {
        this.messageAlert("El nombre es obligatorio");
      }

      if (
        this.data.full_name != null &&
        this.data.message != null &&
        this.data.celular != null &&
        this.data.email != null
      ) {
        this.$store
          .dispatch("contact/addContact", this.data)
          .then((data) => {
            (this.data = {
              user_id: null,
              full_name: null,
              email: null,
              celular: null,
              message: null,
            }),
              this.$swal({
                title: "Muy bien!!!",
                text: "Nos pondremos en contacto con tigo",
                icon: "info",
                customClass: {
                  confirmButton: "btn btn-primary",
                },
                confirmButtonText: "Aceptar",
                buttonsStyling: false,
              });
          })
          .catch((error) => {
            this.messageAlert("Algo salio mal");
          });
      }
    },
    messageAlert(error) {
      this.$swal({
        title: "Ups!!!",
        text: error,
        icon: "danger",
        customClass: {
          confirmButton: "btn btn-danger",
        },
        confirmButtonText: "Aceptar",
        buttonsStyling: false,
      });
    },
  },
};
</script>

<style>
</style>