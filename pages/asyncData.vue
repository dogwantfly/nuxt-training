<script setup>
  import Button from "../components/global/Box/Button.vue";

  const { data,
    // pending, refresh, error
  } = await useAsyncData('nuxt3test', () => {
    return $fetch('https://api.nuxtjs.dev/mountains')
  })
  const refreshGetData = () => {
    refreshNuxtData('nuxt3test')
    console.log('refreshGetData');
  }

</script>

<template>
  <h1>useAsyncData</h1>
  <button type="button" @click="refreshGetData">refresh</button>
  {{ data }}
</template>
