import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'chat'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'chat',
        component: ChatsComponent,
        canActivate: [authGuard]
    }
];
