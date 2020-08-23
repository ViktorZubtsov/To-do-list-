import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import store from './store'
import 'materialize-css/dist/js/materialize.min.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('date', dateFilter)


firebase.initializeApp( {
  apiKey: "AIzaSyC1MFtpGE-SyOwhcV7J3jdX0-XX5Ht46to",
  authDomain: "to-do-list-b8daf.firebaseapp.com",
  databaseURL: "https://to-do-list-b8daf.firebaseio.com",
  projectId: "to-do-list-b8daf",
  storageBucket: "to-do-list-b8daf.appspot.com",
  messagingSenderId: "1074660760935",
  appId: "1:1074660760935:web:48c5592cca841ece73e3c2",
  measurementId: "G-64Q89N3Y59"
})
let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})





