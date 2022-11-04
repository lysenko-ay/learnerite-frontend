export const useTaskContent = async () => {
  const { data } = await useAsyncData('octave-taskbook', async () => {
    const config = useRuntimeConfig();
    const data = await $fetch(config.API_BASE_URL + '/content');

    return {};
  });
};
