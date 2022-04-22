import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projectItem: {},
    portfolios: [
      {
        id: 1,
        title: "landscape",
        projects: [
          {
            id: 1,
            uuid: "sdufdyfg-45848fdf-21ksajbsj",
            title: "Montanhas",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, provident illum doloremque inventore excepturi maiores quidem quo eius perspiciatis explicabo ipsa voluptatum nostrum incidunt minus aut soluta voluptatibus nam. Minima!",
            image:
              "https://cdn.pixabay.com/photo/2022/02/12/14/33/fjord-7009076_960_720.jpg",
            images: [
              {
                id: 1,
                src: "https://cdn.pixabay.com/photo/2022/02/12/14/33/fjord-7009076_960_720.jpg",
              },
              {
                id: 2,
                src: "https://cdn.pixabay.com/photo/2022/02/12/14/33/fjord-7009076_960_720.jpg",
              },
              {
                id: 3,
                src: "https://cdn.pixabay.com/photo/2022/02/12/14/33/fjord-7009076_960_720.jpg",
              },
            ],
            created_at: "2019-12-02T20:01:00.283041Z",
            updated_at: "2019-12-02T20:01:00.283041Z",
          },
          {
            id: 2,
            uuid: "xdbsdgh-433y7r7-sdhsgdggs",
            title: "Farming",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, provident illum doloremque inventore.",
            image:
              "https://cdn.pixabay.com/photo/2022/01/23/03/18/farming-6959638_960_720.jpg",
            images: [
              {
                id: 1,
                src: "https://cdn.pixabay.com/photo/2022/02/12/14/33/fjord-7009076_960_720.jpg",
              },
              {
                id: 2,
                src: "https://cdn.pixabay.com/photo/2022/02/12/14/33/fjord-7009076_960_720.jpg",
              },
              {
                id: 3,
                src: "https://cdn.pixabay.com/photo/2022/02/12/14/33/fjord-7009076_960_720.jpg",
              },
            ],
            created_at: "2019-12-02T20:01:00.283041Z",
            updated_at: "2019-12-02T20:01:00.283041Z",
          },
          {
            id: 3,
            uuid: "xdbsdgh-46edfdf5-aacnasaass",
            title: "Montanhas 2",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, provident illum.",
            image:
              "https://cdn.pixabay.com/photo/2022/03/30/19/19/mountain-7101737_960_720.jpg",
            images: [
              {
                id: 1,
                src: "https://cdn.pixabay.com/photo/2022/02/12/14/33/fjord-7009076_960_720.jpg",
              },
              {
                id: 2,
                src: "https://cdn.pixabay.com/photo/2022/02/12/14/33/fjord-7009076_960_720.jpg",
              },
              {
                id: 3,
                src: "https://cdn.pixabay.com/photo/2022/02/12/14/33/fjord-7009076_960_720.jpg",
              },
            ],
            created_at: "2019-12-02T20:01:00.283041Z",
            updated_at: "2019-12-02T20:01:00.283041Z",
          },
        ],
      },
      {
        id: 2,
        title: "city",
        projects: [
          {
            id: 1,
            uuid: "xdbsdgh-46edfdf5-211edndjss",
            title: "Cidade 1",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, provident illum doloremque inventore.",
            image:
              "https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_960_720.jpg",
            images: [
              {
                id: 1,
                src: "https://cdn.pixabay.com/photo/2022/02/12/14/33/fjord-7009076_960_720.jpg",
              },
              {
                id: 2,
                src: "https://cdn.pixabay.com/photo/2022/02/12/14/33/fjord-7009076_960_720.jpg",
              },
              {
                id: 3,
                src: "https://cdn.pixabay.com/photo/2022/02/12/14/33/fjord-7009076_960_720.jpg",
              },
            ],
            created_at: "2019-12-02T20:01:00.283041Z",
            updated_at: "2019-12-02T20:01:00.283041Z",
          },
          {
            id: 2,
            uuid: "xdbsdgh-46edfdf5-20dssldsnj",
            title: "Prédio",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, provident illum doloremque inventore.",
            image:
              "https://cdn.pixabay.com/photo/2015/11/17/18/59/architecture-1048092_960_720.jpg",
            images: [
              {
                id: 1,
                src: "https://cdn.pixabay.com/photo/2022/02/12/14/33/fjord-7009076_960_720.jpg",
              },
              {
                id: 2,
                src: "https://cdn.pixabay.com/photo/2022/02/12/14/33/fjord-7009076_960_720.jpg",
              },
              {
                id: 3,
                src: "https://cdn.pixabay.com/photo/2022/02/12/14/33/fjord-7009076_960_720.jpg",
              },
            ],
            created_at: "2019-12-02T20:01:00.283041Z",
            updated_at: "2019-12-02T20:01:00.283041Z",
          },
          {
            id: 3,
            uuid: "xdbsdgh-46edfdf5-2074473de",
            title: "Casa",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, provident illum doloremque inventore.",
            image:
              "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg",
            images: [
              {
                id: 1,
                src: "https://cdn.pixabay.com/photo/2022/02/12/14/33/fjord-7009076_960_720.jpg",
              },
              {
                id: 2,
                src: "https://cdn.pixabay.com/photo/2022/02/12/14/33/fjord-7009076_960_720.jpg",
              },
              {
                id: 3,
                src: "https://cdn.pixabay.com/photo/2022/02/12/14/33/fjord-7009076_960_720.jpg",
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
        let itemSelected = portfolio.projects.find((el) => (el.uuid == uuid));

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
