import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-window',
  imports: [ReactiveFormsModule],
  templateUrl: './chat-window.html',
  styleUrl: './chat-window.css',
})
export class ChatWindow {

  messageControl = new FormControl('', Validators.required);

  messages: any[] = [];

  sendMessage() {
    if (this.messageControl.invalid) return;

    const text = this.messageControl.value;

    this.messages.push({
      text,
      mine: true,
      time: new Date()
    });

    this.messageControl.reset();

    setTimeout(() => {
      this.messages.push({
        text: 'Respuesta automática 🤖',
        mine: false,
        time: new Date()
      });
    }, 1000);
  }
}