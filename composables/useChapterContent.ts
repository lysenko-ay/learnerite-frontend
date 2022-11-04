export const useChapterContent = async (course: string, type: string, chapterId: string) => {
  const { data } = await useAsyncData('octave-taskbook-' + chapterId, async () => {
    const config = useRuntimeConfig();
    const data = await $fetch(config.API_BASE_URL + '/content/' + course + '/' + type + '/' + chapterId);
    return data;
  });

  return data.value;
};
