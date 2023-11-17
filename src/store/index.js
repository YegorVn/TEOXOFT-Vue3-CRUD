import { createStore } from "vuex";

export default createStore({
  state: {
    items: [],
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item);
    },
    updateItem(state, { index, item }) {
      state.items.splice(index, 1, item);
    },
    removeItem(state, index) {
      state.items.splice(index, 1);
    },
  },
  actions: {
    addItem({ commit }, item) {
      commit("addItem", item);
    },
    updateItem({ commit }, { index, item }) {
      commit("updateItem", { index, item });
    },
    removeItem({ commit }, index) {
      commit("removeItem", index);
    },
  },
  getters: {
    getItems: (state) => state.items,
  },
});
