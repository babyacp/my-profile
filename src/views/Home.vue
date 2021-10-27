<template>
  <div>
    <HomeComp />
    <Navigation />
  </div>
</template>

<script>
import HomeComp from "../components/HomeComp.vue";
import Navigation from "../components/Navigation.vue";

export default {
  name: "Home",

  components: {
    HomeComp,
    Navigation,
  },
};
</script>
