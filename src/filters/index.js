import Vue from "vue";

Vue.filter("textUpperCase", function (value) {
  if (!value) return "";
  
  return value.toUpperCase();
});
