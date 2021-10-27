<template>
  <div class="portfolio">
    <v-img dark src="@/assets/porto.png" max-height="600">
      <v-container class="mt-10">
        <v-layout wrap>
          <v-flex xs7>
            <div class="display-2" font-weight-bold>Portfolio</div>
          </v-flex>
          <v-flex xs7 class="mt-7">
            <v-layout>
              <v-flex>
                <v-card flat color="brown lighten-5">
                  <v-card-title>
                    <v-layout>
                      <v-flex>
                        <v-card
                          style="border-radius: 30px"
                          color="teal lighten-4"
                          weight="100px"
                          height="100px"
                        >
                          <v-img src="" />
                        </v-card>
                      </v-flex>
                      <v-flex>
                        <div class="brown--text">Name Application</div>
                        <v-chip class="brown--text" pill dark color="#E0F2F1"
                          >Free</v-chip
                        >
                        <div>
                          <v-btn icon>
                            <v-icon>mdi-account</v-icon>
                          </v-btn>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-card-title>
                  <v-card-text color="brown lighten-5"
                    >{{ description }}
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
            <div class="body-1">{{ aboutText }}</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
};
</script>
