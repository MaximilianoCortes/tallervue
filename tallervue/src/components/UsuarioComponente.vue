<template>
  <div>
    <div>{{ id }}</div>
    <div>{{ ip }}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      ip: ''
    };
  },
  created() {
    this.obtenerIP();
  },
  methods: {
    obtenerIP() {
      axios
        .get('https://api.ipify.org/?format=json')
        .then(response => {
          this.ip = response.data.ip;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
