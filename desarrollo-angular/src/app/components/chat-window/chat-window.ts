import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Message } from '../../models/message.model';
import { signal, computed } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './chat-window.html',
  styleUrl: './chat-window.css',
})
export class ChatWindow {

  messageControl = new FormControl('', Validators.required);
  isTyping = false;
  chatId = signal<number>(0);
  chat = computed(() =>
    this.chatService.getChatById(this.chatId())
  );

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.chatId.set(Number(params.get('id')));
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

    this.chatService.addMessage(this.chatId(), {
      text,
      mine: true,
      time: new Date()
    });
    
    this.messageControl.reset();

    this.isTyping = true;

    setTimeout(() => {
      const response: Message = {
        text: 'Respuesta automática 🤖',
        mine: false,
        time: new Date()
      };

      this.chatService.addMessage(this.chatId(), response);
      this.isTyping = false;

    }, 1500);
  }
}