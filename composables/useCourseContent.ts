export const useCourseContent = async (course: string, type: string): Promise<{ index: {}; content: any[] }> => {
  const normalizeContent = (content: any[]) => {
    const entries = [];
    content.forEach((chapter) => {
      entries.push({ ...chapter });
      chapter.content.forEach((entry) => {
        entries.push({ ...entry, id: chapter.id + '/' + entry.id });
      });
    });

    return entries;
  };

  const makeNagivation = (entries: any[]) => {
    let prev = '';
    const index = {};
    entries.forEach((entry) => {
      if (prev in index) {
        index[prev].next = entry.id;
      }
      index[entry.id] = {
        ...entry,
        next: '',
        prev,
      };
      prev = entry.id;
    });

    return index;
  };

  const { data } = await useAsyncData('octave-taskbook', async () => {
    const config = useRuntimeConfig();
    const data = await $fetch(config.API_BASE_URL + '/content/' + course + '/' + type);

    return {
      index: makeNagivation(normalizeContent(data as any[])),
      content: data,
    };
  });

  return {
    index: data.value.index,
    content: data.value.content as any[],
  };
};
