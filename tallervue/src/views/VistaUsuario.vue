<template>
  <div class="fondo" v-if="save_usuario.user">
    <ComponenteUsuario :name="save_usuario.user.name" :city="save_usuario.user.city" :bio="save_usuario.user.bio"
      :photo="save_usuario.user.photo" :resena="save_usuario.reviews"></ComponenteUsuario>

  </div>
</template>
  
<script>
import axios from 'axios'
import ComponenteUsuario from '../components/UsuarioComponente.vue'

export default {
  name: "Usuario_",

  props: {
    id: {
      type: String,
      required: true
    }
  },

  components: {
    ComponenteUsuario
  },
  data() {
    return {
      save_usuario: []

    }
  },

  mounted() {
    this.listproduct();
  },

  methods: {

    listproduct() {
      axios.get(`http://54.163.208.73:8080/users/${this.id}/reviews`)
        .then(response => {
          this.save_usuario = response.data
        }).catch(error => {
          console.error(error)
        });
    },


  }
}

</script>

<style>
.fondo{
  background-color: #E4E3E3;
}
</style>