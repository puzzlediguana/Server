import IncomingMessage from '#/network/client/IncomingMessage.js';
import ClientProtCategory from '#/network/client/prot/ClientProtCategory.js';

export default class CloseModal extends IncomingMessage {
    category = ClientProtCategory.USER_EVENT;
}
