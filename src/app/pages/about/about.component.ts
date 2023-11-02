import { Component } from '@angular/core';
import { ClientCard } from 'src/app/interfaces/client-card';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
  
})
export class AboutComponent {

  clientCard: ClientCard = {
    image: '../../../assets/img/client-card/red-grocer-200-27e6.webp',
    hrefName: 'Red Grocer',
    ceoName: 'CEO',
    description: "SoftLab IT's custom ERP solution revolutionized our industry-specific operations, optimizing processes, and enhancing productivity across our organization.",
    rateNum: 5.0
  };

  clientsCard: ClientCard[] = [
    {
      image: '../../../assets/img/client-card/red-grocer-200-27e6.webp',
      hrefName: 'Red Grocer',
      ceoName: 'CEO',
      description: "SoftLab IT's custom ERP solution revolutionized our industry-specific operations, optimizing processes, and enhancing productivity across our organization.",
      rateNum: 5.0
    },
    {
      image: '../../../assets/img/client-card/rajarhat-200-9ce0.webp',
      hrefName: 'Rajar Hat',
      ceoName: 'CEO',
      description: "SoftLab IT's custom ERP solution revolutionized our industry-specific operations, optimizing processes, and enhancing productivity across our organization.",
      rateNum: 5.0
    },
    {
      image: '../../../assets/img/client-card/esquire-200-76bb.webp',
      hrefName: 'Esquire',
      ceoName: 'MD',
      description: "SoftLab IT's custom ERP solution revolutionized our industry-specific operations, optimizing processes, and enhancing productivity across our organization.",
      rateNum: 5.0
    }
  ];

}
