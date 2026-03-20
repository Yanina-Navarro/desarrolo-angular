import { Injectable, signal } from "@angular/core";
import { Chat } from "../models/chat.model";
import { Message } from "../models/message.model";

@Injectable({ providedIn: 'root' })
export class ChatService {

  chats = signal<Chat[]>([
    {
      id: 1,
      name: 'Juan',
      online: true,
      messages: []
    },
    {
      id: 2,
      name: 'Ana',
      online: false,
      messages: []
    }
  ]);

  getChatById(id: number) {
    return this.chats().find(c => c.id === id);
  }

  addMessage(chatId: number, message: Message) {
    this.chats.update(chats =>
      chats.map(c =>
        c.id === chatId
          ? { ...c, messages: [...c.messages, message] }
          : c
      )
    );
  }

  addChat(chat: any) {
  this.chats.update(chats => [...chats, chat]);
}
}