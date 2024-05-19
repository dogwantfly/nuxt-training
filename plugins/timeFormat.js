import dayjs from 'dayjs';

export default defineNuxtPlugin((nextApp) => {
  nextApp.vueApp.directive('timeFormat', {
    mounted(el, binding) {
      const time = dayjs(binding.value).format('YYYY 年 MM 月 DD 日');
      el.innerText = time;
    },
  });
});
