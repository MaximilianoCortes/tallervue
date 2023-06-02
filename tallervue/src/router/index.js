import { createRouter, createWebHistory } from 'vue-router';

import VistaDetalleProducto from '../views/VistaDetalleProducto';
//import ProductoComponente from '../views/VistaProducto';
//import ProductoComponente from '../views/VistaProducto'

const routes = [

  {
    name: 'Home',
    path: '/',
    component: VistaDetalleProducto,
    props:true
  },
  
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;