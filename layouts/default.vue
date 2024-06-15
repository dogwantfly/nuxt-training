<script setup>
const nuxtApp = useNuxtApp();
const isLoading = ref(false);
nuxtApp.hook("page:start", () => {
  isLoading.value = true;
});
nuxtApp.hook("page:finish", () => {
  isLoading.value = false;
});

</script>

<template>
  <div>
<!--    <NuxtLoadingIndicator :color="'#f00'" :duration="3000" :throttle="0">-->
<!--      <p>loading...</p>-->
<!--    </NuxtLoadingIndicator>-->
    <div v-show="isLoading">Loading</div>
    <header>header</header>
    Layout: default
    <slot />
    <footer>footer</footer>
  </div>
</template>

<style scoped>
p {
  text-align: center;
}
</style>
