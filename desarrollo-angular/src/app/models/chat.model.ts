import { Message } from './message.model';

export interface Chat {
  lastSeen?: Date;
  
  id: number;
  name: string;
  online: boolean;
  messages: Message[];
}