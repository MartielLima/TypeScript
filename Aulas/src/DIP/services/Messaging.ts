import { MessagingProtocol } from '../classes/interfaces/messagingProtocol';

export class Messaging implements MessagingProtocol {
   sendMessage(text: string): void {
      console.log(`msg: ${text}`);
   }
}
