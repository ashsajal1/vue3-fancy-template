import { createApp } from "vue";
import "./assets/tailwind.css";
import "./style.css";
import 'primeicons/primeicons.css'
import App from "./App.vue";
import { router } from "./router";
import { MotionPlugin } from "@vueuse/motion";
import PrimeVue from "primevue/config";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(MotionPlugin);
app.use(PrimeVue, {
  theme: "none",
});
app.use(pinia);

app.mount("#app");
