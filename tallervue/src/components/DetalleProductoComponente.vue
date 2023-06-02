<template>
  <div class="product-details">
    <div class="product-info">
      <div id="carousel" class="carousel slide">
        <div class="carousel-inner">
          <div
            class="carousel-item"
            v-for="(image, index) in reviews.product.images"
            :key="index"
            :class="{ 'active': index === 0 }"
          >
            <img :src="image" class="d-block w-100" alt="Product Image">
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
      <div class="product-details-info">
        <h2>{{ reviews.product.createdAt }}</h2>
        <h2>{{ reviews.product.description }}</h2>
        <h2>{{ reviews.product.price }}</h2>
      </div>
    </div>
    <div class="user-info">
      <div class="user-card">
        <img :src="reviews.product.user.photo" alt="User Photo">
        <h2>{{ reviews.product.user.name }}</h2>
        <h2>{{ reviews.product.user.city }}</h2>
      </div>
    </div>
    <div class="reviews">
      <h3>Listado de reseñas o comentarios ({{ reviews.reviews.length }})</h3>
      <ul>
        <li v-for="review in reviews.reviews" :key="review._id">
          <div class="user-review">
            <img :src="review.user.photo" alt="User Photo">
            <div class="review-info">
              <p>Usuario: {{ review.user.name }}</p>
              <p>Comentario: {{ review.review }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    producto: {
      type: Object,
      required: true
    }
    ,reviews:{
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
.product-details {
  display: flex;
  justify-content: space-between;
}

.product-info {
  flex: 1;
}

.user-info {
  width: 30%;
}

.user-card {
  text-align: center;
}

.reviews {
  margin-top: 20px;
}

.user-review {
  display: flex;
  align-items: center;
}

.review-info {
  margin-left: 10px;
}
</style>
