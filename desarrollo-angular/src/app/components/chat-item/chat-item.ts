import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CustomDatePipe } from '../../pipes/custom-date-pipe';

@Component({
  selector: 'app-chat-item',
  standalone: true,
  imports: [CustomDatePipe, RouterModule],
  templateUrl: './chat-item.html',
  styleUrl: './chat-item.css',
})
export class ChatItem {
  @Input() chat: any;

  constructor(private router: Router) { }

  openChat() {
    this.router.navigate(['/chats', this.chat.id]);
  }

  getInitial(name: string): string {
    return name.charAt(0).toUpperCase();
  }
}
