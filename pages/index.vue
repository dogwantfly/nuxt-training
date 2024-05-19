<script setup>
const store = useHomeStore();
const { $hello } = useNuxtApp();
const selectedDate = ref(new Date());
const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1').then(
    (res) => res.json()
  );
  console.log(res);
};
</script>

<template>
  <div>
    <h1>首頁</h1>
    <button type="button" @click="fetchData">fetch hello</button>
    <h2>{{ store.count }}</h2>
    <NuxtLink to="/user">user</NuxtLink>
    <ClientOnly>
      {{ $hello('hsin yu') }}
    </ClientOnly>
    <p v-time-format="new Date().getTime()"></p>
    <VDatePicker borderless :color="'orange'" v-model="selectedDate" />
    <button type="button" @click="store.add">+1</button>
    <Home />
    <Box />
  </div>
</template>
