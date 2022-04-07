<template>
  <section>
    <v-card class="my-10 pa-1" elevation="4" rounded="0" color="blueBackground">
      <h1 class="text-h3 white--text mb-2">{{ project.title }}</h1>
    </v-card>

    <div class="ma-6">
      <v-card
        elevation="4"
        width="100%"
        class="d-flex justify-center align-center"
      >
        <v-carousel :cycle="cycle" delimiter-icon="mdi-minus">
          <v-carousel-item
            v-for="image in project.images"
            :key="image.id"
            :src="image.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-card>

      <div class="mt-5 d-flex flex-column">
        <h2>Descrição:</h2>
        <p class="mx-7">{{ project.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cycle: true,
    };
  },
  created() {
    this.$store.dispatch("setProjectItem", this.$route.params.uuid);
  },
  computed: {
    project: {
      get() {
        return this.$store.getters["getProjectItem"];
      },
    },
  },
};
</script>

<style></style>
