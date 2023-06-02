import { createRouter, createWebHistory } from 'vue-router';

import VistaUsuario from '../views/VistaUsuario.vue'

const routes = [

  {
    name: 'Usuario',
    path: '/',
    component: VistaUsuario,
    props:true
  },
  
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;