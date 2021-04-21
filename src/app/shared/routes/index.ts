import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { AuthModule } from "@/app/features/login";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  ...AuthModule.routes(),
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
