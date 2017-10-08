// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import sumberApi from 'firebase'

const config = {
  databaseURL: 'https://mango-fire.firebaseio.com',
  projectId: 'mango-fire'
}

Vue.prototype.$db = sumberApi.initializeApp(config).database().ref('siMangga')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
