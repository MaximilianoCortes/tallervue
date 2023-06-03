<template>
    <p class="card-text">{{ `Reviews realizadas: ${reviews.length} ` }}</p>
    <div v-for="(review, index) in reviews" :key="review">
        <p>{{`-----------------Review_${(index+1)}----------------- `}}</p>
      <img class="card-img" :src="review.product.images[0]" alt="loading....">
        <p class="card-text">{{ `Nombre Producto: ${review.product.name}` }}</p>
        <p class="card-text">{{ `Reseña: ${review.review}` }}</p><br>
    </div>
</template>

<script>
export default {
    name: "ReviewComponente",
    props: {
     reviews: Array,
    }

}
</script>