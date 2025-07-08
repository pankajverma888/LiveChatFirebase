import { Component, Input } from '@angular/core';
import { UserChatConfig } from '../../interfaces/ui-configs/user-chat-config.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserCardComponent {

  @Input() config!: UserChatConfig;
}
