import { UmbTiptapExtensionApiBase } from '@umbraco-cms/backoffice/tiptap';
import Iframe from '../elements/iframe';
import Paragraph from '../elements/paragraph';

export default class UmbTiptapIframeExtensionApi extends UmbTiptapExtensionApiBase {
  getTiptapExtensions = () => [Iframe, Paragraph];
}