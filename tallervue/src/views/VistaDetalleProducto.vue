<template>
  <div>
    <DetalleProductoComponente :reviews="reviews"></DetalleProductoComponente>
  </div>
</template>

<script>
import axios from 'axios';
import DetalleProductoComponente from '../components/DetalleProductoComponente.vue';

export default {
  components: {
    DetalleProductoComponente
  },
  data() {
    return {
      reviews: null
    };
  },
  mounted() {
    this.getReviews();
  },
  methods: {
    getReviews() {
      axios
        .get(`http://ec2-54-163-208-73.compute-1.amazonaws.com:8080/products/647178286edc199bff73e81c/reviews`)
        .then(response => {
          this.reviews = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>