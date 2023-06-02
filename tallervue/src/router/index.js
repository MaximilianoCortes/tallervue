import { createRouter, createWebHistory } from 'vue-router';

import DetalleProductoComponente from '../views/VistaDetalleProducto';
//import ProductoComponente from '../views/VistaProducto';
//import ProductoComponente from '../views/VistaProducto'

const routes = [
  {
    name: 'MiIp',
    path: '/ip',
    component: DetalleProductoComponente,
    props: true,
  },
  {
    name: 'DoxxeoInfo',
    path: '/DoxxeoInfo/:ip',
    component: DetalleProductoComponente,
    props:true
  },
  {
    name: 'Home',
    path: '/',
    component: DetalleProductoComponente,
    props:true
  },
  
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;