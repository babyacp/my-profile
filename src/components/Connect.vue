<template>
  <v-card
    id="background"
    color="brown lighten-4"
    dark
    class="mb-12 mr-12 ml-12"
  >
    <template v-slot:progress>
      <v-progress-linear
        absolute
        color="amber lighten-4"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-form>
      <v-container>
        <div class="text-center mb-5">
          <h1 class="white--text" id="createOutBlog">Let's Connect Me</h1>
        </div>
        <v-row>
          <v-col cols="12" md="20">
            <v-text-field v-model="name" filled label="Name"></v-text-field>
          </v-col>
          <br />
          <v-divider></v-divider>
          <v-col cols="12" md="20">
            <v-text-field
              v-model="phoneNumber"
              type="number"
              filled
              label="Phone Number"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="20">
            <v-text-field v-model="email" filled label="Email"></v-text-field>
          </v-col>

          <v-divider></v-divider>
          <router-link to="/confirm">
            <v-btn id="buttonSubmit" class="mr-4 mb-3" color="brown lighten-1"
              >Let's Connect!
            </v-btn>
          </router-link>
          <v-btn @click="clear" color="blue-grey lighten-2">Cancel</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "connect",
  data() {
    return {
      name: "",
      phoneNumber: "",
      email: "",
    };
  },

  methods: {
    submit() {
      const newBlog = {
        name: this.name,
        phoneNumber: this.phoneNumber,
        email: this.email,
      };

      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.$router.push("/greeting");
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Festive&family=Raleway:wght@600&family=Signika+Negative&family=Yanone+Kaffeesatz&display=swap");
</style>