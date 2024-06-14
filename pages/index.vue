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
// const { data } = await useFetch("https://api.nuxtjs.dev/mountains",{
//       query: { page: 1, list: 20 },
//     }
// );
// console.log('data:', data.value);
const { data } = await useFetch("https://api.nuxtjs.dev/mountains", {
  onRequest({ request, options }) {
    // 設置 request headers
    options.headers = options.headers || {};
    options.headers.authorization = `Bearer 12345678`;
    console.log('headers',options.headers);
  },
  // onRequestError({ request, options, error }) {
  //   // 處理 request 錯誤
  // },
  onResponse({ request, response, options }) {
    // 處理回傳資料
    return response._data;
  },
  // onResponseError({ request, response, options }) {
  //   // 處理 response 錯誤
  // },
});

</script>

<template>
  <div>
    <h1>首頁</h1>
    {{ data }}
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

    <NuxtLink to="/asyncData">asyncData</NuxtLink>
    <br>
    <NuxtLink to="/aLotOfFetch">a lot of fetch</NuxtLink>
  </div>
</template>
