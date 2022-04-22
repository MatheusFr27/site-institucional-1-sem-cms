<template>
  <v-alert
    elevation="5"
    class="position-alert"
    v-if="show"
    dense
    :type="typeAlert"
    dismissible
    >{{ text }}</v-alert
  >
</template>

<script>
export default {
  name: "Alert",
  props: {
    typeAlert: {
      type: String,
      default: "info",
      require: false,
    },
    text: {
      type: String,
      default: "",
      require: false,
    },
    show: {
      type: Boolean,
      default: false,
      require: false,
    },
    timeDuration: {
      type: Number,
      default: 5000,
      require: false,
    },
  },

  watch: {
    show(show) {
      if (show) {
        setTimeout(() => {
          this.$emit("invisible");
        }, this.timeDuration);
      }
    },
  },
};
</script>

<style scoped>
.position-alert {
  position: fixed;
  top: 20%;
  right: 5%;
}
</style>