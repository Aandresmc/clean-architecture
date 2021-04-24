import { createApp } from "vue";
import "./registerServiceWorker";
import App from "./app/App.vue";
import { router } from "./app/shared/routes";
import { store, key } from "./app/app.store";

const app = createApp(App);

app.use(store, key).use(router).mount("#app");
