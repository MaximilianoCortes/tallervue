<template>
  <div v-if="reviews">
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
              <img :src="image" class="d-block w-100 carousel-image" alt="Product Image">
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
          <h6>{{ reviews.product.createdAt }}</h6>
          <h2 class="product-name">{{ reviews.product.name }}</h2>
          <h5 class="product-description">{{ reviews.product.description }}</h5>
          <h2 class="product-price">Precio: {{ reviews.product.price }}</h2>
        </div>
      </div>
      <div class="user-info">
      <div class="user-card">
        <img :src="reviews.product.user.photo" alt="User Photo" class="user-photo">
        <h2 class="user-name">{{ reviews.product.user.name }}</h2>
        <h2 class="user-city">{{ reviews.product.user.city }}</h2>
        <button class="btn btn-primary" @click="() => cargarUsuario(reviews.product.user._id)">Ver perfil</button>
        </div>
    </div>
      <div class="reviews">
        <h3>Listado de reseñas o comentarios ({{ reviews.reviews.length }})</h3>
        <ul>
          <li v-for="review in reviews.reviews" :key="review._id">
            <div class="user-review">
              <img :src="review.user.photo" alt="User Photo" class="review-user-photo">
              <div class="review-info">
                <p class="review-user-name">{{ review.user.name }}</p>
                <p class="review-text">{{ review.review }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reviews: {
      type: Object,
      required: true
    }
  },
  methods: {
    cargarUsuario(id) {
      this.$router.push({
        name: "VistaUsuario",
        params: {
          id: id,
        },
      });
    }
  }
}
</script>

<style>
.product-details {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.product-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-right: 20px;
  flex: 1;
}

.carousel {
  width: 600px; /* Ajustar el ancho del carousel según tus necesidades */
  height: 600px; /* Ajustar la altura del carousel según tus necesidades */
  overflow: hidden;
}

.carousel-inner {
  position: relative;
  height: 100%;
  width: 100%;
}

.carousel-inner .carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
}

.user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.user-photo {
  border-radius: 50%;
  overflow: hidden;
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}

.user-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.reviews {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-review {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.review-user-photo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.review-info {
  display: flex;
  flex-direction: column;
  text-align: center;
}

</style>
