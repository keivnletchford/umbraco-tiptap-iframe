import { UmbTiptapToolbarElementApiBase } from '@umbraco-cms/backoffice/tiptap';
import type { Editor } from '@umbraco-cms/backoffice/external/tiptap';

export default class UmbTiptapToolbarIframeExtensionApi extends UmbTiptapToolbarElementApiBase {
    override async execute(editor?: Editor) {
        const url = prompt('Enter iframe URL');
        if (url) {
            editor?.chain().focus().setIframe({ src: url }).run();
        }
    }
}

