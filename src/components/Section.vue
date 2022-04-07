<template>
  <v-main :id="idSection" :class="background + ' pa-6 d-flex flex-column'">
    <div class="mb-10">
      <h2 :class="`${textColor}--text` + ' font-weight-light text-h4 mb-1'">
        {{ title | textUpperCase() }}
      </h2>
      <v-divider :class="textColor + ' divider'"></v-divider>
    </div>
    <section
      class="d-flex flex-column flex-md-row align-start justify-space-around"
    >
      <slot></slot>
    </section>
  </v-main>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
      require: true,
    },
    idSection: {
      type: String,
      default: "",
      require: true,
    },
    background: {
      type: String,
      default: "white",
      require: false,
    },
    textColor: {
      type: String,
      default: "white",
      require: false,
    },
  },
};
</script>

<style scoped>
.divider {
  width: 8%;
  padding: 0.05em 0;
}
</style>
