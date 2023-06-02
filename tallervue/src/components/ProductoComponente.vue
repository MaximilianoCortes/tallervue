<template>
  <div class="row">
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
  <div class="column"></div>
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

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
}

img {
  border-radius: 5px 5px 0 0;
}
.column {
  align-self: center;
  
}

</style>