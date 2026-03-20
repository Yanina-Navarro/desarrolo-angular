import { Component } from '@angular/core';
import { ChatList } from '../../components/chat-list/chat-list';
import { ChatWindow } from '../../components/chat-window/chat-window';

@Component({
  selector: 'app-chat-layout',
  imports: [ChatList, ChatWindow],
  templateUrl: './chat-layout.html',
  styleUrl: './chat-layout.css',
})
export class ChatLayout {}
