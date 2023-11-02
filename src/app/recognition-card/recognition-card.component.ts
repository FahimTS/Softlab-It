import { Component, Input } from '@angular/core';
import { Recognition } from '../interfaces/recognition';

@Component({
  selector: 'app-recognition-card',
  templateUrl: './recognition-card.component.html',
  styleUrls: ['./recognition-card.component.scss']
})
export class RecognitionCardComponent {
  @Input() recognitionData: Recognition;
}
