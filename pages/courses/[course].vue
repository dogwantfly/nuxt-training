<script setup>
  import Info from "./[course]/info.vue";

  const route = useRoute();
  console.log(route);
  const { data } = useFetch(`https://vue-lessons-api.vercel.app/courses/${route.params.course}`)
</script>

<template>
  <h2>{{ data }}</h2>
  <NuxtLink :to="`/courses/${route.params.course}/`">index</NuxtLink>
  <NuxtLink to="info">info</NuxtLink>
  <NuxtLink to="content">content</NuxtLink>
  <NuxtPage/>

</template>
