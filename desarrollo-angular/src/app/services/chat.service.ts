import { Injectable, signal } from "@angular/core";
import { Chat } from "../models/chat.model";
import { Message } from "../models/message.model";

@Injectable({ providedIn: 'root' })
export class ChatService {

  private getInitialChats(): Chat[] {
    const saved = localStorage.getItem('chats');
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.map((c: any) => ({
        ...c,
        lastSeen: c.lastSeen ? new Date(c.lastSeen) : undefined,
        messages: c.messages || []
      }));
    }
    return [
      { id: 1, name: 'Juan', online: true, messages: [] },
      { id: 2, name: 'Ana', online: false, messages: [] }
    ];
  }

  chats = signal<Chat[]>(this.getInitialChats());

  constructor() { }

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

    this.saveToLocalStorage();
  }

  addChat(chat: Chat) {
    this.chats.update(chats => [...chats, chat]);
    this.saveToLocalStorage();
    console.log('Chat agregado exitosamente:', chat);
  }

  updateLastSeen(chatId: number) {
    this.chats.update(chats =>
      chats.map(c =>
        c.id === chatId
          ? { ...c, lastSeen: new Date(), online: false }
          : c
      )
    );

    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('chats', JSON.stringify(this.chats()));
  }

}