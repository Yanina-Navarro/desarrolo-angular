import { Component } from '@angular/core';
import { ChatList } from '../../components/chat-list/chat-list';
import { ChatWindow } from '../../components/chat-window/chat-window';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chat-layout',
  imports: [ChatList, ChatWindow, RouterModule],
  templateUrl: './chat-layout.html',
  styleUrl: './chat-layout.css',
})
export class ChatLayout {}
