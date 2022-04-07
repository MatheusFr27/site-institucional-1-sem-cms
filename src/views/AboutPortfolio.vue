<template>
  <section class="ma-6">
    <h1 class="text-h3 mb-2">{{ project.title }}</h1>

    <v-divider class="mb-6"></v-divider>

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

    <div class="mt-5">
      <h2>Descrição:</h2>
      <br />
      <p>{{ project.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
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
