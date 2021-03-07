import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = 'https://icanhazdadjoke.com';
const headers = { Accept: 'application/json' };

export default new Vuex.Store({
  state: {
    currentJoke: 'This is a joke',
    allJokes: []
  },
  mutations: {
    //sychronous way to update the state in vuex store
    setCurrentJoke(state, payload) {
      state.currentJoke = payload;
      state.allJokes.push(payload);
    }
  },
  actions: {
    //asychronous
    async setCurrentJoke(state) {
      const joke = fetch(url, { headers });
      const j = await (await joke).json();
      state.commit('setCurrentJoke', j.joke);
    }
  },
  getters: {
    getCurrentJoke: state => state.currentJoke
  },
  modules: {}
});
