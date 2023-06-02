import { createRouter, createWebHistory } from 'vue-router';

import ProductoComponente from '../views/VistaProducto';
//import ProductoComponente from '../views/VistaProducto';
//import ProductoComponente from '../views/VistaProducto'

const routes = [
  {
    name: 'ProductoComponente',
    path: '/',
    component: ProductoComponente,
    props: true,
  },
  
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;