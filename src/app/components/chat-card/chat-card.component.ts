import { Component, Input } from '@angular/core';
import { ChatBubbleConfig } from '../../interfaces/ui-configs/chat-bubble-config.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'chat-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-card.component.html',
  styleUrl: './chat-card.component.scss'
})
export class ChatCardComponent {

  @Input() config!: ChatBubbleConfig;

}
