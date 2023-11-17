// Импорт функции createApp из Vue для создания экземпляра приложения
import { createApp } from "vue";

// Импорт основного компонента приложения (App.vue)
import App from "./App.vue";

// Импорт хранилища данных (Vuex)
import store from "./store";

// Импорт маршрутизатора (Vue Router)
import router from "./router";

// Импорт PrimeVue и необходимых компонентов PrimeFaces
import PrimeVue from "primevue/config";
import Menubar from "primevue/menubar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputGroup from "primevue/inputgroup";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

// Импорт стилей PrimeFlex и темы PrimeVue
import "/node_modules/primeflex/primeflex.css";
import "primevue/resources/themes/soho-light/theme.css";

// Импорт иконок PrimeIcons
import "primeicons/primeicons.css";

// Создание экземпляра приложения и его конфигурация
createApp(App)
  // Подключение маршрутизатора и хранилища данных к приложению
  .use(router)
  .use(store)

  // Подключение PrimeVue к приложению
  .use(PrimeVue)

  // Регистрация компонентов PrimeVue для использования в приложении
  .component("Menubar", Menubar)
  .component("DataTable", DataTable)
  .component("Column", Column)
  .component("InputGroup", InputGroup)
  .component("InputText", InputText)
  .component("Button", Button)

  // Монтирование приложения в элемент с id "app" в HTML-документе
  .mount("#app");
