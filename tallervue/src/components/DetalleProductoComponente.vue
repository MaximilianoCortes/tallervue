<template>
  <div>
    <div>{{ id }}</div>
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
};
</script>