<template>
  <v-app-bar height="95em" app color="blue-grey darken-3" dark>
    <router-link to="/">
      <v-img
        alt="Vuetify Logo"
        class="shrink ml-4"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
    </router-link>

    <v-spacer></v-spacer>

    <div class="d-none d-sm-flex flex-row">
      <template v-if="$route.name == 'Home'">
        <v-btn
          class="buttons mx-2"
          text
          v-for="menu in menus"
          :key="`menu-${menu.title}`"
          v-scroll-to="`#${menu.refElement}`"
        >
          <span>{{ menu.title }}</span>
        </v-btn>
      </template>
      <template v-else>
        <router-link to="/" class="text-decoration-none">
          <v-btn
            class="buttons mx-2"
            text
            v-for="menu in menus"
            :key="`menu-${menu.title}`"
          >
            <span>{{ menu.title }}</span>
          </v-btn>
        </router-link>
      </template>
    </div>

    <v-menu class="d-flex d-sm-none" bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="d-flex d-sm-none" dark icon v-bind="attrs" v-on="on">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>

      <v-list v-if="$route.name == 'Home'">
        <v-list-item
          v-for="menu in menus"
          :key="`menu-${menu.title}-responsive`"
        >
          <v-btn
            v-scroll-to="`#${menu.refElement}`"
            class="buttons"
            width="100%"
            text
          >
            <span>{{ menu.title }}</span>
          </v-btn>
        </v-list-item>
      </v-list>
      <v-list v-else>
        <v-list-item
          v-for="menu in menus"
          :key="`menu-${menu.title}-responsive`"
        >
          <router-link to="/" class="text-decoration-none">
            <v-btn class="buttons" width="100%" text>
              <span>{{ menu.title }}</span>
            </v-btn>
          </router-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menus: [
        { title: "INÍCIO", refElement: "section-inicio" },
        { title: "SERVIÇOS", refElement: "section-servicos" },
        { title: "PORTFÓLIO", refElement: "section-portfolio" },
        { title: "CONTATO", refElement: "section-contato" },
      ],
    };
  },
};
</script>

<style scoped>
.buttons:hover {
  background-color: white;
  color: #4bcaff;
}
</style>
