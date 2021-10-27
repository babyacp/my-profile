<template>
  <v-img src="@/assets/about1.png">
    <div
      class="brown--text"
      style="font-weight: 950; font-size: 65px; margin: 100px 0 0 250px"
    >
      ABOUT ME
    </div>
    <v-container>
      <v-row no-gutters style="position: relative">
        <v-col cols="5" sm="6" md="8">
          <v-card>
            <div style="position: absolute; margin: 110px 0 0 100px">
              <v-avatar color="grey lighten-2" size="270" height="300px">
                <img src="@/assets/baby-nobg.png" alt="Baby Ayu" />
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        <v-col cols="4" md="9">
          <div
            class="brown--text"
            style="
              width: 400px;
              height: 200px;
              text-align: justify;
              font-size: 25px;
              margin: 140px 15px 0 600px;
              font-family: 'Signika Negative', sans-serif;
            "
          >
            I'm an entrepreneur who have experience in building a business and
            increasing my ability in the IT field that is being a Vue JS
            Developer. Besides that, I am a person who want to always learn new
            things.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
export default {
  name: "AboutMeComp",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Festive&family=Raleway:wght@600&family=Signika+Negative&family=Yanone+Kaffeesatz&display=swap");
</style>