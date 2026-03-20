import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ChatService {

    chats = signal<any[]>([
        {
            id: 1,
            name: 'Juan Perez',
            online: true,
            messages: []
        }
    ]);

    addChat(chat: any) {
        this.chats.update(c => [...c, chat]);
    }

    addMessage(chatId: number, message: any) {
        this.chats.update(chats =>
            chats.map(c =>
                c.id === chatId
                    ? { ...c, messages: [...c.messages, message] }
                    : c
            )
        );
    }
}