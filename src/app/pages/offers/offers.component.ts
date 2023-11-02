import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
  images = [
    {
      imageSrc: '../../assets/img/offer/banner-2-web-2-229a.webp',
      imageAlt: 'bannerOne'
    },
    {
      imageSrc: '../../assets/img/offer/banner-2-offer-web-e1e5.webp ',
      imageAlt: 'bannerOne'
    }
  ]
}
