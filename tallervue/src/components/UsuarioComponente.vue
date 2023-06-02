<template>

<div class="card" style="width: 18rem;">
  <img class="card-img-top" :src="photo" alt="loading....">
  <div class="card-body">
    <h5 class="card-title"></h5>

    <p class="card-text">{{ name }}</p>
    <p class="card-text">{{ city }}</p>
    <p class="card-text">{{ bio }}</p>
    <p>Reseñas realizadas:</p>
    <p class="card-text">{{ resenas.length }}</p>
    <div v-for="resena in resenas" :key="resena">
    
    <img :src="resena.product.images?.[0]" alt="">
    <p class="card-text">{{`Nombre Producto: ${resena.product.name}` }}</p>
    <p class="card-text">{{`Reseña: ${resena.review}`}}</p>
  
  
  </div>

  </div>
</div>

  </template>
  
  <script>
  export default {
    name: "UsuarioComponente",
    props:{
      name: String,
      city: String,
      bio: String,
      photo: String,
      resenas: Array,
    }
  }

  </script>