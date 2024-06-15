<script setup>

  const route = useRoute();
  const router = useRouter();

  onMounted(() => {
  console.log('route', route);
  console.log('router', router);
  })
</script>

<template>
 <h1>About Index</h1>
</template>

<style scoped></style>
