<template>
  <v-img src="@/assets/porto2.png" height="1300px">
    <div
      class="brown--text"
      style="
        font-weight: 950;
        font-size: 65px;
        margin: 100px 0 0 0px;
        text-align: center;
      "
    >
      PORTFOLIO
    </div>
    <!-- <v-timeline class="brown--text">
      <v-timeline-item v-for="(date, i) in portos" :key="i" color="amber" small>
        <template v-slot:opposite>
          <span :class="` font-weight-bold `" v-text="date.date"></span>
        </template>
        <v-card
          class="brown--text"
          justify="space-between"
          style="width: 500px; margin: 0 0px 0 0px"
        >
          <v-card-title v-text="portos.title">
            {{ portos.title }}
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
            imperdiet nec ut, sed euismod convenire principes at. Est et nobis
            iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae.
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline> -->

    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item color="brown lighten-4" fill-dot right small>
        <v-card style="width: 450px">
          <v-card-title class="brown lighten-4">
            <h2 class="text-h4 brown--text font-weight-light">Baby's Store</h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="10" class="brown--text">
                Baby's Store is an e-Commerce website which employs wordpress
                technology.
              </v-col>
              <v-col class="hidden-sm-and-down text-right" md="2">
                <v-btn icon color="orange" href="http://babyacp26.xyz/">
                  <v-icon>mdi-cursor-default-click</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="brown lighten-4" fill-dot left small>
        <v-card style="width: 450px; margin: 0px 0px 0px 130px">
          <v-card-title class="brown lighten-4 justify-end">
            <h2 class="text-h4 mr-4 brown--text font-weight-light">
              Blogger Website
            </h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="10"
                class="brown--text"
                style="align-justify"
              >
                Blogger Website is a web application that allows users to post
                photos and describe the photo. User can edit and delete the post
                according to the desire of their hearts.
              </v-col>
              <v-col class="hidden-sm-and-down text-right" md="2">
                <v-btn
                  icon
                  color="orange"
                  href="https://final-project-40692.web.app/"
                >
                  <v-icon>mdi-cursor-default-click</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="brown lighten-4" fill-dot right small>
        <v-card style="width: 450px">
          <v-card-title class="brown lighten-4">
            <h2 class="text-h4 brown--text font-weight-light">
              List Bidding Project
            </h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="10"
                class="brown--text"
                style="align-justify"
              >
                List Bidding Project is a web application which consists one of
                the challange project from Candradimuka Jabar Coding Camp.
              </v-col>
              <v-col class="hidden-sm-and-down text-right" md="2">
                <v-btn
                  icon
                  color="orange"
                  href="https://tugas-akhir-freelance.web.app/"
                >
                  <v-icon>mdi-cursor-default-click</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="brown lighten-4" fill-dot left small>
        <v-card style="width: 450px; margin: 0px 0px 0px 130px">
          <v-card-title class="brown lighten-4 justify-end">
            <h2 class="text-h4 mr-4 brown--text font-weight-light">
              Baby's Profile
            </h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="10"
                class="brown--text"
                style="align-justify"
              >
                Baby's Profile is a web application which contains about my
                profile.
              </v-col>
              <v-col class="hidden-sm-and-down text-right" md="2">
                <v-btn icon color="orange" href="#">
                  <v-icon>mdi-cursor-default-click</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-img>
</template> 

<script>
export default {
  name: "PortofolioComp",
  data: () => ({
    portos: [
      {
        date: "Aug 28, 2021",
        title: "Baby's Store",
      },
      {
        date: "Sept 26, 2021",
        title: "Blogger Website",
      },
      {
        date: "Oct 20, 2021",
        title: "List Bidding Project",
      },
      {
        date: "1990",
        title: "Baby's Profile",
      },
    ],
  }),
};
</script>

<style>
</style>