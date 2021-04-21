import { createApp } from "vue";
import "./registerServiceWorker";
import App from "./app/App.vue";
import router from "./app/shared/routes";
import { store } from "./app/app.store";

const app = createApp(App);

app.use(store).use(router).mount("#app");
