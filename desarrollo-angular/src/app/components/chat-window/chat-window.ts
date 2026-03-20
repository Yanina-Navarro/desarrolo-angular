import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './chat-window.html',
  styleUrl: './chat-window.css',
})
export class ChatWindow {

  messageControl = new FormControl('', Validators.required);

  chatId!: number;
  chat: any;

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService
  ) { }

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.chatId = Number(params.get('id'));
    this.chat = this.chatService.getChatById(this.chatId);
  });
}

   sendMessage() {
    if (this.messageControl.invalid) return;

    const text = this.messageControl.value as string;

    const newMessage: Message = {
      text,
      mine: true,
      time: new Date()
    };

    this.chatService.addMessage(this.chatId, newMessage);

    this.messageControl.reset();

    // 🤖 respuesta automática
    setTimeout(() => {
      const response: Message = {
        text: 'Respuesta automática 🤖',
        mine: false,
        time: new Date()
      };

      this.chatService.addMessage(this.chatId, response);
    }, 1000);
  }
}