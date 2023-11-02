import { Component, Input } from '@angular/core';
import { BusinessGrow } from '../interfaces/business-grow';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent {
  @Input() businessGrowData: BusinessGrow;
}
