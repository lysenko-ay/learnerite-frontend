export const useTaskContent = async (course: string, type: string, chapterId: string, taskId: string) => {
  const { data } = await useAsyncData('octave-taskbook-' + chapterId + '-' + taskId, async () => {
    const config = useRuntimeConfig();
    const data = await $fetch(config.API_BASE_URL + '/content/' + course + '/' + type + '/' + chapterId + '/' + taskId);
    return data;
  });

  return data.value;
};
