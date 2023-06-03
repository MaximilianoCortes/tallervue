<template>

<div class="d-flex justify-content-center">
  <div v-if="producto" class="card" style="width: 18rem;">
  <img class="card-img-top" :src="producto.images[0]" alt="Producto">
  <div class="card-body">
    <h5 class="card-title">{{producto.name}}</h5>
    <p class="card-text">{{producto.description}}</p>
    <p class="card-text">Fecha publicación: {{producto.createdAt}}</p>
    <p class="card-text">Precio: ${{producto.price}}</p>
    <!-- <a href="#" class="btn btn-primary"><router-link :to="/VistaDetalleProducto/`${producto._id}`">Ver detalles</router-link></a> -->
  </div>
</div>
<div v-else>
  <p>No se encontró el producto</p>
</div>
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
