import { Node, mergeAttributes } from "@tiptap/core";
declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    iframe: {
      setIframe: (options: { src: string }) => ReturnType,
    }
  }
}

export default Node.create({
  name: "iframe",
  group: 'inline',
  inline: true,
  atom: true,
  selectable: true,

  addOptions() {
    return {
      allowFullscreen: true,
      HTMLAttributes: {},
    }
  },

  addAttributes() {
    return {
      src: { default: null },
      width: { default: '560' },
      height: { default: '315' },
      frameborder: { default: '0' },
      allow: {
        default:
          'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen,
      },
    }
  },

  parseHTML() {
    return [{ tag: "iframe" }];
  },

 renderHTML({ HTMLAttributes }) {
    return [
      "iframe",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },
    addCommands() {
    return {
      setIframe:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },
})