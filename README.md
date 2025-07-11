# umbraco-tiptap-iframe

Umbraco App_Plugin for TipTap allowing Iframes

## Installation

Clone this repository to your wwwwroot Folder

```bash
git clone https://github.com/keivnletchford/umbraco-tiptap-iframe.git
```

Then navigate to the folder:

```bash
cd umbraco-tiptap-iframe
```

Then run the following commands to install dependencies and build the project:

```bash

cd umbraco-tiptap-iframe

npm install

npm run build

```

This should then add umbraco-app-plugin-tiptap-iframe to your Umbraco App_Plugin folder

Inside TipTap you can now add an Iframe by going into the editor settings and enabling Iframes.

## Quirks

#### Iframe as Inline Element

By default iframes are treated as inline elements inside paragraph tags. This is to preserve the original behaviour of TinyMCE that would wrap iframes in paragraphs. If you want to change this behavior you can change the elements/iframe.ts to:

```typescript
  group: 'block',
  inline: false,
```

This will however delete iframes that are inside paragraph tags, as they will no be inline elements.

#### Paragraphs and Iframes

To allow the iframe to be inside a paragraph I have added the custom propeties of:

```typescript
  name: 'paragraph',
  group: 'block',
  content: 'inline*', // this allows inline nodes like iframe
```

Not sure if this has unexpected side effects, but it seems to work fine for our needs.
