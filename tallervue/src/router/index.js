import { createRouter, createWebHistory } from 'vue-router';

import VistaProducto from '../views/VistaProducto';

const routes = [
  {
    name: 'VistaProducto',
    path: '/',
    component: VistaProducto,
    props: true,
  },
  
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;