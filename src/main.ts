import Vue from "vue";
import App from "./App.vue";
import { makeServer } from "./server";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

Vue.config.productionTip = false;

if (process.env.NODE_ENV === "development") {
  makeServer();
}

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
