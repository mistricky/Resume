import {configure, highlightAuto} from 'highlight.js';
import marked from 'marked';

configure({
  tabReplace: '  ',
  classPrefix: 'hljs-',
  languages: [
    'CSS',
    'HTML, XML',
    'JavaScript',
    'PHP',
    'Python',
    'Stylus',
    'TypeScript',
    'Markdown',
  ],
});

export function markdown(value: string): string {
  return marked(value, {
    langPrefix: 'lang-',
    highlight(value: string): string {
      return highlightAuto(value).value;
    },
  });
}
