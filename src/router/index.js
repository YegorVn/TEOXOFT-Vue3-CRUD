// Импорт необходимых функций из Vue Router для создания маршрутизатора и истории браузера
import { createRouter, createWebHistory } from "vue-router";

// Импорт компонентов, которые будут использоваться как страницы
import AddItem from "../views/AddItem.vue";
import ItemList from "../views/ItemList.vue";
import EditItem from "../views/EditItem.vue";

// Определение массива маршрутов с соответствующими путями и компонентами
const routes = [
  {
    path: "/",
    component: ItemList, // Главная страница со списком сотрудников
  },
  {
    path: "/add",
    component: AddItem, // Страница для добавления нового сотрудника
  },
  {
    path: "/edit/:index",
    component: EditItem, // Страница для редактирования существующего сотрудника
  },
];

// Создание маршрутизатора
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Экспорт созданного маршрутизатора для использования в основном приложении
export default router;
