import content from "../data/content.json";

const entries = [];
content.forEach((chapter) => {
  entries.push({ id: chapter.id, content: chapter });
  chapter.content.forEach((entry) => {
    entries.push({ id: chapter.id + "/" + entry.id, content: entry });
  });
});

const index = {};
let prevId = "";
entries.forEach((entry) => {
  if (prevId in index) {
    index[prevId].next = entry.id;
  }
  index[entry.id] = {
    content: entry.content,
    prev: prevId,
    next: "",
  };
  prevId = entry.id;
});

export default defineNuxtPlugin(() => {
  return {
    provide: {
      index,
      content,
    },
  };
});
