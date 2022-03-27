<template>
  <div class="home">
    <v-card
      id="section-inicio"
      tag="section"
      height="37em"
      rounded="0"
      class="container d-flex flex-column align-center justify-center px-14"
    >
      <v-card
        max-width="70%"
        rounded="0"
        elevation="0"
        color="greyBackground py-2 px-16"
      >
        <h1 class="white--text text-h4 text-center font-weight-thin">
          {{
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, quaerat?"
              | textUpperCase()
          }}
        </h1>
      </v-card>
    </v-card>
    <v-main
      id="section-servicos"
      class="blueBackground pa-6 d-flex flex-column"
    >
      <div class="mb-10">
        <h2 class="white--text font-weight-light text-h4 mb-1">SERVIÇOS</h2>
        <v-divider class="divider white" dark></v-divider>
      </div>
      <section
        class="d-flex flex-column flex-md-row align-start justify-space-around"
      >
        <v-card
          v-for="service in services"
          :key="`service-${service.title}`"
          class="d-flex flex-column align-center ma-3 transparent services-card"
          elevation="0"
        >
          <v-img :src="getImgUrl(service.img)" style="" width="85"></v-img>
          <h3 class="white--text text-h5 font-weight-medium mb-3">
            {{ service.title | textUpperCase() }}
          </h3>
          <p class="white--text body-2">
            {{ service.description }}
          </p>
        </v-card>
      </section>
    </v-main>
    <v-main> jsdbsdh dghsd vsgd svdgsdvg </v-main>
    <v-main id="section-contato"> jsdbsdh dghsd vsgd svdgsdvg </v-main>
    <!-- <v-img alt="campo cinza" src="../assets/img/banner_bg.jpg" max-height="38em" /> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      services: [
        {
          title: "lorem ipsum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quos perferendis adipisci repellat veritatis delectus est minima animi! Tempore doloremque ipsum deserunt ipsam tempora! Quasi, libero repellendus. Illum ut, sint odit consectetur debitis sit consequatur ipsa!",
          img: "box",
        },
        {
          title: "lorem ipsum 2",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, quo odit laudantium tempora veritatis necessitatibus placeat libero nihil odio aliquid dolorum error vero, provident sed ratione.",
          img: "check-circle",
        },
        {
          title: "lorem ipsum 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quas porro iusto. Nisi libero dicta tempore non earum!",
          img: "synchronize",
        },
      ],
    };
  },
  methods: {
    getImgUrl(img) {
      var images = require.context("../assets/svg/", false, /\.svg$/);
      return images("./" + img + ".svg");
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  background: url(../assets/img/banner_bg.jpg) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
  background-size: 100% 100%;
}

.divider {
  width: 8%;
  padding: 0.05em 0;
}

.services-card {
  width: 30% !important;
}

@media (max-width: 959px) {
  .services-card {
    width: 100% !important;
  }
}
</style>
