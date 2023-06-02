import { createRouter, createWebHistory } from 'vue-router';

import ProductoComponente from '../views/VistaProducto';
import ProductoComponente from '../views/VistaProducto';
import ProductoComponente from '../views/VistaProducto'

const routes = [
  {
    name: 'MiIp',
    path: '/ip',
    component: ProductoComponente,
    props: true,
  },
  {
    name: 'DoxxeoInfo',
    path: '/DoxxeoInfo/:ip',
    component: ProductoComponente,
    props:true
  },
  {
    name: 'Home',
    path: '/',
    component: ProductoComponente,
    props:true
  },
  
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;