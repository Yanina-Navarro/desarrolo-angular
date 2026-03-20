import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-chat',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-chat.html',
  styleUrl: './new-chat.css',
})
export class NewChat {

  nameControl = new FormControl('', Validators.required);

  constructor(
    private chatService: ChatService,
    private router: Router
  ) { }
  createChat() {
    if (this.nameControl.invalid) return;

    const newChat = {
      id: Date.now(),
      name: this.nameControl.value as string,
      online: true,
      messages: [],
      lastSeen: new Date()
    };

    this.chatService.addChat(newChat);

    this.router.navigate(['/chats', newChat.id]);
  }
}