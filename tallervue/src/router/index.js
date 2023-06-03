import { createRouter, createWebHistory } from 'vue-router';

import VistaDetalleProducto from '../views/VistaDetalleProducto';
import VistaUsuario from '../views/VistaUsuario';
import VistaProducto from '../views/VistaProducto'

const routes = [

  {
    name: 'VistaDetalleProducto',
    path: '/',
    component: VistaDetalleProducto,
    props:true
  },
  {
    name: 'VistaUsuario',
    path: '/VistaUsuario/:id',
    component: VistaUsuario,
    props:true
  },
  {
    name: 'VistaProducto',
    path: '/a',
    component: VistaProducto,
    props:true
  },
  
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;