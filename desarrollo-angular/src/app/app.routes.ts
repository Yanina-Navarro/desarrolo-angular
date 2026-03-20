import { Routes } from '@angular/router';
import { Login } from './views/login/login';
import { NewChat } from './views/new-chat/new-chat';
import { ChatLayout } from './layout/chat-layout/chat-layout';


export const routes: Routes = [
    { path: "", component: ChatLayout},
    { path: "login", component: Login },
    { path: "chats", component: ChatLayout },
    { path: "chats/:id", component: ChatLayout },
    { path: "nuevo", component: NewChat },
];
