<template>
  
  <div v-if="producto">
    <h2>{{ producto.product.name }}</h2>
    <p>Precio: {{ producto.product.price }}</p>

    <div id="carousel" class="carousel slide">
      <div class="carousel-inner">
    <div
    class="carousel-item"
    v-for="(image, index) in producto.product.images"
    :key="index"
    :class="{ 'active': index === 0 }"
  >
    <img :src="image" class="d-block w-100" alt="...">
  </div>
</div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
    <h3>Listado de reseñas o comentarios ({{ producto.reviews.length }})</h3>
    <ul>
      <li v-for="review in producto.reviews" :key="review._id">
        <img :src="review.user.photo" alt="Imagen del usuario">
        <p>Usuario: {{ review.user.name }}</p>
        <p>Comentario: {{ review.review }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    producto: {
      type: Object,
      required: true
    }
  }
};
</script>
<style>

</style>
