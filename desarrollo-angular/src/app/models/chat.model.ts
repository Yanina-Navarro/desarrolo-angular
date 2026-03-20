import { Message } from './message.model';

export interface Chat {
  id: number;
  name: string;
  online: boolean;
  messages: Message[];
  lastSeen?: Date;

}