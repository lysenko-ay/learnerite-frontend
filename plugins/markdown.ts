import MarkdownIt from 'markdown-it';

export default defineNuxtPlugin(() => {
  const md = new MarkdownIt();

  return {
    provide: {
      md: (msg: string) => md.render(msg),
    },
  };
});
