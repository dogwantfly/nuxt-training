<script setup>
const props = defineProps({
  courses : {
  type: Array,
  default: () => []
  }
})
const router = useRouter();
const goToCourses = (id) => router.push(`/courses/${id}`);
</script>

<template>
  <NuxtLink
      :to="`/courses/${item.id}`"
      class="card"
      v-for="item in props.courses"
      :key="item.id"
      @click="goToCourses(item.id)"
  >
    <img :src="item.photo" alt="" width="590"/>
    <div class="content">
      <h1>{{ item.name }}</h1>
      <div class="teacher-box">
        <div class="teach-img">
          <img class="teacher" :src="item.teacher.img" alt="" width="30"/>
          <p>{{ item.teacher.name }}</p>
        </div>
        <h2>NTD: {{ item.money }}</h2>
      </div>
    </div>
  </NuxtLink>
</template>
<style lang="scss" scoped>
a.card {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: auto;
  padding: 10px;
  width: 920px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.2);
  margin-bottom: 20px;
  opacity: 0.7;
  transition: opacity 0.2s;
  background-color: rgb(231, 231, 231);
  &:hover {
    opacity: 1;
  }
  > img {
    margin-right: 10px;
  }
  .content {
    > h1 {
      font-size: 14px;
      text-align: left;
    }
    .teacher-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5px;
      > h2 {
        font-size: 13px;
      }
      .teach-img {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        > img {
          border-radius: 25px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
