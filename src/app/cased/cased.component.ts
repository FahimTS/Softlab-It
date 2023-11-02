import { Component, Input } from '@angular/core';
import { Cases } from '../interfaces/cases';


@Component({
  selector: 'app-cased',
  templateUrl: './cased.component.html',
  styleUrls: ['./cased.component.scss']
})
export class CasedComponent {
  @Input() cases: Cases;
}
