import { Component } from '@angular/core';
import { Cases } from 'src/app/interfaces/cases';


@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent {
  case: Cases = {
    image: '../../../assets/img/softlab-card/zobo-case-study-banner-card-1bb3.webp',
    headTitle: 'SoftLab IT Empowers MK Shippings Online Ticketing Solution',
    title: 'SoftLab IT partnered with MK Shipping to develop a ticketing solution using the MEAN stack. The solution improved efficiency, passenger.'
  };

  cases: Cases[] = [
   {
      image: '../../../assets/img/softlab-card/zobo-case-study-banner-card-1bb3.webp',
      headTitle: 'SoftLab IT Empowers MK Shippings Online Ticketing Solution',
      title: 'SoftLab IT partnered with MK Shipping to develop a ticketing solution using the MEAN stack. The solution improved efficiency, passenger.'
    },
    {
      image: '../../../assets/img/softlab-card/esquire-case-card-banner-7b41.webp',
      headTitle: "Empowering Growth: Transforming Esquire Electronics' E-commerce Platform",
      title: "Discover how Softlab IT transformed Esquire Electronics' online business with a custom-built MEAN stack e-commerce website."
    },
    {
      image: '../../../assets/img/softlab-card/case-study-ehsan-card-banner-9cd2.webp',
      headTitle: "Revolutionizing Book Sales: Ehsan Book Store's from Offline to Online Success",
      title: "Discover how SoftLab IT, a leading software development company, empowered Ehsan Book Store's digital transformation. Witness the remarkable transition from offline to online book sales, leveraging the."
    },
    {
      image: '../../../assets/img/softlab-card/r-one-computer-case-study-card-banner-2391.webp',
      headTitle: 'Scaling Up for R One Computers with Softlab IT',
      title: "Discover how Softlab IT propelled R One Computers' digital transformation with a modern e-commerce website built on the MEAN"
    },
    {
      image: '../../../assets/img/softlab-card/managemnt-banner-card-104ef.webp',
      headTitle: 'Revolutionizing Spot and Softlab IT',
      title: "Discover how Softlab IT partnered with Spot to revolutionize the grocery shopping experience. Through a custom-built e-commerce"
    },
    {
      image: '../../../assets/img/softlab-card/heriken-case-card-banner-abc4.webp',
      headTitle: "Transforming E-commerce Operations: Softlab IT's Success with Heri Ken",
      title: "Discover how Softlab IT's expertise in developing a high-performing e-commerce website enabled Heri Ken to overcome challenges, increase sales to over $1 million per month, and reduce server costs by 70%."
    }
  ]
}
