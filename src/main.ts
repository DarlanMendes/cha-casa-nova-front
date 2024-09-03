import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import { setPrimevue } from "./modules/primevue.module";
import router from "./router";
const app = createApp(App);
app.use(router);
setPrimevue(app);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.mount("#app");
