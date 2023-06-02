<template>
  <div>
    <!-- Obtener el producto desde tu API o fuente de datos -->
    <detalle-producto-componente :producto="producto"></detalle-producto-componente>
  </div>
</template>

<script>
import DetalleProductoComponente from '../components/DetalleProductoComponente.vue';

export default {
  components: {
    DetalleProductoComponente
  },
  data() {
    return {
      producto: {} // Aquí debes obtener el producto desde tu API o fuente de datos
    };
  },
  // Aquí puedes agregar métodos para obtener los datos del producto
};
</script>