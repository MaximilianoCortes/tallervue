<template>
<div  class="d-flex justify-content-center" > 
  <div class="card text-center " style="width: 25rem;">
  <img class="card-img-top" :src="photo" alt="loading....">
  <div class="card-body">
    <h5 class="card-title"></h5>

    <p class="card-text">{{`Nombre: ${name}`}}</p>
    <p class="card-text">{{ `Ciudad: ${city}` }}</p>
    <p class="card-text">{{ `Biografía: ${bio}` }}</p>

    
    <ComponenteReview :reviews="resena"></ComponenteReview>


  </div>
</div>
</div>


  </template>
  
  <script>
import ComponenteReview from '../components/ComponenteReview.vue';

  export default {
    name: "UsuarioComponente",
    props:{
      name: String,
      city: String,
      bio: String,
      photo: String,
      resena:Array
    },
    components:{
    ComponenteReview,
}
  }

  </script>
