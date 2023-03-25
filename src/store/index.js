import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Todos from './modules/todos';

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Todos
  }
});
