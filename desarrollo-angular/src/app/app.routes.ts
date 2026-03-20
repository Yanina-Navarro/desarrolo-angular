import { Routes } from '@angular/router';
import { Login } from './views/login/login';
import { Chats } from './views/chats/chats';
import { ChatDetail } from './views/chat-detail/chat-detail';
import { NewChat } from './views/new-chat/new-chat';


export const routes: Routes = [
    { path: "", component: Chats },
    { path: "login", component: Login },
    { path: "chats", component: Chats },
    { path: "chats/:id", component: ChatDetail },
    { path: "nuevo", component: NewChat },
];
