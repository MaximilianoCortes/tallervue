import { createRouter, createWebHistory } from 'vue-router';


import VistaDetalleProducto from '../views/VistaDetalleProducto';

import VistaProducto from '../views/VistaProducto'

const routes = [

  {
    name: 'VistaProducto',
    path: '/',
    component: VistaProducto,
    props: true,
  },
  {
    name: 'VistaDetalleProducto',
    path: '/VistaDetalleProducto/:id',
    component: VistaDetalleProducto,
    props:true
  },
  {
    // name: 'VistaUsuario',
    // path: '/VistaUsuario/:id',
    // component: VistaUsuario,
    // props:true
  },
  
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;