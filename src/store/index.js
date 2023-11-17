// Создание хранилища данных Vuex
import { createStore } from "vuex";

export default createStore({
  // Состояние хранилища, в котором хранятся данные приложения
  state: {
    items: [], // Массив с данными сотрудников
  },
  // Мутации - функции, изменяющие состояние хранилища
  mutations: {
    // Мутация для добавления нового сотрудника в массив
    addItem(state, item) {
      state.items.push(item);
    },
    // Мутация для обновления данных сотрудника по индексу
    updateItem(state, { index, item }) {
      state.items.splice(index, 1, item);
    },
    // Мутация для удаления сотрудника по индексу
    removeItem(state, index) {
      state.items.splice(index, 1);
    },
  },
  // Действия - функции, вызывающие мутации, обрабатывают асинхронные операции
  actions: {
    // Действие для добавления сотрудника
    addItem({ commit }, item) {
      commit("addItem", item);
    },
    // Действие для обновления данных сотрудника
    updateItem({ commit }, { index, item }) {
      commit("updateItem", { index, item });
    },
    // Действие для удаления сотрудника
    removeItem({ commit }, index) {
      commit("removeItem", index);
    },
  },
  // Геттеры - функции для получения данных из хранилища
  getters: {
    // Геттер для получения массива сотрудников
    getItems: (state) => state.items,
  },
});
