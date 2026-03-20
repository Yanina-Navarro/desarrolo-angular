import { Component, computed } from '@angular/core';
import { ChatItem } from '../chat-item/chat-item';
import { ChatService } from '../../services/chat.service';
import { RouterModule } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [ChatItem, RouterModule, ReactiveFormsModule],
  templateUrl: './chat-list.html',
  styleUrl: './chat-list.css',
})

export class ChatList {

  searchControl = new FormControl<string>('');
  search = toSignal(this.searchControl.valueChanges, { initialValue: '' });

  chats = computed(() => this.chatService.chats());

  constructor(private chatService: ChatService) { }

  filteredChats = computed(() => {
    const search = (this.search() ?? '').toLowerCase();

    return this.chatService.chats().filter(chat =>
      chat.name.toLowerCase().includes(search)
    );
  });
}
