<template>
  <v-app>
    <Home />
    <!-- <Navigation />
    <v-main>
      <router-view />
    </v-main> -->
  </v-app>
</template>

<script>
// import Navigation from "./components/Navigation.vue";
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    // Navigation,
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
