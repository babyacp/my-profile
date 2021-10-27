<template>
  <div class="about">
    <v-img dark src="@/assets/about.png" max-height="600">
      <v-container class="mt-10 brown--text">
        <v-layout wrap>
          <v-flex xs7>
            <div class="display-2" font-weight-bold>About Me.</div>
          </v-flex>
          <v-flex xs7 class="mt-7">
            <div class="body-1">{{ aboutText }}</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>
