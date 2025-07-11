import { Node, mergeAttributes } from '@tiptap/core';

export default Node.create({
  name: 'paragraph',
  group: 'block',
  content: 'inline*', // this allows inline nodes like iframe

  parseHTML() {
    return [
      {
        tag: 'p',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['p', mergeAttributes(HTMLAttributes), 0];
  },
});