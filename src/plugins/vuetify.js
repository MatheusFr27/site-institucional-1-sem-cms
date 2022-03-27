import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        greyBackground: "#4B565D",
        blueBackground: '#4bcaff'
      },
    },
  },
});
