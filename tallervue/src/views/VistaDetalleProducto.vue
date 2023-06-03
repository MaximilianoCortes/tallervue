<template>
  <div>
    <div>{{ id }}</div>
    <DetalleProductoComponente :id="id" />
  </div>
</template>

<script>
import DetalleProductoComponente from '../components/DetalleProductoComponente.vue';

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    DetalleProductoComponente
  }
};
</script>