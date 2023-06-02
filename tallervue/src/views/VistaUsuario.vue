<template>

<div v-if="save_usuario.user">
  <ComponenteUsuario :name="save_usuario.user.name" :city="save_usuario.user.city" :bio="save_usuario.user.bio"
  :photo="save_usuario.user.photo" :resenas="save_usuario.reviews"></ComponenteUsuario>
</div>

  </template>
  
  <script>
  import axios from 'axios'
  import ComponenteUsuario from '../components/UsuarioComponente.vue'

  export default{
      name: "Usuario_",

      components:{
        ComponenteUsuario
      },
      data(){
          return{
            save_usuario:[]

          }
      },

      mounted(){
        this.listproduct();
      },
  
      methods:{
  
          listproduct(){
              axios.get(`http://54.163.208.73:8080/users/647178286edc199bff73e81f/reviews`)
              .then(response =>{
                  this.save_usuario=response.data
                  console.log(this.save_usuario)
            })
         },

    
      }
  }
  
  </script>