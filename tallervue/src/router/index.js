import { createRouter, createWebHistory } from 'vue-router';

import VistaProducto from '../views/VistaProducto';
// import DetalleProductoComponente from '../views/VistaDetalleProducto'

const routes = [
  {
    name: 'VistaProducto',
    path: '/',
    component: VistaProducto,
    props: true,
  },
  // {
  //   name: 'VistaDetalleProducto',
  //   path: '/VistaDetalleProducto/',
  //   component: DetalleProductoComponente,
  //   props:true
  // },
  
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;