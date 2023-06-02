<template>
    <div v-if="producto" class="card">
  <img :src="producto.images[0]" alt="Producto" style="width:15%">
  <div class="container">
    <h2><b>{{producto.name}}</b></h2>
    <p> {{producto.description}}</p>
    <p><b>Fecha publicación: {{producto.createdAt}}</b></p>
    <p><b>Precio: ${{producto.price}}</b></p>
    <!-- <button><router-link :to="/VistaDetalleProducto/`${producto._id}`">Ver detalles</router-link></button> -->
  </div>
</div>
<div v-else>
  <p>No se encontró el producto</p>
</div>
  </template>
  
  <script>
  export default {
    name: "ProductoComponente",
  props: {
    producto: {
      type: Object,
      default: null,
    },
  },
  };
  </script>