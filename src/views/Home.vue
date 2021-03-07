<template>
  <div class="home shadow-xl bg-gray-200 mx-auto p-20">
    <h2 class="text-3xl text-blue-600 font-extrabold pb-10">
      Can I haz dad joke?
    </h2>
    <h3 class="h-40 text-black">{{ joke }}</h3>
    <button
      @click="addJoke"
      class="text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full mt-2 focus:outline-none"
    >
      Add Joke
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Home',
  methods: {
    ...mapActions(['setCurrentJoke']),
    addJoke() {
      this.setCurrentJoke();
    }
  },
  computed: {
    ...mapGetters({ joke: 'getCurrentJoke' })
  }
};
</script>

<style scoped>
.home {
  height: 400px;
  max-height: 500px;
}
h3 {
  font-size: 2.5rem;
}
</style>
