import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-item',
  standalone: true,
  imports: [],
  templateUrl: './chat-item.html',
  styleUrl: './chat-item.css',
})
export class ChatItem {
  @Input() chat: any;

    constructor(private router: Router) {}

  openChat() {
    this.router.navigate(['/chats', this.chat.id]);
  }

}
