import { Routes } from '@angular/router';
import { NewChat } from './views/new-chat/new-chat';
import { ChatLayout } from './layout/chat-layout/chat-layout';


export const routes: Routes = [
    { path: "", component: ChatLayout},
    { path: "chats", component: ChatLayout },
    { path: "chats/:id", component: ChatLayout },
    { path: "nuevo", component: NewChat },
];
