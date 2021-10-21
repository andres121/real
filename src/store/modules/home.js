import axios from "@axios";

export default {
  namespaced: true,
  state: {
    inmuebles: [],
    configuracion: [],
    userdata: []
  },

  getters: {},

  mutations: {
    GET_INMUEBLES(state, val) {
      state.inmuebles = val;
    },
    GET_CONFIGURACION(state, val) {
      state.configuracion = val;
    },
    GET_USERDATA(state, val) {
      state.userdata = val;
    },

   
  },

  actions: {
    getInmuebles(ctx, referer) {
      return new Promise((resolve, reject) => {
        axios
          .get("api/inmueble/" + referer)
          .then((response) => {

            ctx.commit("GET_INMUEBLES", response.data.data.inmuebles);
            ctx.commit("GET_CONFIGURACION", response.data.data.configuracion);
            ctx.commit("GET_USERDATA", response.data.data.userdata);

            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    getInmueble(ctx, code ) {
     
      return new Promise((resolve, reject) => {
        axios
          .get("api/inmueble_id/" + code)
          .then((response) => {
            resolve(response.data.data.inmueble);
          })
          .catch((error) => {
            reject(error);
          });
      });
    }




  },
};
