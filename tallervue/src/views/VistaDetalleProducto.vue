<template>
  <div>
    <DetalleProductoComponente :producto="producto"></DetalleProductoComponente>
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
      producto: null
    };
  },
    mounted() {
      //const id = this.$route.params.id;
      this.Detalles(/*id*/);
    },
    methods: {
      Detalles(/*id*/) {
        console.log("hola")
        axios
          .get(`http://ec2-54-163-208-73.compute-1.amazonaws.com:8080/products/647178286edc199bff73e81c/reviews`)
          .then(response => {
            this.producto = response.data}
          )
          .catch(error => {
            console.error(error);
          });
      }
    }
}
</script>