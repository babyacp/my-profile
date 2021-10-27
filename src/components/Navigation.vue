<template>
  <!-- <v-app-bar flat absolute color="transparent" dark height="70px"> -->
  <v-app-bar
    style="overflow: hidden; position: fixed; top: 0; width: 100%"
    flat
    absolute
    color="white"
    dark
    height="70px"
  >
    <v-container>
      <v-layout>
        <div
          class="brown--text"
          style="font-size: 50px; font-family: 'Qahiri', sans-serif"
        >
          babyayu
        </div>

        <v-spacer></v-spacer>

        <v-toolbar-items class="text-right">
          <v-btn text>
            <a class="brown--text" href="#">Home</a>
          </v-btn>
          <v-btn text>
            <a class="brown--text" href="#about-me">About</a>
          </v-btn>
          <v-btn text>
            <a class="brown--text" href="#education">Academic Background</a>
          </v-btn>
          <v-btn text>
            <a class="brown--text" href="#work">Work Experience</a>
          </v-btn>
          <v-btn text>
            <a class="brown--text" href="#portfolio">Portfolio</a>
          </v-btn>
          <v-btn text>
            <a
              class="brown--text"
              href="whatsapp://send?text=Hello&phone=+6282139994797"
              >Hire Me</a
            >
          </v-btn>
        </v-toolbar-items>
      </v-layout>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scope>
a {
  text-decoration: none;
  color: black;
}

@import url("https://fonts.googleapis.com/css2?family=Qahiri&display=swap");
</style>