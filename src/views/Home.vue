<template>
  <div class="home">
    <v-card
      id="section-inicio"
      tag="section"
      height="37em"
      rounded="0"
      class="background-image d-flex flex-column align-center justify-center px-14"
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
    <!-- Serviços -->
    <Section
      idSection="section-servicos"
      title="SERVIÇOS"
      background="blueBackground"
    >
      <v-card
        v-for="service in services"
        :key="`service-${service.title}`"
        class="d-flex flex-column align-center ma-3 transparent services-card"
        elevation="0"
        transition="slide-x-transition"
      >
        <v-img :src="getImgUrl(service.img)" style="" width="85"></v-img>
        <h3 class="white--text text-h5 font-weight-medium mb-3">
          {{ service.title | textUpperCase() }}
        </h3>
        <p class="white--text body-2">
          {{ service.description }}
        </p>
      </v-card>
    </Section>
    <!-- Portfolio -->
    <Section idSection="section-portfolio" title="PORTFÓLIO" textColor="black">
      <v-tabs color="deep-purple accent-4" right>
        <v-tab v-for="portfolio in portfolios" :key="portfolio.id">{{
          portfolio.title
        }}</v-tab>

        <v-tab-item v-for="portfolio in portfolios" :key="portfolio.id">
          <v-container fluid>
            <v-row>
              <v-col
                v-for="project in portfolio.projects"
                :key="project.id"
                cols="12"
                md="4"
              >
                <v-hover v-slot="{ hover }">
                  <v-card
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                    class="v-card-portfolio cursor-default"
                    @click="viewProject(project)"
                  >
                    <v-img
                      :alt="project.title"
                      :src="project.image"
                      aspect-ratio="1"
                      height="420px"
                    >
                      <template v-slot:default>
                        <v-expand-x-transition>
                          <v-row
                            v-if="hover"
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <div>
                              <v-icon
                                style="z-index: 100 !important"
                                x-large
                                color="#4d79ff"
                                >mdi-eye-arrow-left-outline</v-icon
                              >
                            </div>
                          </v-row>
                        </v-expand-x-transition>
                      </template>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </Section>
    <Section idSection="section-contato">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, adipisci
      atque id veritatis consequuntur sequi voluptate perferendis vero, impedit
      veniam minima eligendi nobis dignissimos nesciunt!</Section
    >
    <!-- <v-img alt="campo cinza" src="../assets/img/banner_bg.jpg" max-height="38em" /> -->
  </div>
</template>

<script>
import Section from "../components/Section.vue";

export default {
  name: "Home",
  components: {
    Section,
  },
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
  computed: {
    portfolios: {
      get() {
        return this.$store.getters["getPortfolios"];
      },
    },
  },
  methods: {
    getImgUrl(img) {
      var images = require.context("../assets/svg/", false, /\.svg$/);
      return images("./" + img + ".svg");
    },
    viewProject(item) {
      this.$store.dispatch("setProjectItem", item);
      this.$router.push({ path: `/sobre-portfolio/${item.uuid}` });
    },
  },
};
</script>

<style scoped>
.background-image {
  width: 100%;
  background: url(../assets/img/banner_bg.jpg) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
  background-size: 100% 100%;
}

.services-card {
  width: 30% !important;
}

.v-card-portfolio {
  transition: opacity 0.4s ease-in-out;
}

.v-card-portfolio:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}

@media (max-width: 959px) {
  .services-card {
    width: 100% !important;
  }
}
</style>
