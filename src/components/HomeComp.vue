<template>
  <div class="home">
    <!-- <v-img dark src="@/assets/home.png"> -->
    <!-- <div
        class="subheading font-weight-regular brown--text ma-17"
        style="text-align: center"
        xs8
      >
        Below are some of projects I've worked on.
        <br />
        Thanks for stopping by!
        <br />
        Read more about me, here.
        <br />
        <v-btn class="white--text" href="#about-me">GET STARTED </v-btn>
      </div> -->
    <!-- </v-img> -->
    <v-parallax height="700" src="@/assets/home.png">
      <div
        class="brown--text"
        style="
          text-align: center;
          font-family: 'Festive', cursive;
          font-size: 110px;
          font-weight: 950;
          letter-spacing: 15px;
          margin: 50px 0 0 100px;
        "
      >
        hello, there.
      </div>

      <div
        class="heading brown--text"
        style="
          text-align: center;
          font-family: 'Yanone Kaffeesatz', sans-serif;
          font-size: 50px;
          letter-spacing: 15px;
        "
      >
        I'M BABY AYU
      </div>
      <div
        class="subheading font-weight-regular brown--text ma-20"
        style="
          text-align: center;
          font-family: 'Signika Negative', sans-serif;
          font-size: 25px;
        "
        xs8
      >
        Below are some of projects I've worked on.
        <br />
        Thanks for stopping by!
        <br />
        Read more about me, here.
        <br />
        <v-btn rounded class="brown--text" href="#about-me">GET STARTED </v-btn>
      </div>
    </v-parallax>
    <section id="about-me">
      <AboutMeComp />
    </section>
    <section id="education">
      <Education />
    </section>
    <section id="work">
      <Work />
    </section>
    <section id="portfolio">
      <PortofolioComp />
    </section>
    <Footer />
  </div>
</template>

<script>
import "./style.css";
import AboutMeComp from "./AboutMeComp.vue";
import Education from "./Education.vue";
import Work from "./WorkComp.vue";
import PortofolioComp from "./PortofolioComp.vue";
import HireMe from "./HireMe.vue";
import Footer from "./Footer.vue";

export default {
  name: "Home",
  components: {
    Footer,
    HireMe,
    PortofolioComp,
    AboutMeComp,
    Education,
    Work,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Festive&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Festive&family=Raleway:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Festive&family=Raleway:wght@600&family=Yanone+Kaffeesatz&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Festive&family=Raleway:wght@600&family=Signika+Negative&family=Yanone+Kaffeesatz&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Festive&display=swap");
</style>