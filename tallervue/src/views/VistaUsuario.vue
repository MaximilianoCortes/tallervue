<template>
  <div>
    <div>{{ id }}</div>
    <UsuarioComponente :id="id" />
  </div>
</template>

<script>
import UsuarioComponente from '../components/UsuarioComponente.vue';

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    UsuarioComponente
  }
};
</script>