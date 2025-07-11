
export const manifests: Array<UmbExtensionManifest> = [
    {
        type: 'tiptapExtension',
        kind: 'button',
        alias: 'Iframe Tiptap Extension',
        name: 'Tiptap.Iframe',
        api: () => import('./api/iframe.tiptap-api.js'),
        meta:{
            icon: "icon-thumbnail-list",
            label: "Iframe",
            group: "#tiptap_extGroup_formatting"
        }
    },
    {
        type: 'tiptapToolbarExtension',
        kind: 'button',
        alias: 'Tiptap.Toolbar.Iframe',
        name: 'Iframe Tiptap Toolbar Extension',
        js: () => import('./api/iframe.tiptap-toolbar-api.js'),
        forExtensions: ["Tiptap.Highlight"],
        meta:{
            alias: "iframe",
            icon: "icon-brush",
            label: "Iframe"
        }
    }
]