import Vue from "vue";
import Vuex from "vuex";
import authModule from "./modules/auth";
import usersModule from "./modules/users";
import productsModule from "./modules/products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    processing: false,
    loaded: false,
    alert: {
      type: "success",
      show: false,
      message: ""
    }
  },
  mutations: {
    setLoader: (state, loaded) => {
      state.loaded = loaded;
    },
    setAlertMessage: (state, data) => {
      state.alert.type = data.type;
      state.alert.show = data.show;
      state.alert.message = data.message;
      setTimeout(() => {
        state.alert.type = "success";
        state.alert.show = false;
        state.alert.message = "";
      }, data.timeout);
    }
  },
  modules: { authModule, usersModule, productsModule },
  actions: {}
});
