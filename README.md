Your document is already quite clear, but I’ve made a few tweaks to improve the flow, readability, and formatting. Here's a tidied-up version:

---

# Umbraco TipTap Iframe Plugin

An Umbraco App_Plugin for TipTap to support embedding iframes.

## Installation

Clone this repository into your `wwwroot` folder:

```bash
git clone https://github.com/keivnletchford/umbraco-tiptap-iframe.git
```

Navigate to the plugin folder:

```bash
cd umbraco-tiptap-iframe
```

Next, install the dependencies and build the project:

```bash
npm install
npm run build
```

This will add the `umbraco-app-plugin-tiptap-iframe` to your Umbraco App_Plugin folder.

### Enable Iframes in Umbraco

To use iframes in the TipTap editor:

1. Go to your Umbraco CMS instance.
2. Navigate to the TipTap editor configuration.
3. Enable Iframes in the editor settings.

## Quirks

### Iframe as an Inline Element

By default, iframes are treated as inline elements inside paragraph tags. This mimics TinyMCE’s behavior, where iframes are wrapped in paragraphs. If you prefer to treat iframes as block-level elements, you can modify the `elements/iframe.ts` file:

```typescript
group: 'block',
inline: false,
```

Note that this change will remove iframes that are inside paragraph tags, as they will no longer be treated as inline elements.

### Paragraphs and Iframes

To allow iframes within paragraphs, I’ve added the following custom properties:

```typescript
name: 'paragraph',
group: 'block',
content: 'inline*', // Allows inline nodes like iframe
```

While I haven’t observed any side effects, use this with caution as it may have unexpected impacts in some scenarios.

---

This should make it a bit more polished and structured! Let me know if you need anything else or further tweaks.
