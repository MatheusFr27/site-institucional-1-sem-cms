import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projectItem: {},
    portfolios: [
      {
        id: 1,
        title: "Torres",
        projects: [
          {
            id: 1,
            uuid: "sdufdyfg-45848fdf-21ksajbsj",
            title: "Torre Bridge",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, provident illum doloremque inventore excepturi maiores quidem quo eius perspiciatis explicabo ipsa voluptatum nostrum incidunt minus aut soluta voluptatibus nam. Minima!",
            image: require("../assets/img/tower-bridge.jpg"),
            images: [
              {
                id: 1,
                src: require("../assets/img/tower-bridge-1.jpg"),
              },
              {
                id: 2,
                src: require("../assets/img/tower-bridge-2.jpg"),
              },
              {
                id: 3,
                src: require("../assets/img/tower-bridge-3.jpg"),
              },
            ],
            created_at: "2019-12-02T20:01:00.283041Z",
            updated_at: "2019-12-02T20:01:00.283041Z",
          },
          {
            id: 2,
            uuid: "xdbsdgh-433y7r7-sdhsgdggs",
            title: "Eiffel tower",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, provident illum doloremque inventore.",
            image: require("../assets/img/eiffel-tower.jpg"),
            images: [
              {
                id: 1,
                src: require("../assets/img/eiffel-tower-1.jpg"),
              },
              {
                id: 2,
                src: require("../assets/img/eiffel-tower-2.jpg"),
              },
              {
                id: 3,
                src: require("../assets/img/eiffel-tower-3.jpg"),
              },
            ],
            created_at: "2019-12-02T20:01:00.283041Z",
            updated_at: "2019-12-02T20:01:00.283041Z",
          },
          {
            id: 3,
            uuid: "xdbsdgh-46edfdf5-aacnasaass",
            title: "Torre Big Ben",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, provident illum.",
            image: require("../assets/img/big-ben.jpg"),
            images: [
              {
                id: 1,
                src: require("../assets/img/big-ben-1.jpg"),
              },
              {
                id: 2,
                src: require("../assets/img/big-ben-2.jpg"),
              },
              {
                id: 3,
                src: require("../assets/img/big-ben-3.jpg"),
              },
              {
                id: 4,
                src: require("../assets/img/big-ben-4.jpg"),
              },
            ],
            created_at: "2019-12-02T20:01:00.283041Z",
            updated_at: "2019-12-02T20:01:00.283041Z",
          },
        ],
      },
      {
        id: 2,
        title: "Prédios",
        projects: [
          {
            id: 1,
            uuid: "xdbsdgh-46edfdf5-211edndjss",
            title: "Prédio Petronas",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, provident illum doloremque inventore.",
            image: require("../assets/img/petronas-towers.jpg"),
            images: [
              {
                id: 1,
                src: require("../assets/img/petronas-towers-1.jpg"),
              },
              {
                id: 2,
                src: require("../assets/img/petronas-towers-2.jpg"),
              },
            ],
            created_at: "2019-12-02T20:01:00.283041Z",
            updated_at: "2019-12-02T20:01:00.283041Z",
          },
          {
            id: 2,
            uuid: "xdbsdgh-46edfdf5-20dssldsnj",
            title: "Empire State Building",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, provident illum doloremque inventore.",
            image: require("../assets/img/empire-state-building.jpg"),
            images: [
              {
                id: 1,
                src: require("../assets/img/empire-state-building-1.jpg"),
              },
            ],
            created_at: "2019-12-02T20:01:00.283041Z",
            updated_at: "2019-12-02T20:01:00.283041Z",
          },
          {
            id: 3,
            uuid: "xdbsdgh-46edfdf5-2074473de",
            title: "Manhattan",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, provident illum doloremque inventore.",
            image: require("../assets/img/manhattan.jpg"),
            images: [
              {
                id: 1,
                src: require("../assets/img/manhattan-1.jpg"),
              },
              {
                id: 2,
                src: require("../assets/img/manhattan-2.jpg"),
              },
            ],
            created_at: "2019-12-02T20:01:00.283041Z",
            updated_at: "2019-12-02T20:01:00.283041Z",
          },
        ],
      },
    ],
  },
  mutations: {
    SET_PROJECT_ITEM(state, data) {
      state.projectItem = data;
    },
  },
  actions: {
    setProjectItem({ commit, state }, uuid) {
      let item = {};

      for (let portfolio of state.portfolios) {
        let itemSelected = portfolio.projects.find((el) => el.uuid == uuid);

        if (itemSelected) {
          item = itemSelected;
        }
      }

      commit("SET_PROJECT_ITEM", item);
    },
  },
  getters: {
    getProjectItem(state) {
      return state.projectItem;
    },
    getPortfolios(state) {
      return state.portfolios;
    },
  },
  modules: {},
});
