import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import PrimeVue from "primevue/config";
import Menubar from "primevue/menubar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputGroup from "primevue/inputgroup";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import "/node_modules/primeflex/primeflex.css";
import "primevue/resources/themes/soho-light/theme.css";
import "primeicons/primeicons.css";
createApp(App)
  .use(router)
  .use(store)
  .use(PrimeVue)
  .component("Menubar", Menubar)
  .component("DataTable", DataTable)
  .component("Column", Column)
  .component("InputGroup", InputGroup)
  .component("InputText", InputText)
  .component("Button", Button)
  .mount("#app");
