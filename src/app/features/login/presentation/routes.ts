import { RouteRecordRaw } from 'vue-router';

export default (): Array<RouteRecordRaw> => {
  return [
    {
      path: '/login',
      name: 'login',
      component: () => import('./index.vue'),
    }
  ];
};
