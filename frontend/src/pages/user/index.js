import Vue from 'vue';
import User from './user.vue';

new Vue({
  el: '#root',
  template: '<User />',
  components: {
    User,
  },
});
