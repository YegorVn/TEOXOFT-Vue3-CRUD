import { createRouter, createWebHistory } from "vue-router";
import AddItem from "../views/AddItem.vue";
import ItemList from "../views/ItemList.vue";
import EditItem from "../views/EditItem.vue";

const routes = [
  {
    path: "/",
    component: ItemList,
  },
  {
    path: "/add",
    component: AddItem,
  },
  {
    path: "/edit/:index",
    component: EditItem,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
