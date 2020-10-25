import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import axios from 'axios'
import firebase from "firebase"

// firebase設定
Vue.config.productionTip = false
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCdkrusRo0EpOHoat_01-EgDTCR9QfYqww",
  authDomain: "vuejs-http-5308d.firebaseapp.com",
  databaseURL: "https://vuejs-http-5308d.firebaseio.com",
  projectId: "vuejs-http-5308d",
  storageBucket: "vuejs-http-5308d.appspot.com",
  messagingSenderId: "257878399905",
  appId: "1:257878399905:web:555a2174685ca25e4849e0"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

// 元々の設定
Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vuejs-http-5308d/databases/(default)/documents";

// router.beforeEach((to, from, next) => {
//   if (store.getters.idToken) {
//     next();
//   } else {
//     next('/pages/login');
//   }
// });

const interceptorsRequest = axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
const interceptorsResponse = axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.request.eject(interceptorsRequest);
axios.interceptors.response.eject(interceptorsResponse);

// store.dispatch('autoLogin').then(() => {
//   new Vue({
//     el: '#app',
//     router,
//     store,
//     icons,
//     template: '<App/>',
//     components: {
//       App
//     }
//   });
// })
  new Vue({
    el: '#app',
    router,
    store,
    icons,
    template: '<App/>',
    components: {
      App
    }
  });
