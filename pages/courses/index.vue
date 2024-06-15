<script setup>

const { data } = useFetch('https://vue-lessons-api.vercel.app/courses/list');

</script>

<template>
  <CardList :courses="data"/>
</template>
