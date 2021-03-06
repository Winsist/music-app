import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'


import 'common/stylus/index.styl'
import 'swiper/dist/css/swiper.css'


fastclick.attach(document.body);
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  // loading: 'common/images/main.png'
  loading: require('common/images/main.png')
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
