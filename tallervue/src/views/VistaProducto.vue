<template>
    <div>
      <h1 class="Shoppi">SHOPI</h1>
      <ProductoComponente 
      v-for="producto in productos"
        :key="producto._id"
        :producto="producto" class="publicaciones"/>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import ProductoComponente from '../components/ProductoComponente.vue';
  
  export default {
    name: "VistaProducto",
    components: {
      ProductoComponente
    },
    data() {
    return {
      productos: [],
    };
  },
  methods: {
    async listaProductos() {
    try {
      const response = await axios.get("http://ec2-54-163-208-73.compute-1.amazonaws.com:8080/products");
      this.productos=response.data;
    } catch (error) {
      console.error("Error al obtener la lista de productos", error);
      throw error;
    }
  }
  },
  mounted() {
this.listaProductos()
  },
  };
  </script>

  <style>
  .Shoppi{
    text-align: center;
  }
</style>