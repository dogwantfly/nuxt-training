export const useAddCount = () => {
  const count = ref(0);
  const add = () => {
    count.value += 1;
  };
  return { count, add };
};
