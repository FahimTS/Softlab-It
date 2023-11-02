import { Component, Input } from '@angular/core';
import { ClientCard } from '../interfaces/client-card';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent {
  @Input() clientCardData: ClientCard;
}
