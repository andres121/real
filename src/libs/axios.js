import Vue from "vue";

// axios
import axios from "axios";
import { URL_LOCAL } from '../config.js'
const axiosIns = axios.create({
  // You can add your headers here
  // ====================== ==========

  //baseURL: process.env.API_URI,
  // baseURL: 'https://web.addy.la/',

  // baseURL: "https://app.addy.la/",
  baseURL: URL_LOCAL,
  //setToken: localStorage.getItem("accessToken"),
  //timeout: 1000,
  headers: { "Contenct-type": "multipart/form-data" },
});

Vue.prototype.$http = axiosIns;

export default axiosIns;