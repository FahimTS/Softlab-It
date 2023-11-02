import { Component, Input } from '@angular/core';
import { Awards } from '../interfaces/awards';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.scss']
})
export class AwardComponent {
  @Input() awardData: Awards

}
