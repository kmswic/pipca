import Vue from 'vue'
import VueMdl from 'vue-mdl'
import App from './App'
import 'material-design-lite'

/* eslint-disable no-new */
Vue.use(VueMdl);
new Vue({
  el: 'body',
  components: { App }
});
