<script setup lang="ts">

  const route = useRoute();


  const Id = route.params.id;




</script>

<template>
  <UButton color="primary">Primary Button</UButton>
  <UButton color="secondary">Primary Button</UButton>

  <h1>Post ID = {{Id}}</h1>

</template>